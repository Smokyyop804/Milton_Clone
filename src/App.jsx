import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Product from "./Component/Products/Product";
import ProductDetails from "./Component/Products/ProductDetails/ProductDetails";
import AffiliatedBrands from "./Component/Affiliated-Brands/AffiliatedBrands";
import Contact from "./Component/Contact/Contact";
import { CartProvider } from "./Component/Context/CartContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Product />
              <AffiliatedBrands />
              <Contact />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
