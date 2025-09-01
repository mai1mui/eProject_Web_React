import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-map-container">
        <div className="contact">
          <h3>Head Office</h3>
          <p>📍 Address: 62 Street 36, Van Phuc Urban Area, Thu Duc, Ho Chi Minh City</p>
          <p>👤 Representative: Mr. Huynh Quoc Huy – Director</p>
          <p>📞 Hotline: 0911 659 131 | 0973 111 086</p>
          <p>📧 Email: <a href="mailto:contact@polysite.com">contact@polysite.com</a></p>
        </div>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.551751472707!2d106.712023!3d10.8455748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529564f2b4679%3A0x92c1b5bfdc78c98!2zRlBUIEFwdGVjaCBW4bqhbiBQaMO6Yw!5e0!3m2!1svi!2s!4v1740235563919!5m2!1svi!2s"
            width="100%"  // Thay đổi để iframe chiếm 100% chiều rộng của container
            height="300"
            style={{ border: 0 }}  // Sử dụng style inline thay vì thuộc tính HTML
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <p>© 2025 Premium Plastic Cups | Contact us via email: <a href="mailto:Polysite@example.com">Polysite@example.com</a></p>
    </footer>
  );
};

export default Footer;
