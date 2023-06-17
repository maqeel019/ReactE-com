import React from "react";
import "./Components.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Home(props) {
  props.products.forEach((product) => {
    console.log(product.id);
  });

  const products = props.products
    .filter((product) => product.feature === true)
    .map((product) => (
      <div key={product.id} className="storeContainer">
        {product.feature && <h4 className="featured">Featured</h4>}
        <img src={product.image} alt="" />
        <h4>{product.intro}</h4>
        <h6>{product.type}</h6>
        <h4>{product.price}$</h4>
        {product.options && product.options.length > 0 ? (
          <DropdownButton title="SELECT OPTION">
            {product.options.map((option, index) => (
              <Dropdown.Item key={index}>{option}</Dropdown.Item>
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
    ));

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
