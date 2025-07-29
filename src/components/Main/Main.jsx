import React, { useState } from "react";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import ImagePopup from "../ImagePopup/ImagePopup";
import RemoveCard from "../RemoveCard/RemoveCard";
import EditAvatar from "../EditAvatar/EditAvatar";
import Card from "../Card/Card";
import avatar from "../../assets/images/JacquesC.jpg";
import editIcon from "../../assets/images/Vector1.png";
import addIcon from "../../assets/images/Add_Button.png";
import trashIcon from "../../assets/images/Trash.svg";
import heartIcon from "../../assets/images/Vector2_corazon.svg";

import "./Main.css";

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ]);

  // Estado para almacenar los datos del perfil
  const [profile, setProfile] = useState({
    name: "Jacques Cousteau",
    about: "Explorador",
    avatar: avatar,
  });

  const openEditProfilePopup = () => {
    setPopup({
      title: "Editar perfil",
      children: (
        <EditProfile
          onClose={handleClosePopup}
          onUpdateProfile={handleUpdateProfile}
        />
      ),
    });
  };

  const openAddCardPopup = () => {
    setPopup({
      title: "Nuevo lugar",
      children: (
        <NewCard onClose={handleClosePopup} onAddCard={handleAddCard} />
      ),
    });
  };

  const openImagePopup = (card) => {
    setPopup({
      title: "Imagen",
      children: <ImagePopup card={card} onClose={handleClosePopup} />,
    });
  };

  const openDeleteCardPopup = (card) => {
    setPopup({
      title: "¿Estás seguro/a?",
      children: (
        <RemoveCard
          onClose={handleClosePopup}
          onConfirm={() => handleDelete(card._id)}
        />
      ),
    });
  };

  const openAvatarPopup = () => {
    setPopup({
      title: "Cambiar foto de perfil",
      children: (
        <EditAvatar
          onClose={handleClosePopup}
          onUpdateAvatar={handleUpdateAvatar}
        />
      ),
    });
  };

  //Funcion para manejar la actualizacion del avatar
  const handleUpdateAvatar = (newAvatar) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      avatar: newAvatar,
    }));
  };

  // Funcion para manejar la adicion de una nueva tarjeta
  const handleAddCard = (newCard) => {
    setCards((prevCards) => [
      ...prevCards,
      {
        isLiked: false,
        _id: Date.now().toString(),
        name: newCard.name,
        link: newCard.link,
        owner: "currentUserId",
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  // Función para manejar la actualización del perfil
  const handleUpdateProfile = (newProfile) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      name: newProfile.name,
      about: newProfile.about,
    }));
  };

  // Función para cerrar el popup
  const handleClosePopup = () => {
    setPopup(null);
  };

  // Función para manejar el like
  const handleLike = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card._id === id ? { ...card, isLiked: !card.isLiked } : card
      )
    );
  };

  // Función para manejar la eliminación de una tarjeta
  const handleDelete = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card._id !== id));
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img
            src={profile.avatar}
            alt="Jacques Cousteau"
            className="profile__avatar"
          />
          <div className="profile__avatar-overlay" onClick={openAvatarPopup}>
            <img
              src={editIcon}
              alt="Editar avatar"
              className="profile__avatar-edit-icon"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{profile.name}</h1>
          <p className="profile__occupation">{profile.about}</p>
          <button
            className="profile__edit-button"
            onClick={openEditProfilePopup}
          >
            <img
              src={editIcon}
              alt="Editar perfil"
              className="profile__edit-icon"
            />
          </button>
        </div>

        {/* Parte 3: Add - Button */}
        <button className="profile__add-button" onClick={openAddCardPopup}>
          <img src={addIcon} alt="Add Button" className="profile__add-icon" />
        </button>
      </section>

      {/* Sección 2: ELEMENTOS */}
      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onLike={handleLike}
              onDelete={() => openDeleteCardPopup(card)}
              onOpenImagePopup={openImagePopup}
              trashIcon={trashIcon}
              heartIcon={heartIcon}
            />
          ))}
        </ul>
      </section>

      {/* Renderización condicional del popup */}
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          className="popup_opened"
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
