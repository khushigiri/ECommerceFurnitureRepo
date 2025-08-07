import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Modern Chair',
    price: '₹4,999',
    image: '/media/chair1.jpg',
  },
  {
    id: 2,
    name: 'Wooden Table',
    price: '₹7,499',
    image: '/media/table1.jpg',
  },
  {
    id: 3,
    name: 'Elegant Sofa',
    price: '₹12,999',
    image: '/media/sofa1.jpg',
  },
];

function ProductListing() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
