import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '@pages/Home';
import Completed from '@pages/Completed';
import About from '@pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 space-x-4">
        <Link to="/" className="text-white mr-4">Home</Link>
        <Link to="/completed" className="text-white">Completed</Link>
        <Link to="/about" className="text-white">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
export default App;