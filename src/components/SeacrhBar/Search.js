import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import './Search.css'

const Search = () => {
      const [input, setInput] = useState('')

      return (
        <div className='input-wrapper'>
          <FaSearch id="searchIcon" /> 
          <input 
            placeholder='Search...' 
            value={input} 
            onChange={(e) => setInput(e.target.value)}/>
        </div>
      );
}

export default Search;
