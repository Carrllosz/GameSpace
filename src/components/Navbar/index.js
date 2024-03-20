import React, { useState } from 'react';
import { Nav, NavLink, NavIcon, Bars, SearchResults, Inputwrapper, Input } from './NavbarElements';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useProductContext } from '../ProductContext'; // Importe o contexto

const Navbar = ({ toggle }) => {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { setSelectedProduct } = useProductContext(); 
  const history = useNavigate();

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setInput(query);
    try {
      const res = await axios.get(`http://localhost:8800/produtos?search=${query}`);
      setSearchResults(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Atualiza o contexto com as informações do produto
    history(`/ProductPage`);
  };

  return (
    <Nav>
      <NavLink to='/'>GameSpace</NavLink>
      <Inputwrapper>
        <FaSearch style={{ color: '#FF2273' }} id="searchIcon" />
        <Input>
          <input
          style={{ border: 'none', borderColor: 'transparent', width: "100%", height: "100%", fontSize: "0.9rem", marginLeft: "5px", outline: "none"}}
            placeholder='Search...'
            value={input}
            onChange={handleInputChange} />
        </Input>
      </Inputwrapper>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars></Bars>
      </NavIcon>
      {searchResults.length > 0 && (
        <SearchResults isEmpty={input.trim() === ''}>
          <ul>
            {searchResults.map((product, index) => (
              <li key={index}>
                {/* Adicione um NavLink que redireciona para a página de detalhes do produto */}
                <div style={{cursor: "pointer"}} onClick={() => handleProductClick(product)}>
                  {product.nome} - ${product.preco}
                </div>
              </li>
            ))}
          </ul>
        </SearchResults>
      )}
    </Nav>
  );
};

export default Navbar;
