import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import NewProducts from './NewProducts'

export default function Home() {
     document.title = setTitle();
     return (
          <section>
               <Navbar title={'Home'} />
               <Slider />
               <NewProducts />
               <section className=''>
                    <div className='w-100'>
                         <img src='assets/images/home/32/2.jpg' alt='' width={'100%'} />
                         <img src='assets/images/home/32/3.jpg' alt='' width={'100%'} />
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
