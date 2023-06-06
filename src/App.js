import './App.css';
import React, { useState } from 'react'
import { createContext } from 'react'
import ReactSwitch from 'react-switch';


//COMPONENTS
import Home from './components/Home';
import About from './components/About';
import Contactme from './components/Contactme';
import Projects from './components/Projects';

import { Route, Routes } from "react-router-dom"
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="App flex-column" id={theme}>
        <div className='switch'>
          <label>{theme === "light" ? "light mode" : "dark mode"}</label>
          <ReactSwitch
            onChange={toogleTheme}
            checked={theme === "light"}
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-me" element={<Contactme />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
