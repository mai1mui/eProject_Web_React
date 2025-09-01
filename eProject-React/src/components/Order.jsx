import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  // Cập nhật tổng thanh toán
  const updateTotalPayment = () => {
    let totalAmount = 0;
    cartData.forEach((product) => {
      totalAmount += product.price * product.quantity;
    });
    setTotal(totalAmount);
  };

  // Cập nhật số lượng sản phẩm
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cartData];
    updatedCart[index].quantity = newQuantity;
    updatedCart[index].amount = updatedCart[index].price * newQuantity;
    setCartData(updatedCart);
    updateTotalPayment();
  };

  // Xử lý xóa sản phẩm
  const handleRemove = (index) => {
    const updatedCart = cartData.filter((_, i) => i !== index);
    setCartData(updatedCart);
    updateTotalPayment();
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartData.length === 0) {
      alert('Your shopping cart is empty! Add products to your cart.');
      return;
    }
    alert('Order successful!\nStaff will contact you within 24 hours.');
    localStorage.removeItem('cartData');
    navigate('/ShoppingCart'); // Chuyển hướng về ShoppingCart hoặc trang khác nếu cần
  };

  // Lấy dữ liệu giỏ hàng từ localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cartData')) || [];
    setCartData(data);
  }, []);
  useEffect(() => {
    // Tính lại tổng thanh toán mỗi khi cartData thay đổi
    updateTotalPayment();
  }, [cartData]);

  return (
    <div className="order-form">
      
      <h2>Order Information</h2>
      <form id="orderForm" onSubmit={handleSubmit}>
        {/* Thông tin khách hàng */}
        <div className="order-header">
          <label>
            Name:
            <input
              type="text"
              name="customerName"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </label>
          <label>
          Phone Number:
            <input
              type="text"
              name="phone"
              placeholder="Enter a phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </div>

        {/* Danh sách sản phẩm đã chọn */}
        <div className="order-products">
          <h3>Selected Products</h3>
          <table className="order-cart">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartData.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>Your shopping cart is empty!</td>
                </tr>
              ) : (
                cartData.map((product, index) => (
                  <OrderItem
                    key={index}
                    product={product}
                    index={index}
                    handleQuantityChange={handleQuantityChange}
                    handleRemove={handleRemove}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Tổng thanh toán */}
        <OrderFooter total={total} />

        <div className="order-btn">
          <button type="submit" className="purchase-btn">Oder</button>
          <button type='button' className="purchase-btn" onClick={() => navigate('/ShoppingCart')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

const OrderItem = ({ product, index, handleQuantityChange, handleRemove }) => {
  return (
    <tr>
      <td className='oderitem'>
        <div className="product-info-item">
        <img src={Array.isArray(product.img) && product.img.length > 0 ? product.img[0] : ''} alt="Product" />
          <div className="basic-info">
            <p>Name: {product.name}</p>
            <p>Type: {product.type}</p>
          </div>
        </div>
      </td>
      <td className="price">{product.price} USD</td>
      <td>
        <div className="quantity-control">
          <button
            className="minus"
            type='button'
            onClick={() => handleQuantityChange(index, Math.max(0, product.quantity - 1))}
          >
            -
          </button>
          <input
            type="number"
            value={product.quantity}
            min="0"
            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
          />
          <button
            className="plus"
            type='button'
            onClick={() => handleQuantityChange(index, product.quantity + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="amount">{product.price * product.quantity} USD</td>
      <td>
        <button className="remove-btn" onClick={() => handleRemove(index)}>X</button>
      </td>
    </tr>
  );
};

const OrderFooter = ({ total }) => {
  return (
    <div className="order-footer">
      <div className="total-payment">
        <span>Total payment: </span>
        <span className="total-amount">{total} USD</span>
      </div>
    </div>
  );
};

export default OrderForm;
