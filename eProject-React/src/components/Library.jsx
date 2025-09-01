import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();  // Hook để điều hướng trong React Router

  const handleClick = (productId) => {
    navigate(`/product-detail/${productId}`);  // Điều hướng đến trang chi tiết với productId
  };
  // Fetch product data from JSON file
  useEffect(() => {
    fetch("/sp.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading product data:", error));
  }, []);

  // Group products by their 'type'
  const groupedProducts = products.reduce((groups, product) => {
    const type = product.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(product);
    return groups;
  }, {});

  return (
    <div className="library-container">
      <h1>Library</h1>
      <div className="library-product-list">
        {Object.keys(groupedProducts).map((type) => (
          <div key={type} className="library-type-section">
            <h2>{type}</h2>
            <div className="library-products">
              {groupedProducts[type].map((product) => (
                <div key={product.id} className="library-product-item">
                  <img
                    src={product.img[0]}
                    alt={product.name}
                    className="library-product-image"
                  />
                  <h3>{product.name}</h3>
                  <div className="library-price">Price: {product.price} USD</div>
                  <button 
                    className="view-details-button"
                    onClick={() => handleClick(product.id)} // Gọi hàm khi bấm nút
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
