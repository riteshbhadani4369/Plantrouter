import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import Plants from './Plants'
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="plants" element={<Plants />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
