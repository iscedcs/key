import React, { useState } from 'react';
import { MDBNavbarBrand, MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import logo from '../../assets/images/logo/logo.svg'

export default function Navbar() {
     const [showNavCentred, setShowNavCentred] = useState(false);
     return (
          <MDBNavbar expand='lg' dark bgColor='black'>
               <MDBContainer>
                    <MDBNavbarBrand href='#'>
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
                              <MDBNavbarItem className='mx-5 py-3'>
                                   <MDBNavbarLink active aria-current='page' href='/'>Home</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem className='mx-5 py-3'>
                                   <MDBNavbarLink href='about'>About Us</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem className='mx-5 py-3'>
                                   <MDBNavbarLink href='products'>Products</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem className='mx-5 py-3'>
                                   <MDBNavbarLink href='contact'>Contact</MDBNavbarLink>
                              </MDBNavbarItem>
                         </MDBNavbarNav>
                         <MDBDropdown>
                              <MDBDropdownToggle className='bg-black'>English</MDBDropdownToggle>
                              <MDBDropdownMenu>
                                   <MDBDropdownItem>
                                        <MDBDropdownLink href="#">English</MDBDropdownLink>
                                   </MDBDropdownItem>
                              </MDBDropdownMenu>
                         </MDBDropdown>
                    </MDBCollapse>
               </MDBContainer>
          </MDBNavbar>
     )
}
