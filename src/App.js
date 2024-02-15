// app.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import { Data } from './components/Categories/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu/Menu';
import Login from './components/Register/Login';
import SignUp from './components/Register/SignUp';
import Categorie from './components/Categories/CategoriesProducts';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [userType, setUserType] = useState('user'); // Adicione userType ao estado do App

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const addToCart = (product) => {
    console.log("Add to cart: ", product)
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <GlobalStyle />
      {/* Passando userType para o Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} cartItems={cartItems} userType={userType} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero toggleSidebar={toggleSidebar} />
              {/* Passando a função addToCart para o componente Products */}
              <Products data={Data} addToCart={addToCart} />
              <Feature />
              <Menu />
              <Categorie data={productData} />
              <Footer />
            </>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route 
          path="/SignUp" 
          // Passando setUserType como uma propriedade para que SignUp possa atualizá-lo
          element={<SignUp userType={userType} setUserType={setUserType} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
