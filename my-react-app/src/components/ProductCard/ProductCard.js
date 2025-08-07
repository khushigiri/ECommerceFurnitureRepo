import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card product-card">
      <img src={product.images[0]} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-outline-primary">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
