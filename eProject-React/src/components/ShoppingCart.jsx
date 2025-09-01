import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Lấy giỏ hàng từ localStorage khi trang tải
        const storedCart = JSON.parse(localStorage.getItem('cartData')) || [];
        setCart(storedCart);
    }, []);

    useEffect(() => {
        // Đồng bộ hóa với localStorage mỗi khi cart thay đổi
        localStorage.setItem('cartData', JSON.stringify(cart));
    }, [cart]);

    const updateAmount = (id, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(product =>
                product.id === id ? { ...product, quantity: newQuantity } : product
            )
        );
    };

    const removeProduct = (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        setCart(updatedCart);
    };

    const calculateTotalPayment = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const handlePurchase = () => {
        const cartData = cart
            .filter(product => product.quantity > 0)
            .map(product => ({
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                amount: product.price * product.quantity,
                img: product.img
            }));

        localStorage.setItem('cartData', JSON.stringify(cartData));
        navigate(`/Oder`)
    };

    return (
        <section className="shopping-cart">
            <center>
                <div className="cart-container">
                    <h1>Shopping Cart</h1>

                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <div className="product-info">
                                            <img src={product.img[0]} alt={product.name} />
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
                                                onClick={() => updateAmount(product.id, Math.max(0, product.quantity - 1))}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                value={product.quantity}
                                                min="0"
                                                onChange={(e) => {
                                                    const value = parseInt(e.target.value);
                                                    if (!isNaN(value)) {
                                                        updateAmount(product.id, value);
                                                    }
                                                }}
                                            />
                                            <button
                                                className="plus"
                                                onClick={() => updateAmount(product.id, product.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="amount">{product.price * product.quantity} USD</td>
                                    <td>
                                        <button className="remove-btn" onClick={() => removeProduct(product.id)}>
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="total-payment">
                        <span>Total payment:</span>
                        <span className="total-amount" style={{ color: '#f00' }}>
                            {calculateTotalPayment()} USD
                        </span>

                        <button className="purchase-btn" onClick={handlePurchase}>
                            Purchase
                        </button>
                    </div>
                </div>
            </center>
        </section>
    );
};

export default ShoppingCart;
