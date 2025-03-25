import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import product1 from "./Product-img/1.jpg";
import product2 from "./Product-img/2.jpg";
import product3 from "./Product-img/3.jpg";
import product4 from "./Product-img/4.jpg";
import product5 from "./Product-img/5.jpg";
import product6 from "./Product-img/6.jpg";
import product7 from "./Product-img/7.jpg";
import product8 from "./Product-img/8.jpg";
import product9 from "./Product-img/9.jpg";
import product10 from "./Product-img/10.jpg";
import product11 from "./Product-img/11.jpg";
import product12 from "./Product-img/12.jpg";

function Product() {
  const products = [
    { id: 1, name: "Classic Water Bottle", image: product1 },
    { id: 2, name: "Sports Water Bottle", image: product2 },
    { id: 3, name: "Insulated Water Bottle", image: product3 },
    { id: 4, name: "Kids Water Bottle", image: product4 },
    { id: 5, name: "Travel Water Bottle", image: product5 },
    { id: 6, name: "Smart Water Bottle", image: product6 },
    { id: 7, name: "Glass Water Bottle", image: product7 },
    { id: 8, name: "Filter Water Bottle", image: product8 },
    { id: 9, name: "Infuser Water Bottle", image: product9 },
    { id: 10, name: "Metal Water Bottle", image: product10 },
    { id: 11, name: "Mini Water Bottle", image: product11 },
    { id: 12, name: "Premium Water Bottle", image: product12 },
  ];

  return (
    <div className="product-container" id="products">
      <h2 className="product-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Product;
