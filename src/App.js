import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Importe o componente Sidebar
import Menu from './components/Menu/Menu'

// Importe os componentes das páginas de Login e SignUp
import Login from './components/Register/Login';
import SignUp from './components/Register/SignUp';
import Cart from './components/Cart/Cart';
import Categorie from './components/Categories/CategoriesProducts';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); 

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Função para adicionar um item ao carrinho
  const addToCart = (item) => {
    const price = parseFloat(item.price.replace(',', '.'));

    console.log('Adicionando ao carrinho:', { ...item, price });
  
    setCartItems([...cartItems, { ...item, price }]);
  };

  // Função para remover um item do carrinho
  const removeFromCart = (index) => {
    console.log('Removendo do carrinho:', cartItems[index]);
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <GlobalStyle />
      {/* Adicione a barra lateral como um componente no aplicativo */}
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      {/* Use o componente Routes para configurar as rotas */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Passe a função toggleSidebar para o componente Hero para abrir a barra lateral */}
              <Hero toggleSidebar={toggleSidebar} />
              <Products  data={productData} addToCart={addToCart}/>
              <Feature /> 
              <Menu />
              <Categorie data={productData} />
              <Footer />
            </>
          }
        />
        
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/Cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
