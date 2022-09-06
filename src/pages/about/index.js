import { MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import AboutIntro from './AboutIntro'
import Breadcrumb from './Breadcrumb'

export default function About() {
     return (
          <section>
               <Header />
               <Navbar title={'About'} />
               <AboutIntro />
               <Breadcrumb />

               <MDBContainer >
                    <MDBRow className='mb-3'>
                         <MDBCol lg='3' md='12' className='pe-4'>
                              <MDBTable bordered className='sticky-lg-top'>
                                   <MDBTableHead  className='bg-danger'>
                                        <tr>
                                             <th className='text-white' scope='col'>About Us</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <tr>
                                             <td><a className='text-danger' href='#profile'>Company Profile</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-danger' href='#culture'>Company Culture</a></td>
                                        </tr>
                                        <tr>
                                             <td><a className='text-danger' href='#partners'>Partners</a></td>
                                        </tr>
                                   </MDBTableBody>
                              </MDBTable>
                         </MDBCol>
                         <MDBCol lg='9' md='12'>
                              <MDBTable className='mb-4' id='profile'>
                                   <MDBTableHead  className='bg-danger'>
                                        <tr>
                                             <th className='text-white' scope='col'>Company Profile</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        Ullamco eiusmod eu ex dolore est officia sint nulla dolore duis magna ipsum. Reprehenderit et officia anim pariatur. Dolore tempor et ullamco culpa cillum aute voluptate do et consectetur adipisicing quis ex sunt. Sit velit occaecat ea aliquip sit sint. Tempor esse laboris nulla voluptate enim exercitation aliqua eu ex enim. Ex incididunt adipisicing aliqua velit in duis occaecat in.

                                        Sunt laborum officia magna elit nulla deserunt irure labore ullamco esse ut. Excepteur sunt ut ex voluptate tempor consectetur ex consequat aliquip fugiat sint. Commodo consectetur duis aliqua aliquip elit voluptate commodo est non mollit. Tempor nulla ex exercitation velit dolore magna labore labore excepteur elit qui cupidatat deserunt qui.

                                        Laborum dolor magna quis ea commodo dolor Lorem. Duis voluptate consequat dolor officia. Et ex esse dolor veniam elit Lorem officia veniam minim nostrud laborum est id mollit. Duis minim dolor laboris sint. Sunt nisi adipisicing dolore commodo sit sit ad aliquip nisi. Ipsum mollit velit ipsum esse velit reprehenderit voluptate aliquip.

                                        Et culpa est voluptate voluptate ullamco consequat id occaecat velit elit laboris. Commodo cillum do ea deserunt. Laborum ea in voluptate aute est elit esse eiusmod aliqua aliquip nostrud. Nulla esse culpa nulla sunt id voluptate cupidatat pariatur aliqua nulla amet ullamco veniam. Adipisicing sunt exercitation enim nulla tempor pariatur pariatur nostrud sunt non et adipisicing culpa. Elit dolor minim qui voluptate cupidatat id nulla occaecat.

                                        Id amet commodo officia nisi id duis amet irure sint culpa consectetur cillum dolor. Id sunt elit ex do occaecat sunt est do nostrud culpa sit mollit reprehenderit ad. Velit non aliqua elit adipisicing excepteur incididunt dolor non tempor culpa nulla elit in commodo. Dolore cillum voluptate aliquip tempor officia. Id tempor non consectetur esse culpa consequat non tempor. Adipisicing occaecat quis veniam qui.
                                   </MDBTableBody>
                              </MDBTable>
                              <MDBTable className='mb-4' id='culture'>
                                   <MDBTableHead  className='bg-danger'>
                                        <tr>
                                             <th className='text-white' scope='col'>Company Culture</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        Ullamco eiusmod eu ex dolore est officia sint nulla dolore duis magna ipsum. Reprehenderit et officia anim pariatur. Dolore tempor et ullamco culpa cillum aute voluptate do et consectetur adipisicing quis ex sunt. Sit velit occaecat ea aliquip sit sint. Tempor esse laboris nulla voluptate enim exercitation aliqua eu ex enim. Ex incididunt adipisicing aliqua velit in duis occaecat in.

                                        Sunt laborum officia magna elit nulla deserunt irure labore ullamco esse ut. Excepteur sunt ut ex voluptate tempor consectetur ex consequat aliquip fugiat sint. Commodo consectetur duis aliqua aliquip elit voluptate commodo est non mollit. Tempor nulla ex exercitation velit dolore magna labore labore excepteur elit qui cupidatat deserunt qui.

                                        Laborum dolor magna quis ea commodo dolor Lorem. Duis voluptate consequat dolor officia. Et ex esse dolor veniam elit Lorem officia veniam minim nostrud laborum est id mollit. Duis minim dolor laboris sint. Sunt nisi adipisicing dolore commodo sit sit ad aliquip nisi. Ipsum mollit velit ipsum esse velit reprehenderit voluptate aliquip.

                                        Et culpa est voluptate voluptate ullamco consequat id occaecat velit elit laboris. Commodo cillum do ea deserunt. Laborum ea in voluptate aute est elit esse eiusmod aliqua aliquip nostrud. Nulla esse culpa nulla sunt id voluptate cupidatat pariatur aliqua nulla amet ullamco veniam. Adipisicing sunt exercitation enim nulla tempor pariatur pariatur nostrud sunt non et adipisicing culpa. Elit dolor minim qui voluptate cupidatat id nulla occaecat.

                                        Id amet commodo officia nisi id duis amet irure sint culpa consectetur cillum dolor. Id sunt elit ex do occaecat sunt est do nostrud culpa sit mollit reprehenderit ad. Velit non aliqua elit adipisicing excepteur incididunt dolor non tempor culpa nulla elit in commodo. Dolore cillum voluptate aliquip tempor officia. Id tempor non consectetur esse culpa consequat non tempor. Adipisicing occaecat quis veniam qui.
                                   </MDBTableBody>
                              </MDBTable>
                              <MDBTable className='mb-4' id='partners'>
                                   <MDBTableHead className='bg-danger'>
                                        <tr>
                                             <th className='text-white' scope='col'>Partners</th>
                                        </tr>
                                   </MDBTableHead>
                                   <MDBTableBody>
                                        <MDBRow>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-01.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-02.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-03.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-04.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-05.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-06.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-07.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-08.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-09.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-10.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-11.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                             <MDBCol size='6' sm='6' md='4' lg='3' xl='2'>
                                                  <img
                                                       src='assets/images/companies/logos-12.png'
                                                       className='img-thumbnail'
                                                       alt='...'
                                                  />
                                             </MDBCol>
                                        </MDBRow>
                                   </MDBTableBody>
                              </MDBTable>
                         </MDBCol>
                    </MDBRow>
               </MDBContainer>

               <Footer />
          </section>
     )
}
