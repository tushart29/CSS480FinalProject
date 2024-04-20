import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Things from './Components/Things';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/things" element={<Things />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
