import React from 'react';
import Card from './card'; // Adjust the import path as necessary

const cardsData = [
  { id: 1, title: 'Card 1', image: '/path/to/image1.jpg', description: 'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ' },
  { id: 2, title: 'Card 2', image: '/path/to/image2.jpg', description: 'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ' },
  { id: 3, title: 'Card 3', image: '/path/to/image3.jpg', description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from ' },
  { id: 4, title: 'Card 4', image: '/path/to/image4.jpg', description: 'This is card 4' },
];

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-4">
      {cardsData.map(card => (
        <Card key={card.id} title={card.title} image={card.image} description={card.description} />
      ))}
    </div>
  );
};

export default CardsContainer;
