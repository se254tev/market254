import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import ItemCard from './components/ItemCard';

const App = () => {
  const shops = [
    { name: 'Shop 1', price: 100 },
    { name: 'Shop 2', price: 200 },
    { name: 'Shop 3', price: 300 },
    { name: 'Shop 4', price: 400 },
    { name: 'Shop 5', price: 500 },
  ];

  const items = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 },
    { name: 'Item 4', price: 40 },
    { name: 'Item 5', price: 50 },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main className="p-8">
        <Carousel title="Featured Shops">
          {shops.map((shop, index) => (
            <ItemCard key={index} item={shop} />
          ))}
        </Carousel>
        <Carousel title="Popular Items">
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </Carousel>
      </main>
      <Footer />
    </div>
  );
};

export default App;
