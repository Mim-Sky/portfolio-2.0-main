import React from 'react';
import Card from './card'; // Adjust the import path as necessary
import { PROJECT_DESCRIPTION } from '@/app/data';

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {PROJECT_DESCRIPTION.map(card => (
        <Card key={card.id} title={card.title} image={card.image} description={card.description} />
      ))}
    </div>
  );
};

export default CardsContainer;
