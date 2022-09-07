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

// Dual Tower speaker
import MID8016 from '../../assets/images/dual_tower_speaker/MID8016.webp'
import MID8026 from '../../assets/images/dual_tower_speaker/MID8026.webp'
import MID8036 from '../../assets/images/dual_tower_speaker/MID8036.webp'

// DrawBar speaker
import MITS108 from '../../assets/images/drawbar_speaker/MITS108.webp'
import MITS098 from '../../assets/images/drawbar_speaker/MITS098.webp'
import MITS048 from '../../assets/images/drawbar_speaker/MITS048.webp'
import MITS068 from '../../assets/images/drawbar_speaker/MITS068.webp'
import MITS028 from '../../assets/images/drawbar_speaker/MITS028.webp'
import MITS038 from '../../assets/images/drawbar_speaker/MITS038.webp'
import MITS088 from '../../assets/images/drawbar_speaker/MITS088.webp'
import MITS148 from '../../assets/images/drawbar_speaker/MITS148.webp'
import MITS018 from '../../assets/images/drawbar_speaker/MITS018.webp'

// Home theater speaker
import MI50DV6A from '../../assets/images/televisions/MI50DV6A.webp'
import MI50DF1A from '../../assets/images/televisions/MI50DF1A.webp'
import MI75DV6A from '../../assets/images/televisions/MI75DV6A.webp'
import MI43DV6A from '../../assets/images/televisions/MI43DV6A.webp'
import MI55DV6A from '../../assets/images/televisions/MI55DV6A.webp'
import MI32DV6A from '../../assets/images/televisions/MI32DV6A.webp'
import MI32DF1A from '../../assets/images/televisions/MI32DF1A.webp'
import MI65DV6A from '../../assets/images/televisions/MI65DV6A.webp'
import MI75DF1A from '../../assets/images/televisions/MI75DF1A.webp'
import MI85DV3A from '../../assets/images/televisions/MI85DV3A.webp'
import MI24DV6A from '../../assets/images/televisions/MI24DV6A.webp'
import MI65DF1A from '../../assets/images/televisions/MI65DF1A.webp'
import MI55DF1A from '../../assets/images/televisions/MI55DF1A.webp'
import MI43DF1A from '../../assets/images/televisions/MI43DF1A.webp'


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
                                   <MDBTableHead className='bg-dark'>
                                        <tr>
                                             <th className='text-white' scope='col'>PRODUCTS</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td><a className='text-dark' href='#home_theater_speaker'>HOME THEATER SPEAKER</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-dark' href='#dual_tower-speaker'>DUAL TOWER SPEAKER</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-dark' href='#drawbar_speaker'>DRAWBAR SPEAKER</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-dark' href='#televisions'>TELEVISIONS</a></td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                         </MDBCol>
                         <MDBCol lg='9' md='12'>
                              <MDBTable className='mb-4' id='home_theater_speaker'>
                                   <MDBTableHead className='bg-dark'>
                                        <tr>
                                             <th className='text-white' scope='col'>HOME THEATER SPEAKER</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5" / 8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5" / 8″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="darkr"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="darkr"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5" / 8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5" / 8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5" / 8″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
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
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5" / 8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MIM605A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MIM605A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5" / 8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                   <MDBTableHead className='bg-dark'>
                                        <tr>
                                             <th className='text-white' scope='col'>DUAL TOWER SPEAKER</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MID8016}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MID8016</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">5.25"/6.5"/8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MID8026}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MID8026</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">5.25"/6.5"/8″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MID8036}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MID8036</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">5.25"/6.5"/8″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                   <MDBTableHead className='bg-dark'>
                                        <tr>
                                             <th className='text-white' scope='col'>DRAWBAR SPEAKER</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MITS108}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MITS108</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MITS098}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MITS098</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MITS048}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MITS048</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MITS068}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MITS068</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MITS028}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MITS028</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MITS038}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MITS038</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MITS088}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MITS088</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MITS148}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MITS148</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MITS018}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MITS018</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                              <MDBTable className='mb-4' id='televisions'>
                                   <MDBTableHead className='bg-dark'>
                                        <tr>
                                             <th className='text-white' scope='col'>TELEVISIONS</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol md="4" className="mb-4 mb-lg-0">
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI50DV6A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI50DV6A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI50DF1A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI50DF1A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI75DV6A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI75DV6A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI43DV6A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI43DV6A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI55DV6A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI55DV6A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI32DV6A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI32DV6A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI32DF1A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI32DF1A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI65DV6A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI65DV6A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI75DF1A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI75DF1A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI85DV3A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI85DV3A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI24DV6A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI24DV6A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI65DF1A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI65DF1A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI55DF1A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI55DF1A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Liquid Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
                                                  <MDBCard className="text-dark">
                                                       <MDBCardImage
                                                            src={MI43DF1A}
                                                            position="top"
                                                            alt="iPhone"
                                                       />
                                                       <MDBCardBody>
                                                            <div className="text-center mt-1">
                                                                 <MDBCardTitle className="h4">MI43DF1A</MDBCardTitle>
                                                            </div>
                                                            <div className="text-center">
                                                                 <div
                                                                      className="p-3 mx-n3 mb-4"
                                                                      style={{ backgroundColor: "#eff1f2" }}
                                                                 >
                                                                      <h5 className="mb-0">Specification</h5>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mt-4 mb-0">6.5″</span>
                                                                      <span>Super Retina HD display1</span>
                                                                 </div>

                                                                 <div className="d-flex flex-column mb-4">
                                                                      <span className="h1 mb-0">
                                                                           <MDBIcon fas icon="camera-retro" />
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            <div className="d-flex flex-row">
                                                                 <MDBBtn
                                                                      color="dark"
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
