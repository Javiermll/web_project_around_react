// src/components/Main/components/DeleteCard/DeleteCard.jsx
import React from "react";
import "../Popup/Popup.css";
import closeIcon from "../../assets/images/Close_Icon.png";

export default function RemoveCard({ onClose, onConfirm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <div>
      <form
        className="popup__form popup__form-delete"
        noValidate
        onSubmit={handleSubmit}
      >
        <button type="submit" className="popup__button popup__button_confirm">
          Sí
        </button>
      </form>
      <button
        className="popup__close-button popup__close-buttonDelete"
        onClick={onClose}
      >
        <img src={closeIcon} alt="Cerrar" className="popup__close-image" />
      </button>
    </div>
  );
}
