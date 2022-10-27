import {
     MDBContainer, MDBNavbar, MDBNavbarBrand
} from 'mdb-react-ui-kit'
import React from 'react'
import logo from '../../assets/images/logo/logo.svg'

export default function Header() {
     return (
          <>
               <MDBNavbar light bgColor='light'>
                    <MDBContainer className='justify-content-center'>
                         <MDBNavbarBrand href='/'>
                              <img src={logo} height={40} alt={'M+'} />
                              {/* MI+ */}
                         </MDBNavbarBrand>
                         {/* <MDBDropdown>
                              <MDBDropdownToggle className='bg-danger'>English</MDBDropdownToggle>
                              <MDBDropdownMenu>
                                   <MDBDropdownItem>
                                        <MDBDropdownLink href="#">English</MDBDropdownLink>
                                   </MDBDropdownItem>
                              </MDBDropdownMenu>
                         </MDBDropdown> */}
                    </MDBContainer>
               </MDBNavbar>
          </>
     )
}
