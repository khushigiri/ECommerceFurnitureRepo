import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container text-center my-5">
      <img src="/media/banner.jpg" className="img-fluid mb-4" alt="Banner" />
      <h1>Welcome to Furniture Store</h1>
      <p>Discover modern, stylish furniture to transform your home.</p>
    </div>
  );
}

export default Home;
