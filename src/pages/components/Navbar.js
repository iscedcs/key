import React, { useState } from 'react';
import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse } from 'mdb-react-ui-kit';

export default function Navbar() {
     const [showNavCentred, setShowNavCentred] = useState(false);
     return (
          <MDBNavbar expand='lg' dark bgColor='dark'>
               <MDBContainer fluid>
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

                    <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample' className='justify-content-center py-3'>
                         <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
                              <MDBNavbarItem className='mx-5'>
                                   <MDBNavbarLink active aria-current='page' href=''>
                                        Home
                                   </MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem className='mx-5'>
                                   <MDBNavbarLink href='about'>About Us</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem className='mx-5'>
                                   <MDBNavbarLink href='product'>Products</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem className='mx-5'>
                                   <MDBNavbarLink href='contact'>Contact</MDBNavbarLink>
                              </MDBNavbarItem>
                         </MDBNavbarNav>
                    </MDBCollapse>
               </MDBContainer>
          </MDBNavbar>
     )
}
