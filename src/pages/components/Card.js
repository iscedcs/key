import React from 'react';
import {
     MDBCard,
     MDBCardBody,
     MDBCardTitle,
     MDBCardText,
     MDBCardImage,
     MDBBtn,
     MDBRipple,
     MDBCardFooter
} from 'mdb-react-ui-kit';

export default function Card(props) {
     return (
          <MDBCard className='mb-5'>
               <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='' />
                    <a>
                         <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
               </MDBRipple>
               <MDBCardFooter className='text-center bg-primary text-light'>{props.Name}</MDBCardFooter>
          </MDBCard>
     );
}