import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src="https://via.placeholder.com/300x200" alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{item.name}</h3>
        <p className="text-gray-400">${item.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
