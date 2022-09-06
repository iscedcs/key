import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ProductBreadcrumb from './ProductBreadcrumb'
import ProductIntro from './ProductIntro'

// importing all product images from directory

// Home theater speaker
import MIG802S from '../../assets/images/home_theater_speaker/MIG802S.webp'
import MIG803S from '../../assets/images/home_theater_speaker/MIG803S.webp'
import MIL601A from '../../assets/images/home_theater_speaker/MIL601A.webp'
import MIL602A from '../../assets/images/home_theater_speaker/MIL602A.webp'
import MIL603A from '../../assets/images/home_theater_speaker/MIL603A.webp'
import MIL604A from '../../assets/images/home_theater_speaker/MIL604A.webp'
import MIL605A from '../../assets/images/home_theater_speaker/MIL605A.webp'
import MIL606A from '../../assets/images/home_theater_speaker/MIL606A.webp'
import MIM601A from '../../assets/images/home_theater_speaker/MIM601A.webp'
import MIM602A from '../../assets/images/home_theater_speaker/MIM602A.webp'
import MIM603A from '../../assets/images/home_theater_speaker/MIM603A.webp'
import MIM604A from '../../assets/images/home_theater_speaker/MIM604A.webp'
import MIM605A from '../../assets/images/home_theater_speaker/MIM605A.webp'

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
                                   <MDBTableHead className='bg-danger'>
                                        <tr>
                                             <th className='text-white' scope='col'>PRODUCTS</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td><a className='text-danger' href='#home_theater_speaker'>HOME THEATER SPEAKER</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-danger' href='#dual_tower-speaker'>DUAL TOWER SPEAKER</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-danger' href='#drawbar_speaker'>DRAWBAR SPEAKER</a></td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                         </MDBCol>
                         <MDBCol lg='9' md='12'>
                              <MDBTable className='mb-4' id='home_theater_speaker'>
                                   <MDBTableHead className='bg-danger'>
                                        <tr>
                                             <th className='text-white' scope='col'>HOME THEATER SPEAKER</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIG802S}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIG802S</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIG803S}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIG803S</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIL601A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIL601A</MDBCardTitle>
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
                                                                      color="dangerr"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIL602A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIL602A</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIL603A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIL603A</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIL604A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIL604A</MDBCardTitle>
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
                                                                      color="dangerr"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIL605A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIL605A</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIL606A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIL606A</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIM601A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIM601A</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIM602A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIM602A</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIM603A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIM603A</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIM604A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIM604A</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIM605A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIM601A</MDBCardTitle>
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
                                                                      color="danger"
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
                              <MDBTable className='mb-4' id='dual_tower-speaker'>
                                   <MDBTableHead className='bg-danger'>
                                        <tr>
                                             <th className='text-white' scope='col'>DUAL TOWER SPEAKER</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIG802S}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone X</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIG803S}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIL601A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11 Pro</MDBCardTitle>
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
                                                                      color="danger"
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
                              <MDBTable className='mb-4' id='drawbar_speaker'>
                                   <MDBTableHead className='bg-danger'>
                                        <tr>
                                             <th className='text-white' scope='col'>DRAWBAR SPEAKER</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIG802S}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone X</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIG803S}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIL601A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11 Pro</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIG802S}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone X</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIG803S}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIL601A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11 Pro</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIG802S}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone X</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIG803S}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11</MDBCardTitle>
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
                                                                      color="danger"
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
                                                  <MDBCard className="text-danger">
                                                       <MDBCardImage
                                                            src={MIL601A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">iPhone 11 Pro</MDBCardTitle>
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
                                                                      color="danger"
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
