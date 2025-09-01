import React from 'react';
import sv1 from "./image/pinstake-1-e1536376270884 (1).jpg"
import sv2 from "./image/OIP.jpg"
import sv3 from "./image/agchem-containers-2.jpg"
const CustomBottlesSection = () => {
  return (
    <div className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Custom Plastic Bottles</h4>
          <h1 className="display-4 mb-4">Design Your Personalized Bottles</h1>
          <p className="mb-0">
            First things first. When you're looking for a custom bottle, the first step naturally is going to be the design
            stage. For custom-made bottles, it is important to consider the shape, size, dispensing mechanism, and printing
            technique. At Polysite, we offer numerous dispensing mechanisms and customization techniques, each of which will
            be covered in more detail below. We advise using our in-stock bottles for customization, however, if you're looking
            at a custom size/shape, this is possible as well. For custom bottles, the MOQ ranges from 1,500 to 20,000 units -
            depending on the complexity of the design. If you choose to order your personalized bottles from us, you will naturally
            receive a sample of your custom bottle by mail to inspect before starting the production of your wholesale order.
          </p>
        </div>

        <section className="services-section">
          <div className="services-grid">
            <div className="service-card">
              <img src={sv1} alt="Custom Production" className="service-image" />
              <div className="service-content">
                <h3>Food & Beverage Bottles</h3>
                <p>
                  We create bottles for various food and beverage products, including condiments, sauces, spreads, snacks, spices,
                  and more.
                </p>
              </div>
            </div>

            <div className="service-card">
              <img src={sv2} className="service-image" />
              <div className="service-content">
                <h3>Health and Beauty Bottles</h3>
                <p>
                  We produce bottles for healthcare products such as vitamins, supplements, and over-the-counter (OTC) and
                  prescription medications. We also make bottles for personal care items such as body wash, shampoo, lotion, oil,
                  and other skin and hair care products.
                </p>
              </div>
            </div>

            <div className="service-card">
              <img src={sv3} alt="Accessories" className="service-image" />
              <div className="service-content">
                <h3>Industrial Consumable Bottles</h3>
                <p>
                  We design and manufacture industrial consumable bottles that are durable and eye-catching. They are used for
                  products such as cleaners, automotive oil, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomBottlesSection;
