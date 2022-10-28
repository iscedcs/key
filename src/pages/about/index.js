import { MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutIntro from './AboutIntro'
import Breadcrumb from './Breadcrumb'

export default function About() {

     document.title = setTitle();
     return (
          <section>
               <Navbar title={'About'} />
               <AboutIntro />
               <Breadcrumb />

               <MDBContainer >
                    <MDBRow className='mb-3'>
                         <MDBCol lg='3' md='12' className='pe-4'>
                              <MDBTable bordered className='sticky-lg-top'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th scope='col'><a className='fw-bold text-white' href='#about'>About Us</a></th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td><a className='fw-bold text-dark' href='#profile'>Company Profile</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='fw-bold text-dark' href='#culture'>Company Culture</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='fw-bold text-dark' href='#partners'>Partners</a></td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                         </MDBCol>
                         <MDBCol lg='9' md='12'>
                              <MDBTable className='mb-4' id='about'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white fw-bold fs-5' scope='col'>About Us</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody className=''>
                                        <tr>
                                             <td>
                                                  MI Plus is an electronics brand. We provide high quality Home Appliances for very affordable rates. Our TV sets are user friendly, budget friendly, and perfect for every home.
                                                  We strive to provide good quality appliances at affordable rates.
                                                  We offer Prompt Aftersales Services, Service Engineers to set up for you, One Year Warranty, and so much more.
                                                  You can finally stop buying overpriced appliances, we have got you covered.
                                             </td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                              <MDBTable className='mb-4' id='profile'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white fw-bold fs-5' scope='col'>Company Profile</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody className=''>
                                        <tr>
                                             <td>
                                                  The vision is headed by Mr. Tommy. He started working in the TV production industry at the age of 18.
                                                  After creating standard TV sets for over 20 years, he has decided to create a brand that would be accessible to all.
                                                  Using his vast experience, Mr. Tommy has found a good way to combine quality and affordability to give users the most wonderful experience.
                                             </td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                              <MDBTable className='mb-4' id='culture'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white fw-bold fs-5' scope='col'>Company Culture</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td>
                                                  We believe in quality fun and entertainment: A night in front of the TV, some family time, or catching up on your favourite TV shows.
                                                  We believe in Durability. Don’t go through the stress of changing your appliances every few years, or fixing something every few months. We provide durable appliances.
                                                  We believe in affordability. The simple things in life should be accessible to all.
                                             </td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                              <MDBTable className='mb-4' id='partners'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white fw-bold fs-5' scope='col'>Partners</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td>
                                                  <MDBRow>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-01.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-02.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-03.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-04.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-05.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-06.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-07.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-08.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-09.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-10.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-11.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-12.png'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                  </MDBRow>
                                             </td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                         </MDBCol>
                    </MDBRow>
               </MDBContainer>

               <Footer />
          </section>
     )

     function setTitle() {
          return "MI+ - About Us";
     }
}
