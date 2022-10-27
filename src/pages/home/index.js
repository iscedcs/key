import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import NewProducts from './NewProducts'

export default function Home() {
     document.title = setTitle();
     return (
          <section>
               <Header />
               <Navbar title={'Home'} />
               <Slider />
               <NewProducts />
               <section className=''>
                    <div className='w-100'>
                         <img src='assets/images/home/32/2.jpg' alt='' width={'100%'} />
                         <img src='assets/images/home/43/7.png' alt='' width={'100%'} />
                         <img src='assets/images/home/43/8.jpg' alt='' width={'100%'} />
                    </div>
               </section>
               <Footer />
          </section>
     )

     function setTitle() {
          return "MI+ - Home Page";
     }
}
