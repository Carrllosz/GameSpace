import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Login from './components/Register/Login'; // Importe o componente de Login
import Hero from './components/Hero';
import Products from './components/Products';
import AddProduct from './components/Product Management/AddProducts';
import View from './components/Product Management/View';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu/Menu';
import SignUp from './components/Register/SignUp';
import Categorie from './components/Categories/CategoriesProducts';
import ProductPage from './components/ProductPage/ProductPage';
import SidebarComments from './components/ProductPage/SidebarComments';
import { ProductProvider } from './components/ProductContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [userType, setUserType] = useState('user'); 

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
      <ProductProvider>
        <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} cartItems={cartItems} userType={userType} />
        <Routes>
          <Route
            path="/"
            element={<Login />} // Altere a rota raiz para renderizar o componente de Login
          />
          <Route path="/signup" element={<SignUp/>} />
          <Route
            path="/dashboard" // Defina a rota para a página principal após o login
            element={
              <>
                <Hero toggleSidebar={toggleSidebar} />
                <Products addToCart={addToCart} />
                <Feature />
                <Menu />
                <Categorie />
                <Footer />
              </>
            }
          />
          <Route
            path="/ProductPage"
            element={
              <>
                <ProductPage toggleSidebar={toggleSidebar} />
                <SidebarComments isOpen={sidebarOpen} toggle={toggleSidebar} />
              </>
            }
          />
          <Route path="/ProductManagement" element={<AddProduct />} />
          <Route path="/View" element={<View />} />
          
        </Routes>
      </ProductProvider>
    </Router>
  );
}

export default App;
