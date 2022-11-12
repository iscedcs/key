import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import Error404 from './pages/components/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product43 from './pages/products/Product43';
import Product32 from './pages/products/Product32';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="products" element={<Products />} />
					<Route path="43" element={<Product43 />} />
					<Route path="32" element={<Product32 />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
