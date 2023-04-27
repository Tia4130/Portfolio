import './App.css';

//COMPONENTS
import Home from './components/Home';
import About from './components/About';
import Contactme from './components/Contactme';
import Projects from './components/Projects';

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App flex-column">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<Contactme />} />
      </Routes>
    </div>
  );
}

export default App;
