import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import miltonLogo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const scrollToProducts = (e) => {
    e.preventDefault();
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHero = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <Link to="/">
        <img src={miltonLogo} alt="Milton Logo" className="logo" />
      </Link>
      <ul className="center">
        <li>
          <a href="#hero" onClick={scrollToHero}>
            Home
          </a>
        </li>
        <li>
          <a href="#products" onClick={scrollToProducts}>
            Products
          </a>
        </li>
        <li>
          <a href="#contact" onClick={scrollToContact}>
            Contact
          </a>
        </li>
      </ul>
      <ul className="right">
        <li>
          <button>
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </button>
        </li>
        <li>
          <button>
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
