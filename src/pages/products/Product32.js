import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import ProductSlider from './ProductSlider';

export default function Product32() {
     document.title = setTitle();
     return (
          <section className='bg-light'>
               <Navbar />
               <div className='w-100 p-2 bg-white'>
                    <div className="container h5 text-center">
                         TELEVISIONS
                    </div>
               </div>
               <MDBContainer className='py-5'>
                    <MDBRow className='mt-3'>
                         <MDBCol sm={12} md={6}>
                              <ProductSlider />
                         </MDBCol>
                         <MDBCol sm={12} md={6} className='px-5'>
                              <MDBTypography tag='h3' className='fw-bold'>4K LED TV</MDBTypography>
                              <MDBTypography tag='small' className='lead mb-3'>Specifications</MDBTypography>
                              <MDBTypography listUnStyled className='mb-4'>
                                   <ul>
                                        <li>Panel Manufacturer:			HKC</li>
                                        <li>Dimensions:			  32", 43"</li>
                                        <li>Aspect ratio:			16:9</li>
                                        <li>Resolving power:			1366*768</li>
                                        <li>Brightness:			200+20</li>
                                        <li>Contrast:			3000:1</li>
                                        <li>Perspective:			178°X 178°</li>
                                        <li>Color:			16.7M</li>
                                        <li>Response time:			8.5ms		</li>
                                        <li>Frameless Design</li>
                                        <li>Multi Input/Output Terminals</li>
                                        <li>A Grade Original Panel</li>
                                        <li>Mordern Design</li>
                                   </ul>
                              </MDBTypography>

                              <MDBTypography tag='h5' className='fw-bold mt-3'>Description</MDBTypography>
                              <MDBTypography tag='small' className='lead mb-3'>
                                   Use less power and produce less heat than plasma or other LCD TVs. RGB LED: Brighter, sharper display and better contrast ratio than other LCD TVs. Edge-lit LED: Thinner format.
                              </MDBTypography>

                         </MDBCol>
                    </MDBRow>
               </MDBContainer>
               <img src='assets/images/sliders/3.webp' alt='' width={'100%'} />
               <section className=''>
                    <div className='w-100'>
                         <img src='assets/images/home/32/P3.webp' alt='' width={'100%'} />
                         <div className='row'>
                              <div className="col-md">
                                   <img src='assets/images/home/32/P4.webp' alt='' width={'100%'} />
                              </div>
                              <div className="col-md">
                                   <img src='assets/images/home/43/5.webp' alt='' width={'100%'} />
                              </div>
                         </div>
                         <img src='assets/images/home/32/P5.webp' alt='' width={'100%'} />
                         <img src='assets/images/home/32/P6.webp' alt='' width={'100%'} />
                    </div>
               </section>
               <Footer />
          </section>
     )

     function setTitle() {
          return "MI+ TVs";
     }
}
