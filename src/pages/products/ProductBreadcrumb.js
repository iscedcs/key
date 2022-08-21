import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer, MDBNavbar } from 'mdb-react-ui-kit';

export default function ProductBreadcrumb() {
     return (
          <MDBNavbar expand='lg' light bgColor='light' className='mb-4'>
               <MDBContainer>
                    <MDBBreadcrumb>
                         <MDBBreadcrumbItem>
                              <a href='/'>Home</a>
                         </MDBBreadcrumbItem>
                         <MDBBreadcrumbItem active>
                              <a href='products'>Products</a>
                         </MDBBreadcrumbItem>
                    </MDBBreadcrumb>
               </MDBContainer>
          </MDBNavbar>
     );
}