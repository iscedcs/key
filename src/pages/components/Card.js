import React from 'react';
import { MDBCard, MDBCardImage, MDBRipple, MDBCardFooter } from 'mdb-react-ui-kit';

export default function Card(props) {
     return (
          <MDBCard className=''>
               <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={props.image} fluid alt='' />
                    <a href={props.link}>
                         <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
               </MDBRipple>
               <MDBCardFooter className='text-center bg-black text-light'>{props.name}</MDBCardFooter>
          </MDBCard>
     );
}