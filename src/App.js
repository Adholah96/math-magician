import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/quote';
import Home from './components/Home';

function App() {
  return (
    <>
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Calculator"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/Quotes"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Quote
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
