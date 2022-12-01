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
                                                  <p className="">Do you long for the childhood fantasies you relish in every time you sit in front of your TV? Do you feel a wave of satisfaction when the speaker is blasting, fan on full swing,a snack in hand with a can of your favourite drink?</p>
                                                  <p className="">This is what MI+ strives to recreate every time you pick one of our product. In the meantime, our brand introduction is in order; MI+ is an electronics brand that provides high quality Home Appliances that would bring beauty and color to every home. We produce TV Sets, Audio Sound Systems, Fans, Speakers, and so much more. Our products are of a premium quality, easy to navigate,  budget friendly and ultimately perfect for every home.</p>
                                                  <p className="">Finally, that gap between price and quality can be bridged. We don’t end our journey with you simply after purchase, we build a lasting relationship with you. With our top notch after-sale services which includes; An amazing free set up by our Service Engineers, Diagnostic , repair and replacement of parts at no cost to you within warranty period. We are better placed to take you through your favourite Childhood moments. Who says memories cannot be recreated?</p>
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
                                                  <p className="">We have a team of Nigerian and Chinese experts that are at the fore front of this great company. </p>
                                                  <p className="">After over two decades in the Home Appliances Production and Supply Value Chain, we are most confident that we have cracked the secret of combining quality and affordability to give our end consumers the most wonderful experience in our products.</p>
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
                                                  <p className="">Paying a great deal of attention to quality and safety standards we also believe in Fun & Entertainment - A night in front of the TV, some family time, or catching up on your favourite TV shows.</p>
                                                  <p className="">We wouldn't let you go through the troubles of changing your appliances every few years, or fixing something every few months. We got you covered in that.</p>
                                                  <p className="">We believe in our teeming end consumers satisfaction, knowing the simple things in life should be accessible to all.</p>
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
                                                                 src='assets/images/companies/logos-01.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-02.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-03.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-04.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-05.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-06.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-07.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-08.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-09.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-10.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-11.webp'
                                                                 className='img-thumbnail'
                                                                 alt='...'
                                                            />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' size='6' sm='6' md='4' lg='3' xl='2'>
                                                            <img
                                                                 src='assets/images/companies/logos-12.webp'
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
