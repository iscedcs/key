import { MDBBtn, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import React from 'react'

export default function Header() {
     return (
          <>
               <MDBNavbar light bgColor='light'>
                    <MDBContainer>
                         <MDBNavbarBrand href='#'>
                              <img
                                   src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                                   height='30'
                                   alt=''
                                   loading='lazy'
                              />
                         </MDBNavbarBrand>
                         <MDBDropdown>
                              <MDBDropdownToggle>Language</MDBDropdownToggle>
                              <MDBDropdownMenu>
                                   <MDBDropdownItem>
                                        <MDBDropdownLink href="#">English</MDBDropdownLink>
                                   </MDBDropdownItem>
                              </MDBDropdownMenu>
                         </MDBDropdown>
                    </MDBContainer>
               </MDBNavbar>
          </>
     )
}
