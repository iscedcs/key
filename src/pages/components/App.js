import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import Error404 from './pages/components/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
     return (
          <div className="App">
               <BrowserRouter>
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="about" element={<About />} />
                         <Route path="contact" element={<Contact />} />
                         <Route path="products" element={<Products />} />
                         <Route path="*" element={<Error404 />} />
                    </Routes>
               </BrowserRouter>
          </div>
     );
}

export default App;
