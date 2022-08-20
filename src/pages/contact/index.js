import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Contact() {
     return (
          <section>
               <Header />
               <Navbar
                    title = { 'Contact' }
               />
               <Footer />
          </section>
     )
}
