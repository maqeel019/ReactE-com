import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState , useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Store from "./components/Store";
import Menu from "./components/Menu";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import data from "./components/Storedata";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [cart, setCart] = useState(0);
  const products = data.map((item) => {
    return {
      id: item.id,
      image: item.image,
      intro: item.intro,
      brand : item.brand,
      type: item.type,
      price: item.price,
      feature: item.feature,
    };
  });

   const handleAddToCart = (item) => {
    const itemExists = cartItem.some((cartItem) => cartItem.id === item.id);
    if (itemExists) {
    alert("Item already in cart:", item);
      return;
    }

    const newItem = { ...item, quantity: 1 };
    setCartItem((prevCartItem) => [...prevCartItem, newItem]);
    setCart((prevCart) => prevCart + 1);
    console.log("Object ID:", item)
};
return (
    <div className="App">
    
      <Router>
        <Menu cart={cart} />
        <Routes>
          <Route exact path="/" element={<Home products={products} increCart={handleAddToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store products={products} increCart={handleAddToCart} />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart cartItem = {cartItem}  setcartItem = {setCartItem} />} />
        </Routes>
        <Footer />
      </Router>
    <h4>© 2023 M Aqeel. All rights reserved.</h4>
    </div>
  );
}

export default App;
