import React, { FC, useState } from 'react';
import { CardProps } from '../../../data/data';
import Notification from '../../notification';
import './styles.scss';

const Card: FC<CardProps> = ({ title, image, description, price, rating }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [userRating, setUserRating] = useState(rating);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCartClick = () => {
    setIsAddedToCart(true);
  };

  const handleRatingChange = (newRating: number) => {
    setUserRating(newRating);
    setShowNotification(true);
  };

  const getStarColor = (index: number) => {
    const ratingRounded = Math.round(userRating * 2) / 2;
    if (index <= ratingRounded) {
      return '#ffc107';
    } else {
      return '#e4e5e9';
    }
  };

  return (
    <div className="card">
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
      {!isAddedToCart ? (
        <button onClick={handleAddToCartClick}>Add to Cart</button>
      ) : (
        <button disabled>Added</button>
      )}

      {showNotification && <Notification message="Su voto se ha actualizado correctamente" />}
    </div>
  );
};

export default Card;
