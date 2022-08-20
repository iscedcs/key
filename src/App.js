import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import ProductOne from './pages/products/ProductOne';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="product-one" element={<ProductOne />} />
      </Routes>
    </div>
  );
}

export default App;
