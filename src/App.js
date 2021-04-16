import React, { useState } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import ThemeContext, { themes } from './context/ThemeContext';
import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);    
  const handleClick = () => {
      setDarkMode(!darkMode);
  }
    
  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <ThemeContext.Provider value={darkMode ? themes.darkmode : themes.lightmode}>
        <Header />      
      <div>
          <button type="button" onClick={handleClick}>
            <b>{ darkMode ? 'Set LightMode' : 'Set DarkMode' }</b>
          </button>
        </div>
        <Characters /> 
      </ThemeContext.Provider>         
    </div>
  );
}

export default App;
