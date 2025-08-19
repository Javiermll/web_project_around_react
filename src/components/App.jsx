import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header..jsx";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import api from "../utils/apiInstance.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.getUserInfo();
        setCurrentUser(data);
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
      }
    })();
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then(setCards)
      .catch((error) => {
        console.error("Error al obtener las tarjetas:", error);
      });
  }, []);

  const handleUpdateUser = async (data) => {
    try {
      const newData = await api.updateUserInfo({
        name: data.name,
        about: data.about,
      });
      setCurrentUser(newData);
      handleClosePopup();
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  const handleUpdateAvatar = async (data) => {
    try {
      const newData = await api.updateAvatar({ avatar: data.avatar });
      setCurrentUser(newData);
      handleClosePopup();
    } catch (error) {
      console.error("Error al actualizar el avatar:", error);
    }
  };

  const handleCardLike = (card) => {
    const isLiked = !!card.isLiked;
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((prevCards) =>
          prevCards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.error("Error al cambiar el estado de like:", err);
      });
  };

  const handleCardDelete = (cardId) => {
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((prevCards) =>
          prevCards.filter((card) => card._id !== cardId)
        );
      })
      .catch((err) => {
        console.error("Error al eliminar la tarjeta:", err);
      });
  };

  const handleAddCard = (newCard) => {
    api
      .addCard(newCard)
      .then((data) => {
        setCards((prevCards) => [data, ...prevCards]);
        handleClosePopup();
      })
      .catch((err) => {
        console.error("Error al añadir la tarjeta:", err);
      });
  };

  const handleOpenPopup = (popupContent) => {
    setPopup(popupContent);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddCard={handleAddCard}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
