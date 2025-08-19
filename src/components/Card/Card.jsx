// Card.jsx
import React from "react";
import "../Card/Card.css";
import unionIcon from "../../assets/images/Union.png";
import heartIcon from "../../assets/images/Vector2_corazon.svg";

export default function Card({
  card,
  onCardLike,
  onDelete,
  onOpenImagePopup,
  trashIcon,
  heartIcon,
  isLiked,
}) {
  const { name, link } = card;

  const handleLike = () => {
    onCardLike(card);
  };

  const handleDelete = () => {
    onDelete(card);
  };

  const handleImageClick = () => {
    onOpenImagePopup(card);
  };

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

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
          className={cardLikeButtonClassName}
          type="button"
          onClick={handleLike}
        >
          <img
            src={isLiked ? unionIcon : heartIcon}
            alt="Me gusta"
            className="card__like-icon"
          />
        </button>
      </div>
    </li>
  );
}
