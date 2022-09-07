import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import About from './About'
import NewProducts from './NewProducts'

export default function Home() {
     document.title = setTitle();
     return (
          <section>
               <Header />
               <Navbar title = {'Home'} />
               <Slider />
               <NewProducts />
               <About />
               <Footer />
          </section>
     )

	function setTitle() {
		return "MI+ - Home Page";
	}
}
