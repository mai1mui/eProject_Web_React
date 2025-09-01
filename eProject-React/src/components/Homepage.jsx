import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from "./image/1.jpg"
import img2 from "./image/2.jpg"
import news1 from "./image/news1.jpg"
import news2 from "./image/news2.jpg"
import news3 from "./image/news3.jpg"
import news4 from "./image/news4.jpg"
import Carousel from "./Carousel";


const Homepage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Lấy dữ liệu JSON từ thư mục public
        fetch("/sp.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error loading the products data:", error));
    }, []);

    // Lọc ra các loại sản phẩm duy nhất
    const uniqueTypes = Array.from(new Set(products.map((product) => product.type)))
        .map((type) => {
            return products.find((product) => product.type === type);
        });
    return (
        <>
            <Carousel />
            <div className="products-heading"><h2>OUR PRODUCTS</h2></div>
            <section className="product-list">
                <div className="products">
                    {uniqueTypes.map((product) => (
                        <div className="product-info" key={product.id}>
                            <img src={process.env.PUBLIC_URL + product.img[0]} alt={product.name} />
                            <h3>{product.type}</h3>
                            <Link to={`/product?type=${product.type}`} className="btn-view-more">
                                View More
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className="about-section">
                <div className="container">
                    <h2>ABOUT POLYSITE</h2>
                    <p>
                        <strong>PolySite</strong> is a leading company in the production of high-quality plastic bottles,
                        ensuring absolute safety for users.
                        We are committed to using standard-compliant materials that are harmless to health.
                    </p>
                    <p>
                        With modern technology, Polysite delivers durable, aesthetically pleasing, and environmentally friendly
                        products.
                        We continuously improve our production processes to minimize negative environmental impacts.
                    </p>
                    <div className="about-button">
                        <Link to="/AboutUs" className="btn-view-more">
                            View More
                        </Link>
                    </div>
                    <div>
                        <div>
                            <img src={img1} alt="Polysite Image 1" />
                        </div>
                        <div>
                            <img src={img2} alt="Polysite Image 2" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="new-heading">
                <h2>News</h2>
                <section className="new">
                    <div className="news">
                        <div className="news-info">
                            <img src={news1} alt="News1" />
                            <h6>Recent Advances in Sustainable...</h6>
                            <div className="btn-view-more-container">
                                {/* Thay a bằng Link để chuyển hướng trong ứng dụng React */}
                                <Link to="/news1" className="btn-view-more">
                                    View More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="news-info">
                            <img src={news2} alt="News2" />
                            <h6>A Popular Choice in Plastic...</h6>
                            <div className="btn-view-more-container">
                                <Link to="/news2" className="btn-view-more">
                                    View More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="news-info">
                            <img src={news3} alt="News3" />
                            <h6>Plastic Bottle Recycling Tech...</h6>
                            <div className="btn-view-more-container">
                                <Link to="/news3" className="btn-view-more">
                                    View More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="news-info">
                            <img src={news4} alt="News4" />
                            <h6>Value and Recycling Potential...</h6>
                            <div className="btn-view-more-container">
                                <Link to="/news4" className="btn-view-more">
                                    View More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};


export default Homepage;
