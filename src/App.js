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

  const [cartItem , setcartItem] = useState([])

  let saveCart  =() => {
    // Retrieve cart data from localStorage or set default value
    const storedCart = localStorage.getItem('cart');
    return storedCart ? Number(storedCart) : 0;

  }
 
  // useEffect(() => {
  //   const storeItem =JSON.parse(localStorage.getItem('cartItem')) 
  //   if (storeItem && storeItem !== 'undefined') {
  //     setcartItem(storeItem);
  //   }

  // },[]) 

  const [cart, setCart] = useState(saveCart)
  useEffect(() => {
    localStorage.setItem('cart', cart.toString());
    // localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cart ]);

  // console.log(cartItem);
  const products = data.map((item) => {
    const options = item.option ? Object.values(item.option) : undefined;
    return {
      id: item.id,
      image: item.image,
      intro: item.intro,
      brand : item.brand,
      type: item.type,
      price: item.price,
      options: options,
      feature: item.feature,
    };
  });

  const handleAddToCart = (item ) => {
    setCart((prevCart) => prevCart + 1 );
    const itemExists = cartItem.some((cartItem) => cartItem.id === item.id);
  
  if (itemExists) {
    console.log("Item already in cart:", item);
  } else {
    const newItem = { ...item, quantity: 1 };
  setcartItem((prevCartItem) => [...prevCartItem, newItem]);
  console.log("Object ID:", item);
  }
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
          <Route path="/cart" element={<Cart cartItem = {cartItem}  setcartItem = {setcartItem} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
