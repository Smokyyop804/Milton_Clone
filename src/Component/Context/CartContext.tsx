import React, { createContext, useState } from "react";

interface CartItem {
  id: number; // or string, depending on your ID type
  name: string;
  // Add other properties as needed
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  handleAddToCart: (product: CartItem) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  handleAddToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddToCart = (product: CartItem) => {
    console.log("Adding to cart:", product);
    addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, handleAddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
