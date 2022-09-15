import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
     return (
          <MDBFooter bgColor='dark' className='text-center text-lg-start text-light mt-5'>
               <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                         <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                         <a href='#!' className='me-4 text-reset'>
                              <MDBIcon fab icon="facebook-f" />
                         </a>
                         <a href='#!' className='me-4 text-reset'>
                              <MDBIcon fab icon="twitter" />
                         </a>
                         <a href='#!' className='me-4 text-reset'>
                              <MDBIcon fab icon="google" />
                         </a>
                         <a href='#!' className='me-4 text-reset'>
                              <MDBIcon fab icon="instagram" />
                         </a>
                         <a href='#!' className='me-4 text-reset'>
                              <MDBIcon fab icon="linkedin" />
                         </a>
                         <a href='#!' className='me-4 text-reset'>
                              <MDBIcon fab icon="github" />
                         </a>
                    </div>
               </section>

               <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                         <MDBRow className='mt-3'>
                              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                   <h6 className='text-uppercase fw-bold mb-4'>
                                        <MDBIcon icon="gem" className="me-3" />
                                        MI PLUS
                                   </h6>
                                   <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                   </p>
                              </MDBCol>

                              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                   <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                   <p>
                                        <a href='product-one' className='text-reset'>
                                             Smart TV
                                        </a>
                                   </p>
                                   <p>
                                        <a href='product-one' className='text-reset'>
                                             Home Theater Speaker
                                        </a>
                                   </p>
                                   <p>
                                        <a href='product-one' className='text-reset'>
                                             Dual Tower Speaker
                                        </a>
                                   </p>
                                   <p>
                                        <a href='product-one' className='text-reset'>
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
                                        Ikeja, Lagos, Nigeria
                                   </p>
                                   <p>
                                        <MDBIcon icon="envelope" className="me-3" />
                                        info@hello-mi.com
                                   </p>
                                   <p>
                                        <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                   </p>
                                   <p>
                                        <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                   </p>
                              </MDBCol>
                         </MDBRow>
                    </MDBContainer>
               </section>

               <div className='text-center p-4' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                    © 2022 Copyright:
                    <a className='text-reset fw-bold' href='https://isce.app'>
                         ISCE Digital Concept
                    </a>
               </div>
          </MDBFooter>
     );
}