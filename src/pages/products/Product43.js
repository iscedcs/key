import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import MID8016 from '../../assets/images/dual_tower_speaker/MID8016.webp'
import MID8026 from '../../assets/images/dual_tower_speaker/MID8026.webp'
import MID8036 from '../../assets/images/dual_tower_speaker/MID8036.webp'
import MITS098 from '../../assets/images/drawbar_speaker/MITS098.webp'
import MITS048 from '../../assets/images/drawbar_speaker/MITS048.webp'
import MIG802S from '../../assets/images/home_theater_speaker/MIG802S.webp'
import MIG803S from '../../assets/images/home_theater_speaker/MIG803S.webp'
import MIL601A from '../../assets/images/home_theater_speaker/MIL601A.webp'



export default function Product43() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	document.title = setTitle();
	return (
		<section className='bg-light'>
			<Navbar />
			<div className='w-100 p-2 bg-white'>
				<div className="container h5 text-center">
					SOUND SYSTEMS
				</div>
			</div>
			<MDBContainer className='py-5'>
				<MDBRow className='mt-3'>
					<MDBCol sm={12} md={6}>
						<>
							<Swiper
								style={{
									"--swiper-navigation-color": "#fff",
									"--swiper-pagination-color": "#fff",
								}}
								loop={true}
								spaceBetween={10}
								navigation={true}
								thumbs={{ swiper: thumbsSwiper }}
								modules={[FreeMode, Navigation, Thumbs]}
								className="mySwiper2"
							>
								<SwiperSlide>
									<img src={MIL601A} alt='...' />
								</SwiperSlide>
								<SwiperSlide>
									<img src={MITS098} alt='...' />
								</SwiperSlide>
								<SwiperSlide>
									<img src={MID8016} alt='...' />
								</SwiperSlide>
								<SwiperSlide>
									<img src={MIG803S} alt='...' />
								</SwiperSlide>
								<SwiperSlide>
									<img src={MITS048} alt='...' />
								</SwiperSlide>
								<SwiperSlide>
									<img src={MID8026} alt='...' />
								</SwiperSlide>
								<SwiperSlide>
									<img src={MID8036} alt='...' />
								</SwiperSlide>
								<SwiperSlide>
									<img src={MIG802S} alt='...' />
								</SwiperSlide>
							</Swiper>

							<Swiper
								onSwiper={setThumbsSwiper}
								loop={true}
								spaceBetween={10}
								slidesPerView={5}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[FreeMode, Navigation, Thumbs]}
								className="mySwiper"
							>
								<SwiperSlide className="thumbnail">
									<img src={MIL601A} alt='...' />
								</SwiperSlide>
								<SwiperSlide className="thumbnail">
									<img src={MITS098} alt='...' />
								</SwiperSlide>
								<SwiperSlide className="thumbnail">
									<img src={MID8016} alt='...' />
								</SwiperSlide>
								<SwiperSlide className="thumbnail">
									<img src={MIG803S} alt='...' />
								</SwiperSlide>
								<SwiperSlide className="thumbnail">
									<img src={MITS048} alt='...' />
								</SwiperSlide>
								<SwiperSlide className="thumbnail">
									<img src={MID8026} alt='...' />
								</SwiperSlide>
								<SwiperSlide className="thumbnail">
									<img src={MID8036} alt='...' />
								</SwiperSlide>
								<SwiperSlide className="thumbnail">
									<img src={MIG802S} alt='...' />
								</SwiperSlide>
							</Swiper>
						</>
					</MDBCol>
					<MDBCol sm={12} md={6} className='px-5'>
						<MDBTypography tag='h3' className='fw-bold'>SOUND SYSTEMS</MDBTypography>
						<MDBTypography tag='small' className='lead mb-3'>Specifications</MDBTypography>
						<MDBTypography listUnStyled className='mb-4'>
							<ul>
								<li>Subwoofer: 6.5 inch</li>
								<li>Satellite: 3 inch*3</li>
								<li>Output Power: 40W (Subwoofer) + 10W (speaker) * 3 </li>
								<li>With digital amplifier</li>
								<li>With Bluetooth</li>
								<li>With remote control</li>
								<li>With AUX</li>
								<li>With SD</li>
								<li>With MP3</li>
								<li>With USB</li>
								<li>With FM</li>
								<li>
									Dimension:<br />
									H340 * W200 * D280mm for Subwoofer<br />
									H330 * W100 * D60mm for Satellites
								</li>
							</ul>
						</MDBTypography>

						{/* <MDBTypography tag='h5' className='fw-bold mt-3'>Description</MDBTypography>
						<MDBTypography tag='small' className='lead mb-3'>
							Use less power and produce less heat than plasma or other LCD TVs. RGB LED: Brighter, sharper display and better contrast ratio than other LCD TVs. Edge-lit LED: Thinner format.
						</MDBTypography> */}

					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<section className=''>
				<div className='w-100'>
					<img src='assets/images/sliders/4.webp' alt='' width={'100%'} />
				</div>
			</section>
			<Footer />
		</section>
	)

	function setTitle() {
		return "MI+ - Sound Systems";
	}
}
