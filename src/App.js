import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Things from './Components/Things';
import Additional from './Components/Additional';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/things" element={<Things />} />
          <Route path="/additional" element={<Additional />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;