import React, { useState } from "react";
import Header from "../components/Header/Header..jsx";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

import closeIcon from "../assets/images/Close_Icon.png";
// Importa otros recursos necesarios

function App() {
  const [count, setCount] = useState(0);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);

  // Funciones para abrir y cerrar popups
  const openEditProfilePopup = () => setIsEditProfilePopupOpen(true);
  const closeEditProfilePopup = () => setIsEditProfilePopupOpen(false);

  const openAddCardPopup = () => setIsAddCardPopupOpen(true);
  const closeAddCardPopup = () => setIsAddCardPopupOpen(false);

  const openImagePopup = () => setIsImagePopupOpen(true);
  const closeImagePopup = () => setIsImagePopupOpen(false);

  const openDeleteCardPopup = () => setIsDeleteCardPopupOpen(true);
  const closeDeleteCardPopup = () => setIsDeleteCardPopupOpen(false);

  const openAvatarPopup = () => setIsAvatarPopupOpen(true);
  const closeAvatarPopup = () => setIsAvatarPopupOpen(false);

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />

        {/* Popups */}
        {isEditProfilePopupOpen && (
          <dialog className="popup" id="editProfilePopup">
            <div className="popup__container">
              <h2 className="popup__title">Editar perfil</h2>
              <form className="popup__form" novalidate>
                <fieldset className="popup__set">
                  <label className="popup__field">
                    <input
                      type="text"
                      id="popup-name"
                      name="popup-name"
                      className="popup__input"
                      placeholder="Nombre"
                      required
                      minLength={2}
                      maxLength={40}
                    />
                    <span className="popup__error popup-name-error"></span>
                  </label>
                  <label className="popup__field">
                    <input
                      type="text"
                      id="popup-about"
                      name="popup-about"
                      className="popup__input"
                      placeholder="Acerca de"
                      required
                      minLength={2}
                      maxLength={200}
                    />
                    <span className="popup__error popup-about-error"></span>
                  </label>
                  <button type="submit" className="popup__button button">
                    Guardar
                  </button>
                </fieldset>
              </form>
              <button
                className="popup__close-button"
                onClick={closeEditProfilePopup}
              >
                <img
                  src={closeIcon}
                  alt="Cerrar formulario"
                  className="popup__close-image"
                />
              </button>
            </div>
          </dialog>
        )}

        {isAddCardPopupOpen && (
          <dialog className="popup" id="addCardPopup">
            <div className="popup__container">
              <h2 className="popup__title-add">Nuevo Lugar</h2>
              <form className="popup__form popup__form-add" novalidate>
                <fieldset className="popup__set">
                  <label className="popup__field">
                    <input
                      type="text"
                      id="popup-place"
                      name="popup-place"
                      className="popup__input"
                      placeholder="Título"
                      required
                      minLength={2}
                      maxLength={30}
                    />
                    <span className="popup__error popup-place-error"></span>
                  </label>
                  <label className="popup__field">
                    <input
                      type="url"
                      id="popup-image-url"
                      name="popup-image-url"
                      className="popup__input"
                      placeholder="Enlace a la imagen"
                      pattern="https?://.+\..+"
                      title="Ingresa una URL completa de imagen (jpg, png o gif)"
                      required
                      minLength={2}
                    />
                    <span className="popup__error popup-image-url-error"></span>
                  </label>
                  <button type="submit" className="popup__button button">
                    Crear
                  </button>
                </fieldset>
              </form>
              <button
                className="popup__close-buttonAdd"
                onClick={closeAddCardPopup}
              >
                <img
                  src={closeIcon}
                  alt="Cerrar formulario"
                  className="popup__close-image"
                />
              </button>
            </div>
          </dialog>
        )}

        {isImagePopupOpen && (
          <dialog className="popup popup_type_image" id="imagePopup">
            <div className="popup__container popup__container_type_image">
              <figure className="popup__figure">
                <img src="" alt="" className="popup__image" />
                <figcaption className="popup__caption"></figcaption>
              </figure>
              <button
                type="button"
                className="popup__close-button_type_image"
                onClick={closeImagePopup}
              ></button>
            </div>
          </dialog>
        )}

        {isDeleteCardPopupOpen && (
          <dialog className="popup" id="deleteCardPopup">
            <div className="popup__container">
              <h2 className="popup__title popup__title-deleteCard">
                ¿Estás seguro/a?
              </h2>
              <form className="popup__form popup__form-delete" novalidate>
                <button
                  type="submit"
                  className="popup__button popup__button_confirm"
                >
                  Sí
                </button>
              </form>
              <button
                className="popup__close-button popup__close-buttonDelete"
                onClick={closeDeleteCardPopup}
              >
                <img
                  src={closeIcon}
                  alt="Cerrar"
                  className="popup__close-image"
                />
              </button>
            </div>
          </dialog>
        )}

        {isAvatarPopupOpen && (
          <dialog className="popup" id="avatarPopup">
            <div className="popup__container">
              <h2 className="popup__title">Cambiar foto de perfil</h2>
              <form className="popup__form popup__form-avatar" novalidate>
                <fieldset className="popup__set">
                  <label className="popup__field">
                    <input
                      type="url"
                      name="avatar"
                      id="avatar-url"
                      className="popup__input"
                      placeholder="Enlace de la imagen"
                      required
                    />
                    <span className="popup__error avatar-url-error"></span>
                  </label>
                  <button type="submit" className="popup__button button">
                    Guardar
                  </button>
                </fieldset>
              </form>
              <button
                className="popup__close-button"
                onClick={closeAvatarPopup}
              >
                <img
                  src={closeIcon}
                  alt="Cerrar formulario"
                  className="popup__close-image"
                />
              </button>
            </div>
          </dialog>
        )}
      </div>
    </>
  );
}

export default App;
