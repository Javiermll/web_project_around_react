// src/components/Main/components/EditProfile/EditProfile.jsx
import React from "react";
import "../Popup/Popup.css";
import closeIcon from "../../assets/images/Close_Icon.png";

export default function EditProfile({ onClose, onUpdateProfile }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target["popup-name"].value;
    const about = e.target["popup-about"].value;

    if (onUpdateProfile) {
      onUpdateProfile({ name, about });
    }
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup__container">
        <h2 className="popup__title">Editar perfil</h2>
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
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
        <button className="popup__close-button" onClick={onClose}>
          <img
            src={closeIcon}
            alt="Cerrar formulario"
            className="popup__close-image"
          />
        </button>
      </div>
    </div>
  );
}
