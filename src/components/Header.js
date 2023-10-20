import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  const [results, setResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  return (
    <div>
      <header className={`flex mb-8 flex-col md:flex-row ${theme === 'dark' ? 'text-white' : 'text-black'} `}>
        <div className='md:mt-2  pt-4 md:p-1 mr-20 md:ml-20 text-4xl italic font-bold text-center md:text-left'>
          Image Gallery
        </div>        

        <button
          className="md:hidden w-40 -mt-10 mb-4 p-4 gap-16 font-bold text-md text-center md:text-left cursor-pointer"
          onClick={handleMobileMenuToggle}
        >
          {
            isMobileMenuOpen ? <MdClose/> :  <FiMenu />
          }
        </button>
        <label className="ml-80 text-black -pt-2 -mt-12 cursor-pointer">
          <input type="checkbox" onChange={handleToggle} checked={theme === 'dark'} className='bg-black m-1'/>
          {theme === 'dark' ? 'Dark Theme' : 'Light Theme'} 
        </label>

        {isMobileMenuOpen && (
          <div className='mt-4 mb-4 p-4 gap-1 font-bold text-md text-center md:text-left flex flex-col md:flex-row'>
            <p className='cursor-pointer my-2 md:my-0'>Explore</p>
            <p className='cursor-pointer my-2 md:my-0'>Collection</p>
            <p className='cursor-pointer my-2 md:my-0'>Community</p>
          </div>
        ) }

        <div className={`md:mt-0 -mb-8 -ml-6 w-80 `}>
          <SearchBar  setResults={setResults}  />
          <SearchResultList results={results} className={` text-black ${theme === 'dark' ? 'bg-white' : 'bg-white'}`}/>
        </div>
      </header>
    </div>
  );
}

export default Header;
