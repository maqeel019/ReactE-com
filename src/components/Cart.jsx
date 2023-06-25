import React, { useState ,useEffect } from 'react';

export default function Cart({ cartItem, setcartItem }) {
  const [totalprice, settotalprice] = useState();

  useEffect(() => {
    const totalPriceSum = cartItem.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    settotalprice(totalPriceSum);
  }, [cartItem]);

  const handleQuantityChange = (itemId, quantity) => {
    const updatedCartItems = cartItem.map((item) => {
      if (item.id === itemId) {
        const updatedItem = { ...item, quantity: Number(quantity) };
        return updatedItem;
      }
      return item;
    });

    setcartItem(updatedCartItems);
  };

  const itemCart = (
    <div className="cartBox">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map((item) => {
            const itemTotalPrice = item.price * item.quantity;

            return (
              <tr key={item.id}>
                <td>
                  <div className="imagetd">
                    <img src={item.image} alt="image" />
                    <div>
                      <h6>Brand: {item.brand}</h6>
                      <h4>{item?.intro}</h4>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{item.price}</p>
                </td>
                <td>
                  <input
                    type="number"
                    name="quantity"
                    id=""
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                </td>
                <td>
                  <p>{itemTotalPrice}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <div className="CartSection"></div>
      
      {itemCart}

      <div>Total Price: {totalprice}</div>
    </div>
  );
}



