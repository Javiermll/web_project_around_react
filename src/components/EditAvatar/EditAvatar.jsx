import React from "react";
import "../Popup/Popup.css";
import closeIcon from "../../assets/images/Close_Icon.png";

export default function EditAvatar({ onClose, onUpdateAvatar }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const avatarLink = e.target["avatar"].value;

    if (onUpdateAvatar) {
      onUpdateAvatar(avatarLink);
    }
    onClose(); //Cerrar el popup despues de enviar formulario
  };

  return (
    <div>
      <form
        className="popup__form popup__form-avatar"
        noValidate
        onSubmit={handleSubmit}
      >
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
      <button className="popup__close-button" onClick={onClose}>
        <img
          src={closeIcon}
          alt="Cerrar formulario"
          className="popup__close-image"
        />
      </button>
    </div>
  );
}
