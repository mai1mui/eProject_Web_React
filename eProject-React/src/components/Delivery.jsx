import React from 'react';

const DeliverySection = () => {
  return (
    <section className="delivery-section bg-light py-5">
      <div className="container">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Delivery & Distribution</h4>
          <h2 className="display-5 mb-4">Global Logistics System</h2>
          <p className="lead">Ensuring fast - Safe - On-time delivery</p>
        </div>

        <div className="row g-4">
          {/* Domestic Delivery */}
          <div className="col-md-6 col-lg-3">
            <div className="delivery-card">
              <div className="delivery-icon mb-3">
                <i className="fas fa-truck-fast fa-3x text-primary"></i>
              </div>
              <h3>Domestic Delivery</h3>
              <div className="delivery-content">
                <ul className="delivery-features">
                  <li>Express 24h</li>
                  <li>Standard 48h</li>
                  <li>Free shipping for orders over 5,000 units</li>
                </ul>
                <p className="delivery-note">Applicable for all 63 provinces</p>
              </div>
            </div>
          </div>

          {/* International Shipping */}
          <div className="col-md-6 col-lg-3">
            <div className="delivery-card">
              <div className="delivery-icon mb-3">
                <i className="fas fa-plane-departure fa-3x text-primary"></i>
              </div>
              <h3>International Shipping</h3>
              <div className="delivery-content">
                <ul className="delivery-features">
                  <li>Air and Sea Freight</li>
                  <li>Complete customs procedures</li>
                  <li>100% value insurance</li>
                </ul>
                <p className="delivery-note">Coverage in 150+ countries</p>
              </div>
            </div>
          </div>

          {/* Tracking System */}
          <div className="col-md-6 col-lg-3">
            <div className="delivery-card">
              <div className="delivery-icon mb-3">
                <i className="fas fa-map-marked-alt fa-3x text-primary"></i>
              </div>
              <h3>Order Tracking</h3>
              <div className="delivery-content">
                <ul className="delivery-features">
                  <li>Real-time monitoring</li>
                  <li>Automatic updates via SMS/Email</li>
                  <li>24/7 support</li>
                </ul>
                <p className="delivery-note">Integrated IoT technology</p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="col-md-6 col-lg-3">
            <div className="delivery-card">
              <div className="delivery-icon mb-3">
                <i className="fas fa-headset fa-3x text-primary"></i>
              </div>
              <h3>Professional Support</h3>
              <div className="delivery-content">
                <ul className="delivery-features">
                  <li>Packaging consultation</li>
                  <li>Complaint handling within 24h</li>
                  <li>Regular reporting</li>
                </ul>
                <p className="delivery-note">Dedicated customer service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
