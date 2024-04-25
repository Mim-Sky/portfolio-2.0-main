import React from 'react';
import Card from './card';
import { PROJECT_DESCRIPTION } from '@/app/data';

const CardsContainer = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 xl:gap-16 lg:h-2/3">
      {PROJECT_DESCRIPTION.map(card => (
        <Card key={card.id} title={card.title} image={card.image} description={card.description} pageLink={card.pageLink} projectDetails={card.projectDetails} />
      ))}
    </div>
  );
};

export default CardsContainer;
