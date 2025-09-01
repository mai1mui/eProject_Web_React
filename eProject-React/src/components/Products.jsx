import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // Lưu sản phẩm đã lọc
    const [selectedType, setSelectedType] = useState(''); // Lưu type đã chọn
    const navigate = useNavigate();  // Hook để điều hướng trong React Router
    const location = useLocation(); // Để lấy thông tin từ query string trong URL

    useEffect(() => {
        fetch('/sp.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);  // Lưu tất cả sản phẩm khi tải thành công
            })
            .catch(error => console.error("Lỗi khi tải dữ liệu sản phẩm:", error));
    }, []);

    useEffect(() => {
        // Lấy giá trị query string từ URL, ví dụ ?type=someType
        const queryParams = new URLSearchParams(location.search);
        const type = queryParams.get('type'); // Lấy giá trị 'type' từ query string

        setSelectedType(type || ''); // Nếu có type trong URL, set vào state
    }, [location]);

    useEffect(() => {
        // Lọc sản phẩm theo type từ state `selectedType`
        if (selectedType === '') {
            setFilteredProducts(products); // Nếu không có type, hiển thị tất cả sản phẩm
        } else {
            const filtered = products.filter(product => product.type === selectedType);
            setFilteredProducts(filtered);
        }
    }, [selectedType, products]);

    const handleClick = (productId) => {
        navigate(`/product-detail/${productId}`);  // Điều hướng đến trang chi tiết với productId
    };

    // Hàm lọc sản phẩm theo type
    const handleFilterChange = (event) => {
        const selectedType = event.target.value;
        setSelectedType(selectedType);

        // Lọc sản phẩm theo type
        if (selectedType === '') {
            setFilteredProducts(products);  // Nếu không chọn type, hiển thị tất cả sản phẩm
        } else {
            const filtered = products.filter(product => product.type === selectedType);
            setFilteredProducts(filtered);
        }
    };

    // Lấy các loại sản phẩm (types) duy nhất từ danh sách sản phẩm
    const productTypes = [...new Set(products.map(product => product.type))];

    return (
        <div className="product-list">
            <h1>Product List</h1>

            {/* Bộ lọc loại sản phẩm */}
            <div className="filter">
                <label htmlFor="type">Filter by type: </label>
                <select id="type" value={selectedType} 
                onChange={event => {
                    setSelectedType(event.target.value);
                    navigate(`/product?type=${event.target.value}`); // Cập nhật URL khi chọn loại mới
                }}>
                    <option value="">All</option>
                    {productTypes.map(type => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            <div className="products">
                {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="product-info">
                            {/* Hiển thị hình ảnh đầu tiên */}
                            {product.img.length > 0 && (
                                <img
                                    src={product.img[0]}
                                    alt={product.name}
                                    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                                />
                            )}
                            <h3>{product.name}</h3>
                            <p>Price: {product.price} USD</p>
                            <button onClick={() => handleClick(product.id)}>View More</button>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;
