import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Store(props) {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (productId, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [productId]: option,
    }));
  };

  const products = props.products.map((product) => {
    const selectedOption = selectedOptions[product.id] || "";
    return (
      <div key={product.id} className="storeContainer">
        {product.feature && <h4 className="featured">Featured</h4>}
        <img src={product.image} alt="" />
        <h4>{product.intro}</h4>
        <h6>{product.type}</h6>
        <h4>{product.price}$</h4>
        {product.options && product.options.length > 0 ? (
          <DropdownButton title={selectedOption || "SELECT OPTION"} >
            {product.options.map((option, index) => (
              <Dropdown.Item
                key={index}    
                onClick= { () => {
                  handleOptionSelect(product.id, option) ;
                  props.increCart(product.id) ;
                }}
              >
                {option}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        ) : (
          <button
            onClick={() => props.increCart(product.id)}
            className="storeButton btn btn-primary"
          >
            Add to Cart
          </button>
        )}
      </div>
    );
  });

  return (
    <div>
      <header className="storeSection"></header>
      <main className="products">{products}</main>
    </div>
  );
}
