import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import product1 from "../Product-img/1.jpg";
import product2 from "../Product-img/2.jpg";
import product3 from "../Product-img/3.jpg";
import product4 from "../Product-img/4.jpg";
import product5 from "../Product-img/5.jpg";
import product6 from "../Product-img/6.jpg";
import product7 from "../Product-img/7.jpg";
import product8 from "../Product-img/8.jpg";
import product9 from "../Product-img/9.jpg";
import product10 from "../Product-img/10.jpg";
import product11 from "../Product-img/11.jpg";
import product12 from "../Product-img/12.jpg";

function ProductDetails() {
  const { id } = useParams();

  const productImages = {
    1: product1,
    2: product2,
    3: product3,
    4: product4,
    5: product5,
    6: product6,
    7: product7,
    8: product8,
    9: product9,
    10: product10,
    11: product11,
    12: product12,
  };

  const productDetails = {
    1: {
      name: "Classic Water Bottle",
      description:
        "Our signature water bottle with a sleek, modern design. Perfect for everyday use.",
      features: [
        "BPA-free material",
        "Leak-proof design",
        "Easy to clean",
        "500ml capacity",
      ],
      specifications: {
        material: "Tritan",
        capacity: "500ml",
        dimensions: "7.5 x 2.5 inches",
        weight: "180g",
      },
    },
    2: {
      name: "Sports Water Bottle",
      description:
        "Designed for athletes and active lifestyles. Features a wide mouth for easy filling and cleaning.",
      features: [
        "Wide mouth design",
        "Sports cap included",
        "Sweat-proof grip",
        "750ml capacity",
      ],
      specifications: {
        material: "Tritan",
        capacity: "750ml",
        dimensions: "9 x 2.8 inches",
        weight: "220g",
      },
    },
    3: {
      name: "Insulated Water Bottle",
      description:
        "Keep your drinks cold for 24 hours or hot for 12 hours with our premium insulated bottle.",
      features: [
        "Double-wall insulation",
        "Vacuum sealed",
        "Stainless steel construction",
        "1L capacity",
      ],
      specifications: {
        material: "Stainless Steel",
        capacity: "1L",
        dimensions: "10 x 3 inches",
        weight: "350g",
      },
    },
    4: {
      name: "Kids Water Bottle",
      description:
        "Fun and colorful design perfect for children. Includes a spill-proof cap.",
      features: [
        "Spill-proof cap",
        "Colorful design",
        "Lightweight",
        "400ml capacity",
      ],
      specifications: {
        material: "Tritan",
        capacity: "400ml",
        dimensions: "6.5 x 2.2 inches",
        weight: "150g",
      },
    },
    5: {
      name: "Travel Water Bottle",
      description:
        "Compact and collapsible design perfect for travelers and minimalists.",
      features: [
        "Collapsible design",
        "Space-saving",
        "Travel-friendly",
        "600ml capacity",
      ],
      specifications: {
        material: "Silicone",
        capacity: "600ml",
        dimensions: "Collapsed: 2 x 2 inches",
        weight: "100g",
      },
    },
    6: {
      name: "Smart Water Bottle",
      description:
        "Track your water intake with our smart bottle featuring LED display and hydration reminders.",
      features: [
        "LED display",
        "Bluetooth connectivity",
        "Hydration tracking",
        "750ml capacity",
      ],
      specifications: {
        material: "Tritan + Electronics",
        capacity: "750ml",
        dimensions: "9 x 2.8 inches",
        weight: "280g",
      },
    },
    7: {
      name: "Glass Water Bottle",
      description:
        "Elegant glass bottle with protective silicone sleeve for a premium drinking experience.",
      features: [
        "Borosilicate glass",
        "Protective sleeve",
        "Premium look",
        "500ml capacity",
      ],
      specifications: {
        material: "Glass + Silicone",
        capacity: "500ml",
        dimensions: "8 x 2.5 inches",
        weight: "300g",
      },
    },
    8: {
      name: "Filter Water Bottle",
      description:
        "Built-in filter system for clean, fresh water anywhere you go.",
      features: [
        "Carbon filter",
        "Removes impurities",
        "Long-lasting filter",
        "600ml capacity",
      ],
      specifications: {
        material: "Tritan + Filter",
        capacity: "600ml",
        dimensions: "8.5 x 2.8 inches",
        weight: "250g",
      },
    },
    9: {
      name: "Infuser Water Bottle",
      description: "Add flavor to your water with our fruit infuser bottle.",
      features: [
        "Fruit infuser",
        "Leak-proof",
        "Easy to clean",
        "750ml capacity",
      ],
      specifications: {
        material: "Tritan",
        capacity: "750ml",
        dimensions: "9 x 2.8 inches",
        weight: "220g",
      },
    },
    10: {
      name: "Metal Water Bottle",
      description:
        "Durable metal bottle with powder-coated finish for lasting beauty.",
      features: [
        "Powder-coated finish",
        "Scratch-resistant",
        "Durable construction",
        "800ml capacity",
      ],
      specifications: {
        material: "Aluminum",
        capacity: "800ml",
        dimensions: "9.5 x 2.8 inches",
        weight: "280g",
      },
    },
    11: {
      name: "Mini Water Bottle",
      description:
        "Compact and lightweight bottle perfect for short trips and minimalists.",
      features: [
        "Ultra-lightweight",
        "Compact design",
        "Easy to carry",
        "350ml capacity",
      ],
      specifications: {
        material: "Tritan",
        capacity: "350ml",
        dimensions: "6 x 2 inches",
        weight: "120g",
      },
    },
    12: {
      name: "Premium Water Bottle",
      description:
        "Our top-of-the-line bottle with premium materials and elegant design.",
      features: [
        "Premium materials",
        "Luxury finish",
        "Gift box included",
        "750ml capacity",
      ],
      specifications: {
        material: "Tritan + Premium Coating",
        capacity: "750ml",
        dimensions: "9 x 2.8 inches",
        weight: "240g",
      },
    },
  };

  const product = productDetails[id];
  const productImage = productImages[id];

  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <div className="product-image-section">
          <img
            src={productImage}
            alt={product.name}
            className="product-detail-image"
          />
        </div>
        <div className="product-info-section">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>

          <div className="features-section">
            <h2>Features</h2>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="specifications-section">
            <h2>Specifications</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Material:</span>
                <span className="spec-value">
                  {product.specifications.material}
                </span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Capacity:</span>
                <span className="spec-value">
                  {product.specifications.capacity}
                </span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Dimensions:</span>
                <span className="spec-value">
                  {product.specifications.dimensions}
                </span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Weight:</span>
                <span className="spec-value">
                  {product.specifications.weight}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
