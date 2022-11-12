import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import NewProducts from './NewProducts'
// import About from './About'

export default function Home() {
     document.title = setTitle();
     return (
          <section>
               <Navbar title={'Home'} />
               <Slider />
               <NewProducts />
               {/* <About /> */}
               <Footer />
          </section>
     )

     function setTitle() {
          return "MI+ - Home Page";
     }
}
