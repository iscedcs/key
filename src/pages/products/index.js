import {
     // MDBBtn, 
     MDBCard, MDBCardBody, MDBCardImage,
     // MDBCardTitle, 
     MDBCol, MDBContainer,
     // MDBIcon,
     MDBRow, MDBTable, MDBTableBody, MDBTableHead
} from 'mdb-react-ui-kit'
import React from 'react'
import Footer from '../components/Footer'
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
     document.title = setTitle();
     return (
          <section>
               <Navbar title={'Products'} />
               <ProductIntro />
               <ProductBreadcrumb />

               <MDBContainer >
                    <MDBRow className='mb-3'>
                         <MDBCol lg='3' md='12' className='pe-4'>
                              <MDBTable bordered className='sticky-lg-top'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white' scope='col'>PRODUCTS</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td><a className='text-dark' href='#televisions'>TELEVISIONS</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-dark' href='#home_theater_speaker'>HOME THEATER SPEAKER</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-dark' href='#dual_tower-speaker'>DUAL TOWER SPEAKER</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-dark' href='#drawbar_speaker'>DRAWBAR SPEAKER</a></td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                         </MDBCol>
                         <MDBCol lg='9' md='12'>

                              <MDBTable className='mb-4' id='televisions'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white' scope='col'>TELEVISIONS</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td>
                                                  <MDBRow>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI50DV6A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI50DV6A - 50"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI50DF1A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI50DF1A - 50"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI75DV6A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI75DV6A - 75"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI43DV6A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI43DV6A - 43"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI55DV6A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI55DV6A - 55"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI32DV6A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI32DV6A - 32"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI32DF1A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI32DF1A - 32"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI65DV6A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI65DV6A - 65"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI75DF1A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI75DF1A - 75"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI85DV3A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI85DV3A - 85"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI24DV6A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI24DV6A - 24"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI65DF1A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI65DF1A - 65"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI55DF1A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI55DF1A - 55"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/televisions'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MI43DF1A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MI43DF1A - 43"</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                  </MDBRow>
                                             </td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                              <MDBTable className='mb-4' id='home_theater_speaker'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white' scope='col'>HOME THEATER SPEAKER</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td>
                                                  <MDBRow>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIG802S}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIG802S</div>
                                                                           {/* <div className="text-center">
                                                                           <div
                                                                                className="p-3 mx-n3 mb-4"
                                                                                style={{ backgroundColor: "#eff1f2" }}
                                                                           >
                                                                                <h5 className="mb-0">Specification</h5>
                                                                           </div>

                                                                           <div className="d-flex flex-column mb-4 text-start">
                                                                                <li>Subwoofer: 6.5 inch</li>
                                                                                <li>Satellite: 3 inch*3</li>
                                                                                <li>Output Power: 40W (Subwoofer) + 10W (speaker) * 3 </li>
                                                                                <li>With digital amplifier</li>
                                                                                <li>With Bluetooth / FM / USB / MP3 / SD / AUX / remote control</li>
                                                                                <li>
                                                                                     Dimension:<br />
                                                                                     H340 * W200 * D280mm for Subwoofer<br />
                                                                                     H330 * W100 * D60mm for Satellites
                                                                                </li>
                                                                           </div>
                                                                      </div>

                                                                      <div className="d-flex flex-row">

                                                                           <a
                                                                                color="dark"
                                                                                ripplecolor="white"
                                                                                className="flex-fill ms-1 btn bg-black text-white"
                                                                                href='/sound_systems'
                                                                           >
                                                                                Learn more
                                                                           </a>

                                                                      </div> */}
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIG803S}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIG803S</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIL601A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIL601A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIL602A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIL602A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIL603A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIL603A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIL604A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIL604A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIL605A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIL605A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIL606A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIL606A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIM601A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIM601A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIM602A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIM602A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIM603A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIM603A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIM604A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIM604A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MIM605A}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MIM605A</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                  </MDBRow>
                                             </td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                              <MDBTable className='mb-4' id='dual_tower-speaker'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white' scope='col'>DUAL TOWER SPEAKER</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td>
                                                  <MDBRow>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MID8016}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MID8016</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MID8026}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MID8026</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MID8036}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MID8036</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                  </MDBRow>
                                             </td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                              <MDBTable className='mb-4' id='drawbar_speaker'>
                                   <MDBTableHead className='bg-black'>
                                        <tr>
                                             <th className='text-white' scope='col'>DRAWBAR SPEAKER</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td>
                                                  <MDBRow>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MITS108}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MITS108</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MITS098}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MITS098</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MITS048}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MITS048</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MITS068}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MITS068</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MITS028}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MITS028</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MITS038}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MITS038</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MITS088}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MITS088</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MITS148}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MITS148</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
                                                       </MDBCol>
                                                       <MDBCol md="3" className="mb-4">
                                                            <a href='/sound_systems'>
                                                                 <MDBCard className="text-dark">
                                                                      <MDBCardImage
                                                                           src={MITS018}
                                                                           position="top"
                                                                           alt=""
                                                                      />
                                                                      <MDBCardBody>
                                                                           <div className="text-center">MITS018</div>
                                                                      </MDBCardBody>
                                                                 </MDBCard>
                                                            </a>
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
          return "MI+ - Our Products";
     }
}
