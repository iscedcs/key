import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function About() {
     return (
          <section>
               <Header />
               <Navbar
                    title={'About'}
               />
               <Footer />
          </section>
     )
}
