import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import cus from "./logo/custom-design-water-bottle.jpg";
import deli from "./logo/Delivery.jpg";
import print from "./logo/Printing.jpg";

const Services = () => {
    return (
        <section className="service-all">
            <div className="services-ovv">
                <div className="services-ovv-item">
                    <img src={cus} alt="Custom Plastic Bottles" />
                    <h3>Custom Plastic Bottles</h3>
                    <p>Design Your Personalized Bottles</p>
                    {/* Button điều hướng đến trang chi tiết của dịch vụ "Custom Plastic Bottles" */}
                    <Link to="/Services/Custom" className="service-detail-btn">
                        View More
                    </Link>
                </div>
                <div className="services-ovv-item">
                    <img src={deli} alt="Delivery & Distribution" />
                    <h3>Delivery & Distribution</h3>
                    <p>Global Logistics System</p>
                    {/* Button điều hướng đến trang chi tiết của dịch vụ "Delivery & Distribution" */}
                    <Link to="/Services/Delivery" className="service-detail-btn">
                        View More
                    </Link>
                </div>
                <div className="services-ovv-item">
                    <img src={print} alt="Printing & Labeling" />
                    <h3>Printing & Labeling</h3>
                    <p>Professional Printing Solutions</p>
                    {/* Button điều hướng đến trang chi tiết của dịch vụ "Printing & Labeling" */}
                    <Link to="/Services/Printing" className="service-detail-btn">
                        View More
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Services;
