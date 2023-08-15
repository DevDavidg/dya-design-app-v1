import React, { FC } from 'react';
import { useSearchContext } from '../../contexts/searchContext';
import { cardData } from '../../data/data';
import Card from './card';
import './styles.scss';

const getRandomAnimationClass = () => {
  const animations = [
    'bounceIn',
    'bounceInDown',
    'bounceInUp',
    'bounceInLeft',
    'bounceInRight',
  ];
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

const CardMain: FC = () => {
  const { searchQuery } = useSearchContext();

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main_card">
      {filteredCards.length === 0 ? (
        <h1>No hay resultados para esta búsqueda.</h1>
      ) : (
        filteredCards.map((card) => (
          <div
            key={card.title}
            className={`animated ${getRandomAnimationClass()}`}
          >
            <Card
              title={card.title}
              image={card.image}
              description={card.description}
              price={card.price}
              rating={card.rating}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default CardMain;
