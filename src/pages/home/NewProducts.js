import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MDBContainer } from 'mdb-react-ui-kit';
import Card from '../components/Card';

export default function NewProducts() {
     return (
          <>
               <MDBContainer className='pt-5'>
                    <Swiper
                         modules={[Navigation, Pagination, Scrollbar, A11y]}
                         spaceBetween={50}
                         slidesPerView={3}
                         navigation
                         pagination={{ clickable: true }}
                         breakpoints={{
                              0: {
                                   slidesPerView: 1,
                              },
                              768: {
                                   slidesPerView: 2,
                              },
                              1200: {
                                   slidesPerView: 3,
                              },
                         }}
                    >
                         <SwiperSlide>
                              <Card Name={'Paul'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card Name={'Paul'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card Name={'Paul'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card Name={'Paul'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card Name={'Paul'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card Name={'Paul'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card Name={'Paul'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card Name={'Paul'} />
                         </SwiperSlide>
                    </Swiper>
               </MDBContainer>
          </>
     )
}
