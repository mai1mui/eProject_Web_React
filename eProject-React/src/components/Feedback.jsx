import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
    const [contactModal, setContactModal] = useState(true); // Giả sử bạn quản lý trạng thái modal
    const navigate = useNavigate()

    // Hàm để đóng modal
    const closeModal = () => {
        setContactModal(false);
        navigate('/ContactUs'); // Điều hướng về trang ContactUs
    };

    // Hàm kiểm tra
    const check = (e) => {
        e.preventDefault(); // Thực hiện kiểm tra hoặc xử lý dữ liệu từ form
        alert("Thank you for contacting us!\nWe will reply within 1-2 business days, except Saturday and Sunday.");
        navigate('/ContactUs'); // Điều hướng về trang ContactUs
    };

    return (
        <>
            {contactModal && (
                <div className="request-form" id="contactModal">
                    <form className="contact-form" action="javascript:void(0);" onSubmit={check}>
                        <button className="close-btn" onClick={closeModal}>X</button>
                        <h2 align="center">Sample Request</h2>
                        <table>

                            <tr>
                                <td align="left" style={{ padding: '15px' }}>Name:</td>
                                <td><input type="text" className="form-group" id="txtName" placeholder="Enter name" autoFocus /></td>
                            </tr>
                            <tr>
                                <td align="left" style={{ padding: '15px' }}>Email:</td>
                                <td><input type="email" className="form-group" id="txtMail" placeholder="Enter email" /></td>
                            </tr>
                            <tr>
                                <td align="left" style={{ padding: '15px' }}>Receive Email:</td>
                                <td>
                                    <input type="radio" name="mailRecep" value="yes" checked />Yes
                                    <input type="radio" name="mailRecep" value="no" />No
                                    <div style={{ width: '600px' }}>You will receive the latest information such as PolySite products, preferably if you agree to receive emails.</div>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" style={{ padding: '15px' }}>Phone:</td>
                                <td><input type="tel" className="form-group" id="txtPhone" placeholder="Enter phone number" /></td>
                            </tr>
                            <tr>
                                <td align="left" style={{ padding: '15px' }}>Fax:</td>
                                <td><input type="tel" className="form-group" id="txtFax" placeholder="Enter fax number" /></td>
                            </tr>
                            <tr>
                                <td align="left" style={{ padding: '15px' }}>Content:</td>
                                <td><textarea className="textare" placeholder="Please describe the problem in detail so we can serve you better." /></td>
                            </tr>
                            <tr style={{ marginTop: '10px' }}>
                                <td></td>
                                <td>
                                    <input type="checkbox" id="terms" name="terms" required />
                                    <label htmlFor="terms">I agree with <a href="https://drive.google.com/file/d/1teRQy40TV2SPAg3ITZHZaIgYW4BeZ71X/view?usp=sharing" download="Điều Khoản và Chính Sách Dịch Vụ PolySite.pdf">PolySite Terms and Policies</a></label>
                                </td>
                            </tr>
                        </table>
                        <div className='ban'>
                            <button type="submit" className="btn">Confirm</button>
                            <button type="reset" className="btn">Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Feedback;
