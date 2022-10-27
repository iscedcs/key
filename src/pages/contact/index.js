import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTextArea } from 'mdb-react-ui-kit'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ContactBreadcrumb from './ContactBreadcrumb'
import ContactIntro from './ContactIntro'
import ContactMap from './ContactMap'

export default function Contact() {

     document.title = setTitle();
     return (
          <section>
               <Header />
               <Navbar title={'Contact'} />
               <ContactIntro />
               <ContactBreadcrumb />
               <MDBContainer className='mb-5'>
                    <MDBCard>
                         <MDBCardHeader className='bg-danger text-white'>
                              <MDBCardTitle>Contact Us</MDBCardTitle>
                         </MDBCardHeader>
                         <MDBCardBody>
                              <MDBRow>
                                   <MDBCol sm='12' md='12' lg='5' xl='4' className='border-end'>
                                        <div className=" mx-3">
                                             <h3 className="-title text-dark mb-5">Contact Info</h3>

                                             <MDBRow className='py-2 border-bottom'>
                                                  <MDBCol size='2'>
                                                       <MDBIcon fas icon="map-marker-alt" className=' fa-2x' />
                                                  </MDBCol>
                                                  <MDBCol size='10'>
                                                       <h6>Head Office</h6>
                                                       <p>423 Rd, Festac Town  <br /><span>102102, Lagos</span></p>
                                                  </MDBCol>
                                             </MDBRow>

                                             <MDBRow className='py-2 border-bottom'>
                                                  <MDBCol size='2'>
                                                       <MDBIcon fas icon="phone-alt" className=' fa-2x' />
                                                  </MDBCol>
                                                  <MDBCol size='10'>
                                                       <h6>Phone</h6>
                                                       <a href="tel://+00123456789 ">+00 123 456 789</a> <br />
                                                  </MDBCol>
                                             </MDBRow>

                                             <MDBRow className='py-2'>
                                                  <MDBCol size='2'>
                                                       <MDBIcon fas icon="envelope" className=' fa-2x' />
                                                  </MDBCol>
                                                  <MDBCol size='10'>
                                                       <h6>Email</h6>
                                                       <a href="mailto://info@hello-mi.com">info@hello-mi.com</a> <br />

                                                  </MDBCol>
                                             </MDBRow>
                                        </div>
                                   </MDBCol>
                                   <MDBCol sm='12' md='12' lg='7' xl='8'>
                                        <div className="mx-3">
                                             <h3 className="text-dark mb-5">Get In Touch</h3>
                                             <form className="" id="" action='' method="post">
                                                  <MDBRow>
                                                       <MDBCol className='mb-4' sm='12' md='6'>
                                                            <MDBInput label='Your Name' id='form1' type='text' />
                                                       </MDBCol>
                                                       <MDBCol className='mb-4' sm='12' md='6'>
                                                            <MDBInput label='Your Email' id='form1' type='email' />
                                                       </MDBCol>
                                                  </MDBRow>
                                                  <MDBInput className='mb-4' label='Your Subject' id='form1' type='text' />
                                                  <MDBTextArea className='mb-4' label='Your Message' id='textAreaExample' rows={4} />
                                                  <MDBBtn style={{ backgroundColor: '#f93154' }} href='#'>
                                                       <MDBIcon className='me-2' fas icon='paper-plane' /> Submit Now
                                                  </MDBBtn>
                                             </form>

                                             <div className="form-message"></div>
                                        </div>
                                   </MDBCol>
                              </MDBRow>
                         </MDBCardBody>

                    </MDBCard>
               </MDBContainer>
               <ContactMap />

               <Footer />
          </section>
     )

     function setTitle() {
          return "MI+ - Contact Us";
     }
}
