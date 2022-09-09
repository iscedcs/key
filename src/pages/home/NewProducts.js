import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import Card from '../components/Card';
import One from '../../assets/images/tvtypes/one.png'
import Two from '../../assets/images/home_theater_speaker/MIG802S.webp'
import Three from '../../assets/images/dual_tower_speaker/MID8026.webp'
import Four from '../../assets/images/drawbar_speaker/MITS048.webp'

export default function NewProducts() {
     SwiperCore.use([Autoplay])
     return (
          <>
               <MDBContainer className='pt-5'>
                    <MDBTypography tag='h3' className='text-center mb-3 text-dark' >Latest Products</MDBTypography>
                    <Swiper
                         className='pb-5'
                         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                         spaceBetween={50}
                         slidesPerView={3}
                         // navigation
                         autoplay={{ delay: 3000 }}
                         pagination={{ clickable: true }}
                         breakpoints={{
                              0: {
                                   slidesPerView: 1,
                              },
                              426: {
                                   slidesPerView: 2,
                              },
                              769: {
                                   slidesPerView: 3,
                              },
                              1200: {
                                   slidesPerView: 4,
                              },
                         }}
                    >
                         <SwiperSlide>
                              <Card name={'Smart TV'} image={One} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'Home Theater Speaker'} image={Two} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'Dual Tower Speaker'} image={Three} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'Drawbar Speaker'} image={Four} />
                         </SwiperSlide>
                    </Swiper>

               </MDBContainer>
          </>
     )
}
