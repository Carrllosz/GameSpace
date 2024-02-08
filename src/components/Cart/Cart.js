// Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = (items) => {
    return items.reduce(
      (total, item) => total + parseFloat(item.price.replace('R$', '').replace(',', '.')),
      0
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
            <button onClick={() => removeFromCart(index)}>Remover</button>
          </li>
        ))}
      </ul>
      <h3>Total: R$ {calculateTotal(cartItems).toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
