import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';
import Slider1 from '../../assets/images/slider/slider1.png'
import Slider2 from '../../assets/images/slider/slider2.png'
// import Slider3 from '../../assets/images/slider/slider3.webp'

export default function App() {
     return (
          <MDBCarousel showControls={true} interval={3000} >
               <MDBCarouselInner>
                    <MDBCarouselItem className='active'>
                         <MDBCarouselElement src={Slider1} alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                         <MDBCarouselElement src={Slider2} alt='...' />
                    </MDBCarouselItem>
                    {/* <MDBCarouselItem>
                         <MDBCarouselElement src={Slider3} alt='...' />
                    </MDBCarouselItem> */}
               </MDBCarouselInner>
          </MDBCarousel>
     );
}