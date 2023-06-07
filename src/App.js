import './App.css';
import {BrowserRouter as Router ,Routes  , Route } from "react-router-dom";
import  About  from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import  Store from './components/Store';
import  Menu  from './components/Menu';
import Account from './components/Account';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router > 
        <Menu />
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Store />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />


     </Routes>
    </Router>
    </div>
  );
}

export default App;
