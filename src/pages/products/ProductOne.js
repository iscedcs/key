import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ProductSlider from './ProductSlider';


export default function ProductOne() {
	document.title = setTitle();
	return (
		<section className='bg-light'>
			<Header />
			<Navbar />
			<MDBContainer>
				<MDBRow className='mt-5'>
					<MDBCol sm={12} md={6}>
						<ProductSlider />
					</MDBCol>
					<MDBCol sm={12} md={6} className='px-5'>
						<MDBTypography tag='h3' className='fw-bold'>55" 4K 43FZ1 Smart TV</MDBTypography>
						<MDBTypography tag='small' className='lead mb-3'>43FZ1-401BBY</MDBTypography>
						<MDBTypography listUnStyled className='mb-4'>
							<ul>
								<li>Phasellus iaculis neque</li>
								<li>Purus sodales ultricies</li>
								<li>Vestibulum laoreet porttitor sem</li>
								<li>Ac tristique libero volutpat at</li>
							</ul>
						</MDBTypography>
						<MDBTypography tag='h5' className='fw-bold'>Available Sizes</MDBTypography>
						<span className='fs-2 me-5 fw-bold'>45"</span>
						<span className='fs-2 me-5 fw-bold'>55"</span>
						<span className='fs-2 me-5 fw-bold'>75"</span>

						<MDBTypography tag='h5' className='fw-bold mt-3'>Description</MDBTypography>
						<MDBTypography tag='small' className='lead mb-3'>
							Television (TV), the electronic delivery of moving images and sound from a source to a receiver.
							By extending the senses of vision and hearing beyond the limits of physical distance, television
							has had a considerable influence on society.
						</MDBTypography>

					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<Footer />
		</section>
	)

	function setTitle() {
		return "Product Info";
	}
}
