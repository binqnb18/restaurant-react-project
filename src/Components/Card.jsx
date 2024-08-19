import React from 'react';
import card1 from '../assets/img/icon1.png';
import card2 from '../assets/img/icon2.png';
import card3 from '../assets/img/icon3.png';
import card4 from '../assets/img/icon4.png';

const Card = () => {

  const cardData = [
    { img: card1, title: 'Breakfast', description: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { img: card2, title: 'Main Dishes', description: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { img: card3, title: 'Drinks', description: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { img: card4, title: 'Desserts', description: 'In the new era of technology we look in the future with certainty and pride for our life.' }
  ];

  return (
    <div className="text-center py-12 px-4 lg:px-8">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Browse Our Menu</h2>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-10 flex flex-col items-center border border-gray-300 rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-110"
          >
            <div className="rounded-full p-2 mb-2">
              <img src={card.img} alt={card.title} className="h-20 w-20" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-600 text-center mb-2">{card.description}</p>
            <a href="#" className="text-red-600 font-bold hover:underline">Explore Menu</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
