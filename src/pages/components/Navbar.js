import React, { useState } from 'react';
import { MDBNavbarBrand, MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import logo from '../../assets/images/logo/logo.svg'

export default function Navbar() {
     const [showNavCentred, setShowNavCentred] = useState(false);
     return (
          <MDBNavbar expand='lg' dark bgColor='black' className=''>
               <MDBContainer>
                    <MDBNavbarBrand href='/'>
                         <img src={logo} height={40} alt={'M+'} />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                         type='button'
                         data-target='#navbarCenteredExample'
                         aria-controls='navbarCenteredExample'
                         aria-expanded='false'
                         aria-label='Toggle navigation'
                         onClick={() => setShowNavCentred(!showNavCentred)}
                    >
                         <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavCentred} id='navbarCenteredExample' className='justify-content-center py-3 text-center'>
                         <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
                              <MDBNavbarItem className='mx-5 '>
                                   <MDBNavbarLink className='text-white' href='/'>HOME</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem className='mx-5 '>
                                   <MDBNavbarLink className='text-white' href='about'>ABOUT</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem className=''>
                                   <MDBDropdown>
                                        <MDBDropdownToggle className='bg-black' style={{ fontSize: '1rem' }}>PRODUCTS</MDBDropdownToggle>
                                        <MDBDropdownMenu className='bg-black text-white' style={{ zIndex: '10000' }}>
                                             <MDBRow className='text-center'>
                                                  <MDBCol>
                                                       <MDBNavbarLink className='text-white' href="32">
                                                            <img src='assets/images/latest/led.webp' alt='LED' height={250} />
                                                            <div>MI+ 32" LED TV</div>
                                                       </MDBNavbarLink>
                                                  </MDBCol>
                                                  <MDBCol>
                                                       <MDBNavbarLink className='text-white' href="43">
                                                            <img src='assets/images/latest/led43.webp' alt='LED' height={250} />
                                                            <div>MI+ 43" LED TV</div>
                                                       </MDBNavbarLink>
                                                  </MDBCol>
                                             </MDBRow>
                                             <MDBNavbarLink className='text-white w-100 text-center' href="products">MI+ ALL PRODUCTS</MDBNavbarLink>
                                        </MDBDropdownMenu>
                                   </MDBDropdown>
                              </MDBNavbarItem>
                              <MDBNavbarItem className='text-white mx-5 '>
                                   <MDBNavbarLink className='text-white' href='contact'>CONTACT</MDBNavbarLink>
                              </MDBNavbarItem>
                         </MDBNavbarNav>
                    </MDBCollapse>
               </MDBContainer>
          </MDBNavbar>
     )
}
