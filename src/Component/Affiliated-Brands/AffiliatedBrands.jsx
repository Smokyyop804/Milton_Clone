import React from "react";
import "./AffiliatedBrands.css";
import partner1 from "./Affilated Partner/1.jpg";
import partner2 from "./Affilated Partner/2.jpg";
import partner3 from "./Affilated Partner/3.jpg";
import partner4 from "./Affilated Partner/4.jpg";
import partner5 from "./Affilated Partner/5.jpg";
import partner6 from "./Affilated Partner/6.jpg";
import partner7 from "./Affilated Partner/7.jpg";

function AffiliatedBrands() {
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
  ];

  return (
    <section className="affiliated-brands">
      <div className="affiliated-brands-content">
        <h2>Our Trusted Partners</h2>
        <div className="partner-logos">
          <div className="logo-slide">
            {partners.map((partner, index) => (
              <img key={index} src={partner} alt={`Partner ${index + 1}`} />
            ))}
            {partners.map((partner, index) => (
              <img
                key={`duplicate-${index}`}
                src={partner}
                alt={`Partner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AffiliatedBrands;
