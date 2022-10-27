import { MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

export default function About() {
     return (
          <>
               <MDBContainer className='pt-4'>
                    <MDBRow className=''>
                         <MDBCol sm={'12'} md={'12'} xl={'6'} xxl={'6'} >
                              <div className="ratio ratio-16x9">
                                   <iframe
                                        src="https://www.youtube.com/embed/13q1J7km1Ho"
                                        title="ISCE Digital Concept"
                                        allowFullScreen
                                   ></iframe>
                              </div>
                         </MDBCol>
                         <MDBCol sm={'12'} md={'12'} xl={'6'} xxl={'6'} >
                              <MDBCard>
                                   <MDBCardBody>
                                        <MDBCardText>
                                             <span className='text-uppercase text-center fs-3' >About Us</span><br />
                                             <span className='mb-3'>
                                                  MI Plus is an electronics brand. We provide high quality Home Appliances for very affordable rates. Our TV sets are user friendly, budget friendly, and perfect for every home.
                                             </span><br /><br />
                                             <span className='mb-3'>
                                                  We strive to provide good quality appliances at affordable rates.
                                             </span><br /><br />
                                             <span className='mb-3'>We strive to provide good quality appliances at affordable rates.
                                                  We offer Prompt Aftersales Services, Service Engineers to set up for you, One Year Warranty, and so much more.
                                             </span><br /><br />
                                             <span className=''>
                                                  You can finally stop buying overpriced appliances, we have got you covered.
                                             </span>
                                        </MDBCardText>
                                   </MDBCardBody>
                              </MDBCard>
                         </MDBCol>
                    </MDBRow>
               </MDBContainer>
          </>
     )
}
