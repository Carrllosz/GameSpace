import React, { useEffect, useState } from 'react';

const CartPreview = ({ cartItems, onAdd, onRemove }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Verifica se cartItems é um array antes de usar reduce
    if (cartItems && Array.isArray(cartItems) && cartItems.length > 0) {
      // Atualiza o total sempre que cartItems é alterado
      const newTotal = cartItems.reduce((acc, product) => acc + parseFloat(product.price), 0);
      setTotal(newTotal);
    } else {
      // Se cartItems não for um array válido, define o total como 0
      setTotal(0);
    }
  }, [cartItems]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
        backgroundColor: '#fff',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems && Array.isArray(cartItems) && cartItems.length > 0 ? (
          cartItems.map((product, index) => (
            <li key={index}>
              <div>
                <h3>{product.name}</h3>
                {product.price && <p>Preço: {product.price}</p>}
              </div>
              <div>
                <button onClick={() => onRemove(product)}>Remover</button>
                <button onClick={() => onAdd(product)}>Adicionar mais</button>
              </div>
            </li>
          ))
        ) : (
          <li>Nenhum item no carrinho</li>
        )}
      </ul>
      <p>Total da Compra: R$ {total.toFixed(2)}</p>
    </div>
  );
};

export default CartPreview;
