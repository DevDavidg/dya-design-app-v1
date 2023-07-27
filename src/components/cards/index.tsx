import { FC } from 'react';
import { cardData } from '../../data/data';
import Card from './card';
import './styles.scss';

const CardMain: FC = () => {
  return (
    <div className='main_card'>
      {cardData.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          image={card.image}
          description={card.description}
          price={card.price}
          rating={card.rating}
        />
      ))}
    </div>
  );
};

export default CardMain;
