import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';
import Slider1 from '../../assets/images/slider/slider1.webp'
import Slider2 from '../../assets/images/slider/slider2.webp'
import Slider3 from '../../assets/images/slider/slider3.webp'
import Slider4 from '../../assets/images/slider/slider4.webp'
import Slider5 from '../../assets/images/slider/slider5.webp'
import Slider6 from '../../assets/images/slider/slider6.webp'
import Slider7 from '../../assets/images/slider/slider7.webp'

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
                    <MDBCarouselItem>
                         <MDBCarouselElement src={Slider3} alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                         <MDBCarouselElement src={Slider4} alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                         <MDBCarouselElement src={Slider5} alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                         <MDBCarouselElement src={Slider6} alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                         <MDBCarouselElement src={Slider7} alt='...' />
                    </MDBCarouselItem>
               </MDBCarouselInner>
          </MDBCarousel>
     );
}