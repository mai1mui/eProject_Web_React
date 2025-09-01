
import { useNavigate } from 'react-router-dom';
import fb1 from "./image/feedback1.png"
import fb2 from "./image/feedback2.png"
import fb3 from "./image/feedback3.png"
import fb4 from "./image/feedback4.png"
import fb5 from "./image/feedback5.png"
import fb6 from "./image/feedback6.png"
import fb7 from "./image/feedback7.png"
import fb8 from "./image/feedback8.png"
import em from "./image/icon-mail.png"

const ContactUs = () => {
    const navigate = useNavigate();  // Hook để điều hướng trong React Router
    const handleClick = () => {
        navigate(`/Feedback`);  // Điều hướng đến trang feedback
    };


    return (
        <section>
            <center>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-4">POLYSITE COMPANY CONTACT INFORMATION</h2>

                    {/* Trụ sở chính */}
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h3 className="font-bold text-lg">Head Office</h3>
                        <ul className="mt-2 text-sm space-y-1">
                            <p>📍 Address: 62 Street 36, Van Phuc Urban Area, Thu Duc, Ho Chi Minh City</p>
                            <p>👤 Representative: Mr. Huynh Quoc Huy – Director</p>
                            <p>📞 Phone: 0901 234 567</p>
                            <p>📧 Email: <a href="mailto:contact@polysite.com" className="text-blue-600 hover:underline">contact@polysite.com</a></p>
                        </ul>
                    </div>

                    {/* Chi nhánh Hà Nội */}
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h3 className="font-bold text-lg">Branch 1 – Hanoi</h3>
                        <ul className="mt-2 text-sm space-y-1">
                            <p>📍 Address: 456 Le Thanh Tong Street, Hoan Kiem, Hanoi</p>
                            <p>👤 Representative: Mr. Tran Hoang Anh – Branch Manager</p>
                            <p>📞 Phone: 0912 345 678</p>
                            <p>📧 Email: <a href="mailto:hanoi@polysite.com" className="text-blue-600 hover:underline">hanoi@polysite.com</a></p>
                        </ul>
                    </div>

                    {/* Chi nhánh Đà Nẵng */}
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <h3 className="font-bold text-lg">Branch 2 – Da Nang</h3>
                        <ul className="mt-2 text-sm space-y-1">
                            <p>📍 Address: 789 Tran Phu Street, Hai Chau, Da Nang</p>
                            <p>👤 Representative: Mr. Le Trung Hieu – Branch Manager</p>
                            <p>📞 Phone: 0934 567 890</p>
                            <p>📧 Email: <a href="mailto:danang@polysite.com" className="text-blue-600 hover:underline">danang@polysite.com</a></p>
                        </ul>
                    </div>

                    {/* Chi nhánh Cần Thơ */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold text-lg">Branch 3 – Can Tho</h3>
                        <ul className="mt-2 text-sm space-y-1">
                            <p>📍 Address: 321 30/4 Street, Ninh Kieu, Can Tho</p>
                            <p>👤 Representative: Ms. Le Thi Hanh Mai – Branch Manager</p>
                            <p>📞 Phone: 0978 901 234</p>
                            <p>📧 Email: <a href="mailto:cantho@polysite.com" className="text-blue-600 hover:underline">cantho@polysite.com</a></p>
                        </ul>
                    </div>
                </div>

                <h2>We look forward to hearing from you!</h2>
                <div className="gallery">
                    <div id="multiImageCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-3">
                                        <img src={fb1} className="d-block w-100" alt="Hình 1" />
                                    </div>
                                    <div className="col-3">
                                        <img src={fb2} className="d-block w-100" alt="Hình 2" />
                                    </div>
                                    <div className="col-3">
                                        <img src={fb3} className="d-block w-100" alt="Hình 3" />
                                    </div>
                                    <div className="col-3">
                                        <img src={fb4} className="d-block w-100" alt="Hình 4" />
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img src={fb5} className="d-block w-100" alt="Hình 5" />
                                    </div>
                                    <div className="col-3">
                                        <img src={fb6} className="d-block w-100" alt="Hình 6" />
                                    </div>
                                    <div className="col-3">
                                        <img src={fb7} className="d-block w-100" alt="Hình 7" />
                                    </div>
                                    <div className="col-3">
                                        <img src={fb8} className="d-block w-100" alt="Hình 8" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#multiImageCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#multiImageCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>

                <h2>Contact us via email
                    <a id="emailIcon" href="#!" onClick={(e) => { e.preventDefault(); handleClick(); }}>
                        <img src={em} alt="mail" width="3%" />
                    </a>
                </h2>

            </center>
        </section>
    );
};

export default ContactUs;
