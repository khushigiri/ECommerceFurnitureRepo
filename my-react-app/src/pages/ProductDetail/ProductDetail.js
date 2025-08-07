import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../assets/data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-5">Product not found!</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Color:</strong> {product.color}</p>
      <p><strong>Type:</strong> {product.type}</p>
      <p><strong>Description:</strong> {product.description}</p>

      <div className="row">
        {product.images && product.images.map((imgPath, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <img 
              src={process.env.PUBLIC_URL + imgPath}
              alt={`${product.name} ${index + 1}`} 
              className="img-fluid rounded border"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
