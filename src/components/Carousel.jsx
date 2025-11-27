import React from 'react';

const Carousel = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4">
        {children}
      </div>
    </div>
  );
};

export default Carousel;
