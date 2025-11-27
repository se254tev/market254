import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">AntiGravity</div>
      <nav>
        <a href="#" className="mr-4">Home</a>
        <a href="#" className="mr-4">Shops</a>
        <a href="#">Categories</a>
      </nav>
    </header>
  );
};

export default Header;
