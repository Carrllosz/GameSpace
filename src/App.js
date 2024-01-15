import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Importe o componente Sidebar

// Importe os componentes das páginas de Login e SignUp
import Login from './components/Register/Login';
import SignUp from './components/Register/SignUp';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
              <Products heading="Escolha seu jogo" data={productData} />
              <Feature />
              <Products heading="Equipamentos para gamers" data={productDataTwo} />
              <Footer />
            </>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
