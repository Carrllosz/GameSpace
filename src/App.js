// app.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet  } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import AddProduct from './components/Product Management/AddProducts';
import View from './components/Product Management/View';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu/Menu';
import Login from './components/Register/Login';
import SignUp from './components/Register/SignUp';
import Categorie from './components/Categories/CategoriesProducts';
import ProductPage from './components/ProductPage/ProductPage';
import SidebarComments from './components/ProductPage/SidebarComments';
import { ProductProvider } from './components/ProductContext';

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
      <ProductProvider>
      {/* Passando userType para o Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} cartItems={cartItems} userType={userType} />


      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero toggleSidebar={toggleSidebar} />
              {/* Passando a função addToCart para o componente Products */}
              <Products addToCart={addToCart} />
              <Feature />
              <Menu />
              <Categorie />
              
              <Footer />
            </>
          }
        />
        <Route path="/" element={<Outlet />}>
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
        <Route path="/Login" element={<Login />} />
        <Route 
          path="/signup" 
          element={<SignUp/>} 
        />
        </Route>
      </Routes>
      </ProductProvider>
    </Router>
  );
}

export default App;
