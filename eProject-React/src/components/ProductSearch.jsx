import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search).get('q'); // Lấy query từ URL
  const handleClick = (productId) => {
    navigate(`/product-detail/${productId}`);  // Điều hướng đến trang chi tiết với productId
  };
  const navigate = useNavigate();  // Hook để điều hướng trong React Router

  useEffect(() => {
    if (!query) {
      setFilteredProducts([]); // Nếu không có query, không cần lọc sản phẩm
      setLoading(false);
      return;
    }

    fetch('/sp.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        const filtered = data.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.des.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product Search Results</h1>
      <div className="products">
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-info">
              {/* Hiển thị hình ảnh đầu tiên */}
              {product.img && product.img.length > 0 && (
                <img
                  src={product.img[0]}
                  alt={product.name}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              )}
              <h3>{product.name}</h3>
              <p>Price: {product.price} USD</p>
              <button onClick={() => handleClick(product.id)}>View More</button>
            </div>
          ))
        ) : (
          <p>No matching products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
