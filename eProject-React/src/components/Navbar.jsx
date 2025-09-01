import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink thay vì Link
import logo from "./logo/Polysite.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [query, setQuery] = useState(""); // Khai báo query để lưu trữ giá trị tìm kiếm
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [products, setProducts] = useState([]); // State lưu trữ sản phẩm từ JSON
    const navigate = useNavigate(); // Hook để điều hướng

    // Hàm tìm kiếm
    const handleSearch = (event) => {
        event.preventDefault();
        // Khi người dùng nhấn search, chuyển đến trang ProductSearch và truyền query tìm kiếm
        navigate(`/product-search?q=${query}`);
    };

    // Tải dữ liệu từ file JSON khi component được mount
    useEffect(() => {
        fetch('/sp.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data); // Lưu sản phẩm vào state
            })
            .catch(error => console.error('Error loading JSON file:', error));
    }, []);

    // Hàm lọc sản phẩm trùng lặp
    const uniqueProducts = [...new Set(products.map(item => item.type))].map(
        type => {
            return products.find(item => item.type === type);
        }
    );

    return (
        <header>
            <div className="top">
                <div id="logo">
                    {/* Logo link to homepage */}
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="myNavRight">
                    <div className="visitor-counter">
                        <p>Active Visitors: <span id="visitor-count">1000</span></p>
                    </div>
                    <Link to="https://www.facebook.com" target="_blank">
                        <i className="fab fa-facebook"></i>
                    </Link>
                    <Link to="https://twitter.com" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="https://youtube.com" target="_blank">
                        <i className="fab fa-youtube"></i>
                    </Link>

                    <Link to="/shoppingcart" className="shopping-cart-link">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                    <Link to="/shoppingcart">
                        <button className="shopping-cart-button">Shopping Cart</button>
                    </Link>
                </div>
            </div>
            <nav className="myNav">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Home Page
                </NavLink>
                <NavLink
                    to="/AboutUs"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    About Us
                </NavLink>
                {/* Dropdown Products */}
                <div
                    className="dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}  // Mở dropdown khi hover vào
                    onMouseLeave={() => setDropdownOpen(false)} // Đóng dropdown khi rời chuột
                >
                    <NavLink
                        to="/product"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Products
                    </NavLink>
                    {dropdownOpen && (
                        <div className="dropdown-content" aria-expanded={dropdownOpen}>
                            {/* Duyệt qua mảng sản phẩm đã lọc */}
                            {uniqueProducts.length > 0 ? (
                                uniqueProducts.map((product, index) => (
                                    <NavLink
                                        key={product.id} // Sử dụng id làm key
                                        to={`/product?type=${product.type}`} // Chuyển đến trang ProductList với type được chọn
                                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                    >
                                        {product.type}
                                    </NavLink>
                                ))
                            ) : (
                                <p>No products available</p> // Hiển thị thông báo nếu không có sản phẩm
                            )}
                        </div>
                    )}
                </div>

                {/* Dropdown Services */}
                <div
                    className="dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <NavLink
                        to="/Services"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Services
                    </NavLink>
                    {dropdownOpen && (
                        <div className="dropdown-content" aria-expanded={dropdownOpen}>
                            <NavLink
                                to="/Services/Custom"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                Custom Plastic Bottles
                            </NavLink>
                            <NavLink
                                to="/Services/Delivery"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                Delivery & Distribution
                            </NavLink>
                            <NavLink
                                to="/Services/Printing"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                Printing & Labeling
                            </NavLink>
                        </div>
                    )}
                </div>
                <NavLink
                    to="/Library"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Library
                </NavLink>
                <NavLink
                    to="/ContactUs"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Contact Us
                </NavLink>
                {/* Product Search Form */}
                <form className="d-flex feedback-form" onSubmit={handleSearch}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search products"
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} // Cập nhật state với giá trị người dùng nhập
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </nav>
        </header>
    );
};

export default Navbar;
