import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      {/* Routes acts like a switch statement for URLs */}
      <Routes>
        {/* If URL is "/", show Home component */}
        <Route path="/" element={<Home />} />
        {/* If URL is "/about", show About component */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;