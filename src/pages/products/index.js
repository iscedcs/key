import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ProductBreadcrumb from './ProductBreadcrumb'
import ProductIntro from './ProductIntro'

export default function Products() {
     return (
          <section>
               <Header />
               <Navbar title={'Products'} />
               <ProductIntro />
               <ProductBreadcrumb />

               <MDBContainer >
                    <MDBRow className='mb-3'>
                         <MDBCol lg='3' md='12' className='pe-4'>
                              <MDBTable bordered className='sticky-lg-top'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white' scope='col'>Products</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td><a className='text-black' href='#one'>Product Type 1</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-black' href='#two'>Product Type 2</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-black' href='#three'>Product Type 3</a></td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                         </MDBCol>
                         <MDBCol lg='9' md='12'>
                              <MDBTable className='mb-4' id='one'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white' scope='col'>Product Type One</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-black">
                                                       <MDBCardImage
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone X</MDBCardTitle>
                                                                 <h6 className="text-primary mb-1 pb-3">Starting at $399</h6>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Quick Look</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">5.8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                      <ul className="list-unstyled mb-0">
                                                                           <li aria-hidden="true">—</li>
                                                                           <li>Wide</li>
                                                                           <li>Telephoto</li>
                                                                           <li aria-hidden="true">—</li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">2x</span>
                                                                      <span>Optical zoom range</span>
                                                                 </div>

                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Capacity</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4 lead">
                                                                      <span className="mb-2">64GB</span>
                                                                      <span className="mb-2">256GB</span>
                                                                      <span style={{ color: "transparent" }}>0</span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="black"
                                                                      rippleColor="white"
                                                                      className="flex-fill ms-1"
                                                                 >
                                                                      Learn more
                                                                 </MDBBtn>
                                                            </div>
                                                       </MDBCardBody>
                                                  </MDBCard>
                                             </MDBCol>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-black">
                                                       <MDBCardImage
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp"
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11</MDBCardTitle>
                                                                 <h6 className="text-primary mb-1 pb-3">Starting at $499</h6>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Quick Look</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.1″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                      <ul className="list-unstyled mb-0">
                                                                           <li aria-hidden="true">Ultra Wide</li>
                                                                           <li>Wide</li>
                                                                           <li aria-hidden="true">—</li>
                                                                           <li aria-hidden="true">—</li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">2x</span>
                                                                      <span>Optical zoom range</span>
                                                                 </div>

                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Capacity</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4 lead">
                                                                      <span className="mb-2">64GB</span>
                                                                      <span class="mb-2">128GB</span>
                                                                      <span>256GB</span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="black"
                                                                      rippleColor="white"
                                                                      className="flex-fill ms-1"
                                                                 >
                                                                      Learn more
                                                                 </MDBBtn>
                                                            </div>
                                                       </MDBCardBody>
                                                  </MDBCard>
                                             </MDBCol>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-black">
                                                       <MDBCardImage
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp"
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11 Pro</MDBCardTitle>
                                                                 <h6 className="text-primary mb-1 pb-3">Starting at $599</h6>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Quick Look</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">5.8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                      <ul className="list-unstyled mb-0">
                                                                           <li aria-hidden="true">Ultra Wide</li>
                                                                           <li>Wide</li>
                                                                           <li>Telephoto</li>
                                                                           <li aria-hidden="true">—</li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">4x</span>
                                                                      <span>Optical zoom range</span>
                                                                 </div>

                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Capacity</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4 lead">
                                                                      <span class="mb-2">64GB</span>
                                                                      <span class="mb-2">256GB</span>
                                                                      <span>512GB</span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="black"
                                                                      rippleColor="white"
                                                                      className="flex-fill ms-1"
                                                                 >
                                                                      Learn more
                                                                 </MDBBtn>
                                                            </div>
                                                       </MDBCardBody>
                                                  </MDBCard>
                                             </MDBCol>
                                        </MDBRow>
                                   </MDBTableBody>
                              </MDBTable>
                              <MDBTable className='mb-4' id='two'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white' scope='col'>Product Type Two</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                             <MDBCol sm='12' md='6' lg='4' xl='3'>
                                                  <div className='bg-image'>
                                                       <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                                                       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                                            <div className='d-flex justify-content-center align-items-center h-100'>
                                                                 <p className='text-white mb-0'>Product Name</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </MDBCol>
                                        </MDBRow>
                                   </MDBTableBody>
                              </MDBTable>
                              <MDBTable className='mb-4' id='three'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white' scope='col'>Product Type Three</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-black">
                                                       <MDBCardImage
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone X</MDBCardTitle>
                                                                 <h6 className="text-primary mb-1 pb-3">Starting at $399</h6>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Quick Look</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">5.8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                      <ul className="list-unstyled mb-0">
                                                                           <li aria-hidden="true">—</li>
                                                                           <li>Wide</li>
                                                                           <li>Telephoto</li>
                                                                           <li aria-hidden="true">—</li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">2x</span>
                                                                      <span>Optical zoom range</span>
                                                                 </div>

                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Capacity</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4 lead">
                                                                      <span className="mb-2">64GB</span>
                                                                      <span className="mb-2">256GB</span>
                                                                      <span style={{ color: "transparent" }}>0</span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="black"
                                                                      rippleColor="white"
                                                                      className="flex-fill ms-1"
                                                                 >
                                                                      Learn more
                                                                 </MDBBtn>
                                                            </div>
                                                       </MDBCardBody>
                                                  </MDBCard>
                                             </MDBCol>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-black">
                                                       <MDBCardImage
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp"
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11</MDBCardTitle>
                                                                 <h6 className="text-primary mb-1 pb-3">Starting at $499</h6>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Quick Look</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.1″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                      <ul className="list-unstyled mb-0">
                                                                           <li aria-hidden="true">Ultra Wide</li>
                                                                           <li>Wide</li>
                                                                           <li aria-hidden="true">—</li>
                                                                           <li aria-hidden="true">—</li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">2x</span>
                                                                      <span>Optical zoom range</span>
                                                                 </div>

                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Capacity</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4 lead">
                                                                      <span className="mb-2">64GB</span>
                                                                      <span class="mb-2">128GB</span>
                                                                      <span>256GB</span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="black"
                                                                      rippleColor="white"
                                                                      className="flex-fill ms-1"
                                                                 >
                                                                      Learn more
                                                                 </MDBBtn>
                                                            </div>
                                                       </MDBCardBody>
                                                  </MDBCard>
                                             </MDBCol>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-black">
                                                       <MDBCardImage
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp"
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11 Pro</MDBCardTitle>
                                                                 <h6 className="text-primary mb-1 pb-3">Starting at $599</h6>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Quick Look</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">5.8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                      <ul className="list-unstyled mb-0">
                                                                           <li aria-hidden="true">Ultra Wide</li>
                                                                           <li>Wide</li>
                                                                           <li>Telephoto</li>
                                                                           <li aria-hidden="true">—</li>
                                                                      </ul>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">4x</span>
                                                                      <span>Optical zoom range</span>
                                                                 </div>

                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Capacity</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4 lead">
                                                                      <span class="mb-2">64GB</span>
                                                                      <span class="mb-2">256GB</span>
                                                                      <span>512GB</span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="black"
                                                                      rippleColor="white"
                                                                      className="flex-fill ms-1"
                                                                 >
                                                                      Learn more
                                                                 </MDBBtn>
                                                            </div>
                                                       </MDBCardBody>
                                                  </MDBCard>
                                             </MDBCol>
                                        </MDBRow>
                                   </MDBTableBody>
                              </MDBTable>
                         </MDBCol>
                    </MDBRow>
               </MDBContainer>

               <Footer />
          </section>
     )
}
