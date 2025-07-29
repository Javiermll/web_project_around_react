// Card.jsx
import React from "react";
import "../Card/Card.css";

export default function Card({
  card,
  onLike,
  onDelete,
  onOpenImagePopup,
  trashIcon,
  heartIcon,
}) {
  const { name, link, isLiked, _id } = card;

  const handleLike = () => {
    onLike(_id);
  };

  const handleDelete = () => {
    onDelete(_id);
  };

  const handleImageClick = () => {
    onOpenImagePopup(card);
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={handleImageClick}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={handleDelete}
      >
        <img
          src={trashIcon}
          alt="Eliminar tarjeta"
          className="card__delete-icon"
        />
      </button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={`card__like-button ${
            isLiked ? "card__like-button_liked" : ""
          }`}
          onClick={handleLike}
        >
          <img src={heartIcon} alt="Me gusta" className="card__like-icon" />
        </button>
      </div>
    </li>
  );
}
