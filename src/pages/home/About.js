import { MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'

export default function About() {
     return (
          <>
               <MDBContainer className='pt-4'>
                    <MDBTypography tag='h3' className='text-center mb-3' >About Us</MDBTypography>
                    <MDBRow className=''>
                         <MDBCol sm={'12'} md={'12'} xl={'6'} xxl={'6'} >
                              <div className="ratio ratio-16x9">
                                   <iframe
                                        src="https://www.youtube.com/embed/vlDzYIIOYmM"
                                        title="YouTube video"
                                        allowFullScreen
                                   ></iframe>
                              </div>
                         </MDBCol>
                         <MDBCol sm={'12'} md={'12'} xl={'6'} xxl={'6'} >
                              <MDBCard>
                                   <MDBCardBody>
                                        <MDBCardText>
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                             With supporting text below as a natural lead-in to additional content
                                        </MDBCardText>
                                   </MDBCardBody>
                              </MDBCard>
                         </MDBCol>
                    </MDBRow>
               </MDBContainer>
          </>
     )
}
