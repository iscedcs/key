import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';

export default function App() {
     return (
          <MDBCarousel showControls={true} interval={3000} >
               <MDBCarouselInner>
                    <MDBCarouselItem className='active'>
                         <MDBCarouselElement src={'assets/images/sliders/1.webp'} alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                         <MDBCarouselElement src={'assets/images/sliders/4.webp'} alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                         <MDBCarouselElement src={'assets/images/sliders/2.webp'} alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                         <MDBCarouselElement src={'assets/images/sliders/5.webp'} alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                         <MDBCarouselElement src={'assets/images/sliders/3.webp'} alt='...' />
                    </MDBCarouselItem>
               </MDBCarouselInner>
          </MDBCarousel>
     );
}