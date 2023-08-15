import React, { FC, useEffect, useState } from 'react';
import { CardProps } from '../../../data/data';
import Button from '../form/button';
import './styles.scss';

const Card: FC<CardProps> = ({ title, image, description, price, rating }) => {
  const [userRating, setUserRating] = useState(rating);
  const [showNotification, setShowNotification] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

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
        <Button
          text="Add to cart"
          onClick={handleAddToCartClick}
          width={'100%'}
          padding={'10px 0'}
          variant="primary"
        />
      ) : (
        <Button
          text="Added"
          onClick={handleAddedButtonClick}
          variant="disabled"
          width={'100%'}
          padding={'10px 0'}
        />
      )}
    </div>
  );
};

export default Card;
