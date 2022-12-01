import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
     return (
          <MDBFooter bgColor='black' className='text-center text-lg-start text-light mt-5'>
               <section className='pt-3'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                         <MDBRow className='mt-3'>
                              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                   <h6 className='text-uppercase fw-bold mb-4'>
                                        <MDBIcon icon="gem" className="me-3" />
                                        MI PLUS
                                   </h6>
                                   <p>
                                        MI Plus is an electronics brand. We provide high quality Home Appliances for very affordable rates. Our TV sets are user friendly, budget friendly, and perfect for every home.
                                   </p>
                              </MDBCol>

                              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                   <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                   <p>
                                        <a href='#!' className='text-reset'>
                                             LED TV
                                        </a>
                                   </p>
                                   <p>
                                        <a href='#!' className='text-reset'>
                                             Sound System
                                        </a>
                                   </p>
                                   <p>
                                        <a href='#!' className='text-reset'>
                                             Dual Tower Speaker
                                        </a>
                                   </p>
                                   <p>
                                        <a href='#!' className='text-reset'>
                                             Drawbar Speaker
                                        </a>
                                   </p>
                              </MDBCol>

                              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                   <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                   <p>
                                        <a href='/' className='text-reset'>
                                             Home
                                        </a>
                                   </p>
                                   <p>
                                        <a href='about' className='text-reset'>
                                             About
                                        </a>
                                   </p>
                                   <p>
                                        <a href='products' className='text-reset'>
                                             Products
                                        </a>
                                   </p>
                                   <p>
                                        <a href='contact' className='text-reset'>
                                             Contact
                                        </a>
                                   </p>
                              </MDBCol>

                              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                   <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                   <p>
                                        <MDBIcon icon="home" className="me-2" />
                                        423 Rd, Festac Town 102102, Lagos
                                   </p>
                                   <p>
                                        <MDBIcon icon="envelope" className="me-3" />
                                        info@hello-mi.com
                                   </p>
                                   <p>
                                        <MDBIcon icon="phone" className="me-3" /> +234 806 879 0541
                                   </p>
                              </MDBCol>
                         </MDBRow>
                    </MDBContainer>
               </section>

               <div className='text-center p-4' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                    © 2022 Copyright:
                    <a className='text-reset fw-bold ms-2' href='#!'>
                         MI + Electronics
                    </a>
               </div>
               <div className='text-center p-4' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                    {'Leading Professional For Electronics Manufacture In Nigeria'}
               </div>
          </MDBFooter>
     );
}