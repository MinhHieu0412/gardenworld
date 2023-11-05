import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import icon1 from '../src/media/image/email-icon.png';
import icon2 from '../src/media/image/phone-icon.png';
import icon3 from '../src/media/image/location-icon.png';
function Contact() {
  return (
    <div>
        <div className="head">
                    <div className="nav">
                        <Navbar className="bg-body-tertiary " fixed="top" expand="lg">
                            <Container fluid className="nav">

                                <Navbar.Brand href="/"><span className="logo">Garden World</span></Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />


                                <Navbar.Collapse id="navbarScroll" float="right">
                                    <Nav
                                        className="me-auto my-2 my-lg-0 nav2"
                                        style={{ maxHeight: '500px' }}
                                        navbarScroll

                                    >
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/Gardentips">Gardening Tips</Nav.Link>
                                        <NavDropdown title="Products" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="/Product">All Product</NavDropdown.Item>
                                            <NavDropdown.Item href="/Product/Soilfertilizers">Soil fertilizers</NavDropdown.Item>
                                            <NavDropdown.Item href="/Product/Pesticides">
                                                Pesticides for plants
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/Product/Seeds">
                                                Seeds
                                            </NavDropdown.Item>
                                            <NavDropdown title="Plant pots" id="navbarScrollingDropdown">
                                                <NavDropdown.Item href="/Product/Pots">
                                                    Pots
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/Product/Plates">
                                                    Pot plates
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/Product/Wallmounted">
                                                    Wall mounted
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/Product/Wallhanging">
                                                    Wall hanging brackets
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/Product/Pothangers">
                                                    Pot hangers
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/Product/Railing">
                                                    Railing brackets
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown title="Accessories" id="navbarScrollingDropdown">
                                                <NavDropdown.Item href="/Product/Miniature">
                                                    Miniature garden toys
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/Product/Accessories">
                                                    Gardening accessories

                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/Product/Decorative">
                                                    Decorative pebbles
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </NavDropdown>
                                        <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                                    </Nav>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>


                            </Container>
                        </Navbar>
                    </div>

                </div>
            
            <Container fluid='md'>
            <Row className='all-form'>
          <Col className='col-lg-5 infor'>
            <div className='personal-info'>
              <h3 >Contact Information</h3>
              <ul className='list-unstyle'>
                <li>
                  <figure className='figure'>
                    <img src={icon3} alt='locationicon'></img>
                  </figure>
                  <div className='details'>
                    <h5>Office Location:</h5>
                    <span>629 12th St, Modesto, CA 95354, United States</span>
                  </div>
                </li>
                <li>
                  <figure className='figure'>
                    <img src={icon2} alt=''></img>
                  </figure>
                  <div className='details'>
                    <h5>Email Us:</h5>
                  </div>
                </li>
                <li >
                  <figure className='figure'>
                    <img src={icon1} alt=''></img>
                  </figure>
                  <div className='details'>
                    <h5>Call For Help:</h5>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col className='col-lg-7 form'>
            <div className='form-box'>
              <h2 >Send us a Message</h2>
              <form className='contact-form'>
                <ul className='list-unstyle'>
                  <li>
                    <input type='text' placeholder='Your name' name='fname' id='fname'></input>
                  </li>
                  <li >
                    <input type='email' placeholder='Your email' name='fname' id='fname'></input>
                  </li>
                  <li >
                    <input type='tel' placeholder='Your phone' name='fname' id='fname'></input>
                  </li>
                  <li >
                    <input type='text' placeholder='Subject' name='fname' id='fname'></input>
                  </li>
                  <li >
                    <textarea placeholder='Message'></textarea>
                  </li>
                </ul>
                <button type='submit' className='btn-submit' id='submit'>Submit Now</button>
              </form>


            </div>

          </Col>
        </Row>
        <Row>
          <Col>
          <iframe title='address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.0967986340155!2d106.68204822792725!3d10.790767417057545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4a8afdb7b%3A0x2e46c4ada94947dd!2zMzkxQSDEkC4gTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1698933106552!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='iframe' ></iframe>
          </Col>
        </Row>
            </Container>
            <div className="footer">
        <div className="footer-logo">
          <p className="greentext boldtext bigtext">Garden World</p>
        </div>
        <div className="whitetext footer-contain">
          <div className="footer-contact">
            <p className="boldtext mediumtext">Get in touch</p>
            <p>14 Tottenham Road, N1 4EP
              London, United Kingdom</p>
            <p>00419-306-2667</p>
            <p>iamsteelthemes@gmail.com</p>
          </div>
          <div className="footer-timework">
            <p className="boldtext mediumtext">Work time</p>
            <p>Mon - Sat 8.00 - 18.00
              Sunday - OPEN</p>
            <p>Mon - Sat 8.00 - 18.00
              Sunday - OPEN</p>
            <p>Mon - Sat 8.00 - 18.00
              Sunday - OPEN</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;