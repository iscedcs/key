import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import NewProducts from './NewProducts'

export default function Home() {
     return (
          <section>
               <Header />
               <Navbar title = {'Home'} />
               <Slider />
               <NewProducts />
          </section>
     )
}
