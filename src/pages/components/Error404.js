import React from 'react'
import {
     MDBBtn
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';

export default function Error404() {
     return (
          <div>
               <Navbar />
               <header>
                    <div
                         id='intro-example'
                         className='text-center bg-image'
                         style={{ backgroundImage: "url('assets/images/sliders/abstract.webp')", height: '100vh', width: '100%' }}
                    >
                         <div className='mask' style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>
                              <div className='d-flex justify-content-center align-items-center h-100'>
                                   <div className='text-white'>
                                        <h1 className='mb-3'>Page Not Found</h1>
                                        <h5 className='mb-4'>Go to Homepage</h5>
                                        <MDBBtn
                                             className="m-2 bg-danger"
                                             tag="a"
                                             size="lg"
                                             href='/'
                                        >
                                             Home Page
                                        </MDBBtn>
                                   </div>
                              </div>
                         </div>
                    </div>
               </header>
          </div>
     );
}
