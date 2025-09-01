import React from "react";
import bottleImage from "./logo/vua-chai-lo-2177ee03-27ae-4ed7-8af5-a893e2991305.webp";

const AboutUS = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1>Introduce</h1>
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
        <p>
          <strong>PolySite</strong> aims for sustainable development by utilizing recycled plastics and green
          technology. We always prioritize community and environmental benefits.

          With a team of experienced experts, Polysite is committed to providing optimal packaging solutions that
          meet diverse customer needs.
        </p>
        <p>
          With many years of experience, we are constantly innovating technology,
          investing in the production line system and applying international standards such as <strong>ISO 9001,
            ISO 22000</strong>,
          ensuring the production of Product Achievement the highest quality when reaching customers.
        </p>
        <p>
          <img src={bottleImage} />
        </p>
      </div>
    </section>
  );
};

export default AboutUS;
