import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

import './Login.css';
function Login() {

  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");

  const handlePassChange =  (event) => {
    const value = event.target.value;
    setPassword(value);
    console.log("Password:",value);
  };
  const handleEmailChange =  (event) => {
    const value = event.target.value;
    setEmail(value);
    console.log("Email:",value);
  };

  const handleSumit = (event) =>{
    event.preventDefault();
    if(password ==='' | email ===''){
      alert("Please filled Form!");
    }
    
  else{
    setPassword('');
    setEmail('');
    
    alert("Done!");
  }
  };


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
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>


            </Container>
          </Navbar>
        </div>

      </div>
    <section>
        <div className='form-boxes'>
            <div className='form-value'>
                <form action='' onSubmit={handleSumit}>
                    <h2>Login</h2>
                    <div className='inputbox'>
                        <input type='email' value={email} onChange={handleEmailChange}></input>
                        <label>Email</label>
                    </div>
                    <div className='inputbox'>
                        <input type='password' value={password} onChange={handlePassChange}></input>
                        <label>Password</label>
                    </div>
                    <div className='forget'>
                        <label><input type='checkbox'/><a href='#'>Forgot</a></label>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register'>
                        <p><a href='#'>Register</a></p>
                    </div>
                </form>

            </div>

        </div>
    </section>
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

export default Login