import React from "react";
import "../Popup/Popup.css";
import closeIcon from "../../assets/images/Close_Icon.png";

export default function NewCard({ onClose, onAddCard }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target["card-name"].value;
    const link = e.target["card-link"].value;

    if (onAddCard) {
      onAddCard({ name, link });
    }
    onClose();
  };

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <button className="popup__close-button" onClick={onClose}>
        <img src={closeIcon} alt="Boton de cerrar formulario" />
      </button>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          required
          type="text"
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
