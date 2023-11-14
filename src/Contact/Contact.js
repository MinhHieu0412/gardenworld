import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import icon1 from '../media/image/email-icon.png';
import icon2 from '../media/image/phone-icon.png';
import icon3 from '../media/image/location-icon.png';
import pic1 from '../media/picture/photo5.jpg';
import { useState } from 'react';
import { Link } from "react-router-dom";


function Contact() {
  

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  

  const handleNameChange =  (event) => {
    const value = event.target.value;
    setName(value);
    console.log("Name:",value);
  };
  const handleEmailChange =  (event) => {
    const value = event.target.value;
    setEmail(value);
    console.log("Email:",value);
  };
  const handlePhoneChange =  (event) => {
    const value = event.target.value;
    setPhone(value);
    console.log("Phone:",value);
  };
  const handleSubChange =  (event) => {
    const value = event.target.value;
    setSubject(value);
    console.log("Sub:",value);
  };
  const handleMessageChange =  (event) => {
    const value = event.target.value;
    setMessage(value);
    console.log("Message:",value);
  };

  const handleSumit = (event) =>{
    event.preventDefault();
    if(name ==='' | email ==='' | phone ==='' | subject ==='' | message ===''){
      alert("Please filled Form!");
    }
    
  else{
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    alert("Form Successfully");
  }
  };

  const [search, setsearch] = useState("")
    const searchbox = (event) => {
        setsearch(event.target.value)
    }

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
                  <Nav.Link href="/Contact">Contact Us</Nav.Link>
                  <Nav.Link href="/Aboutus">About Us</Nav.Link>
                  <Nav.Link href="/Login"><i class="bi bi-people-fill"></i>Login</Nav.Link>
                  <Nav.Link href="/Basket"><i class="bi bi-cart-fill">:</i><span id='total'>0</span></Nav.Link>
                </Nav>
                <Form className="d-flex">
                <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                            value={search}
                                            onChange={(event) => { searchbox(event) }}
                                        />
                                        <Link to={`/Product/search/${search}`}><Button variant="outline-success">Search</Button></Link>
                  
                </Form>
              </Navbar.Collapse>


            </Container>
          </Navbar>
        </div>

      </div>
      <div className='contact'>
        <div className="contact-banner">
            <img className='contact-banner-img' src={pic1} alt="banner" />
            <div className="contact-banner-cover">
              <div className='contact-text'>
                <h1>Contact Us</h1>
                </div>
            </div>

        </div>
        <div className='contact-wrapper'>For all enquiries please use the below form to contact your closest store who will get in contact shortly. Your closest store is your service point and can assist you on claims, product information, availability, delivery, prices, and more. If you are enquiring about an order, please choose the store where you made the purchase. If you are unsure which store that is, or if that store has closed, then please choose your closest store.</div>
        
    </div>
      <Container fluid='md'>
        <Row className='all-form'>
          <Col className='col-lg-5 infor'>
            <div className='personal-info'>
              <h3 >Contact Information</h3>
              <ul className='list-unstyle'>
                <li>
                  <figure className='figures'>
                    <img src={icon3} alt='locationicon'></img>
                  </figure>
                  <div className='details'>
                    <h5>Office Location:</h5>
                    <span>391A Đ. Nam Kỳ Khởi Nghĩa, Phường 14, Quận 3, Thành phố Hồ Chí Minh 700000</span>
                  </div>
                </li>
                <li>
                  <figure className='figures'>
                    <img src={icon2} alt=''></img>
                  </figure>
                  <div className='details'>
                    <h5>Email Us:</h5>
                    <a href='mailto:minhhieu114a@gmail.com'>minhhieu114a@gmail.com</a>
                  </div>
                </li>
                <li >
                  <figure className='figures'>
                    <img src={icon1} alt=''></img>
                  </figure>
                  <div className='details'>
                    <h5>Call For Help:</h5>
                    <span>+073-325-463</span>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col className='col-lg-7 form'>
            <div className='form-box'>
              <h2 >Send us a Message</h2>
              <form className='contact-form' onSubmit={handleSumit}>
                <ul className='list-unstyle'>
                  <li>
                    <input type='text' placeholder='Your name' name='fname' id='fname' value={name} onChange={handleNameChange}></input>
                  </li>
                  <li >
                    <input type='email' placeholder='Your email' name='fname' id='fname' onChange={handleEmailChange} value={email}></input>
                  </li>
                  <li >
                    <input type='tel' placeholder='Your phone' name='fname' id='fname' value={phone} onChange={handlePhoneChange}></input>
                  </li>
                  <li >
                    <input type='text' placeholder='Subject' name='fname' id='fname' onChange={handleSubChange} value={subject} ></input>
                  </li>
                  <li >
                    <textarea placeholder='Message' onChange={handleMessageChange} value={message}></textarea>
                  </li>
                </ul>
                <button type='submit' className='btn-submit' id='submit'>Submit Now</button>
              </form>


            </div>

          </Col>
        </Row>
        <Row className='content-iframe'>
          <Col sm={4} className='content-address'>
          <h3>Headquarters</h3>
          <p><i class="bi bi-geo-alt-fill"></i><b>Address:</b>   590 D. Cach Mang Thang 8, Ward 11, District 3, Ho Chi Minh City</p>
          <p><i class="bi bi-telephone-fill"></i><b>Phone:</b>   097 729 8513</p>
          <p><i class="bi bi-envelope-at-fill"></i><b>Email:</b>  minhhieu114a@gmail.com</p>
          </Col>
          <Col sm={8}>
            <iframe title='address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.0967986340155!2d106.68204822792725!3d10.790767417057545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4a8afdb7b%3A0x2e46c4ada94947dd!2zMzkxQSDEkC4gTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1698933106552!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='iframe' ></iframe>
          </Col>
        </Row>
        <Row className='content-iframe'>
          <Col sm={4} className='content-address'>
          <h3>Visit My Garden</h3>
          <p><i class="bi bi-geo-alt-fill"></i><b>Address:</b>   590 D. Cach Mang Thang 8, Ward 11, District 3, Ho Chi Minh City</p>
          <p><i class="bi bi-telephone-fill"></i><b>Phone:</b>   027387234</p>
          <p><i class="bi bi-envelope-at-fill"></i><b>Email:</b>   minhhieu114a@gmail.com</p>
          </Col>
          <Col sm={8}>
            <iframe title='address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.0967986340155!2d106.68204822792725!3d10.790767417057545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4a8afdb7b%3A0x2e46c4ada94947dd!2zMzkxQSDEkC4gTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1698933106552!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='iframe' ></iframe>
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
            <p><i class="bi bi-geo-alt"></i>391A Đ. Nam Kỳ Khởi Nghĩa, Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh</p>
            <p><i class="bi bi-telephone"></i>00419-306-2667</p>
            <p><i class="bi bi-envelope-at"></i>Fakeemail@gmail.com</p>
          </div>
          <div className="footer-timework">
            <p className="boldtext mediumtext"><i class="bi bi-alarm"></i>Work time</p>
            <p>Mon - Fri 8.00 - 18.00</p>
            <p>Friday 8.00 - 12.00</p>
            <p>Sunday - CLOSED</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;