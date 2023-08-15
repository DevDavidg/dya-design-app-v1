import { FC } from 'react';
import { cardData } from '../../data/data';
import Card from './card';
import './styles.scss';

interface CardMainProps {
  onSearchCard?: string;
}

const CardMain: FC<CardMainProps> = ({ onSearchCard }) => {
  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(onSearchCard?.toLowerCase() ?? '')
  );

  return (
    <div className="main_card">
      {filteredCards.length === 0 ? (
        <div className="main_card__not-found">
          <h1>Not Found</h1>
        </div>
      ) : (
        filteredCards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            image={card.image}
            description={card.description}
            price={card.price}
            rating={card.rating}
          />
        ))
      )}
    </div>
  );
};

export default CardMain;
