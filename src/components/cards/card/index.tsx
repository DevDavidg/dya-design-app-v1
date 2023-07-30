import React, { FC, useEffect, useState } from 'react';
import { CardProps } from '../../../data/data';
import Notification from '../../notification';
import './styles.scss';

const Card: FC<CardProps> = ({ title, image, description, price, rating }) => {
  const [userRating, setUserRating] = useState(rating);
  const [showNotification, setShowNotification] = useState(false);
  const [isAdded, setIsAdded] = useState(false); // Nuevo estado para el botón "Added"

  const handleRatingChange = (newRating: number) => {
    setUserRating(newRating);
    setShowNotification(true);
  };

  const getStarColor = (index: number) => {
    if (index <= userRating) {
      return '#ffc107';
    } else {
      return '#e4e5e9';
    }
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleAddToCartClick = () => {
    setIsAdded(true);
  };

  const handleAddedButtonClick = () => {
    setIsAdded(false);
  };

  return (
    <div className="card">
      <div className="card_main">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <span>{description}</span>
        <span className="price">{price}</span>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className="star"
              style={{ color: getStarColor(index), cursor: 'pointer' }}
              onClick={() => handleRatingChange(index)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      {!isAdded ? (
        <button onClick={handleAddToCartClick}>Add to Cart</button>
      ) : (
        <button className="addedButton" onClick={handleAddedButtonClick}>
          Added
        </button>
      )}

      <Notification message="Su voto se ha actualizado correctamente" visible={showNotification} />
    </div>
  );
};

export default Card;
