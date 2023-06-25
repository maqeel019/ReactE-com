import React, { useState } from "react";
import "./Components.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Home(props) {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (productId, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [productId]: option,
    }));
  };

  const products = props.products
  .filter((product) => product.feature === true)
  .map((product, index) =>{
   const selectedOption = selectedOptions[product.id] || "";
   return  (
      <div key={product.id} className="storeContainer">
        {product.feature && <h4 className="featured">Featured</h4>}
        <img src={product.image} alt="" />
        <h4>{product.intro}</h4>
        <h6>{product.brand}</h6>
        <h4>{product.price}$</h4>
        {product.options && product.options.length > 0 ? (
          <DropdownButton title={selectedOption || "SELECT OPTION"} >
            {product.options.map((option, index) => (
              <Dropdown.Item
                key={index}    
                onClick= { () => {
                  handleOptionSelect(product.id, option) ;
                  props.increCart(product.id ) ;
                }}
              >
                {option}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        ) : (
          <button
            onClick={() => props.increCart(product , product.id)}
            className="storeButton btn btn-primary"
          >
            Add to Cart
          </button>
        )}
      </div>
    )});

  return (
    <div>
      <div className="firstSection">
        <h2>It's Raining offer to Technology</h2>
        <h4>35% OFF on All Products</h4>
        <div className="buttonContainer">
          <a href="/store">
            <button>Find More</button>
          </a>
          <a href="/store">
            <button>Shop Now</button>
          </a>
        </div>
      </div>
      <div className="products">{products}</div>
    </div>
  );
}
