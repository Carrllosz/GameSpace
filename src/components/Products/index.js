import React, { useState, useEffect } from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductButton,
} from './ProductsElements';
import CartPreview from '../Cart/CartPreview';

const Products = ({ heading, data, addToCart, removeFromCart, cartItems }) => {
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [timerId, setTimerId] = useState(null);

  const handleAddToCart = (product) => {
    if (typeof addToCart === 'function') {
      addToCart(product);
      setSelectedProduct(product);
      setShowCartPreview(true);

      if (timerId) {
        clearTimeout(timerId);
      }

      const newTimerId = setTimeout(() => {
        setShowCartPreview(false);
        setSelectedProduct(null);
      }, 8000);

      // Armazena o ID do novo timer
      setTimerId(() => newTimerId);
    }
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  return (
    <div>
      <ProductsContainer>
        <ProductWrapper>
          {data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductButton onClick={() => handleAddToCart(product)}>
                    {product.button}
                  </ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>

      {showCartPreview && (
        <CartPreview
          cartItems={cartItems}
          onAdd={() => addToCart(selectedProduct)}
          onRemove={() => removeFromCart(selectedProduct)} // Adicione esta linha
        />
      )}
    </div>
  );
};

export default Products;
