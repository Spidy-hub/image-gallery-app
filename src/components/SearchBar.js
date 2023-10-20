// PhotoSearch.js
import React, { useState } from 'react';
import { Search } from 'react-feather';
import {TiDelete} from 'react-icons/ti'

const SearchBar = ({ setResults, theme }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const accessKey = 'nUT9_NM02yZEqcc4Mp_T1VVpedRaAmvJ1vI29aP7sd8';

    const headers = new Headers({
      'Authorization': `Client-ID ${accessKey}`
    });

    fetch('https://api.unsplash.com/search/photos?query=' + value, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log('API Response:', json); 
        if (json && Array.isArray(json.results)) {
          setResults(json.results);
        } else {
          console.error('Unexpected response structure:', json);
        }
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  };

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  
  const handleClearInput = () =>{
    setInput('')
    fetchData([])
  }

  return (
    <div className="w-full bg-white shadow drop-shadow-lg rounded-lg h-12 mt-4 mb-4 p-3 mr-20 ml-20 max-w-lg flex flex-row">
      <Search className='ml-2 text-blue-500 pr-1' />
      <input
        type="text"
        placeholder="Search for images..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className={`w-full h-12 p-2  text-black -mt-3 outline-none ${theme === 'dark' ? 'bg-white' : 'bg-white'}`}
      />
      < TiDelete className='w-8 h-8 mb-2 text-blue-500 -mt-1 cursor-pointer'
        onClick={handleClearInput}
      />
    </div>
  );
};

export default SearchBar;
