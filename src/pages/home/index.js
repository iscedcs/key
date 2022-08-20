import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

export default function Home() {
     return (
          <section>
               <Header />
               <Navbar 
                    title = {'Home'}
               />
               <Slider />
          </section>
     )
}
