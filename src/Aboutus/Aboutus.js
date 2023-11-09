import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './AboutUs.scss';
import image5 from '../media/picture/photo5.jpg';
import image4 from '../media/picture/photo10.jpg';
import image3 from '../media/picture/photo11.jpg';
import image2 from '../media/picture/photo13.jpg';
import image1 from '../media/picture/photo14.webp';

function AboutUs() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='about-us'>
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
      <div className='contact'>
        <div className="contact-banner">
            <img className='contact-banner-img' src={image5} alt="banner" />
            <div className="contact-banner-cover">
              <div className='contact-text'>
                <h1>About Us</h1>
                </div>
            </div>
        </div>
    </div>
        
        <div className='about-us-content'>
       
        <div className='about-us-content-col1-7'>
            <h2 >HISTORY</h2>
                <p >Garden World germinated in 2014 from a promise to make ‘green and healthy’ a click away for all Indians
Having plants in our homes or in our offices doesn’t just look good, it also boosts our mood, makes us more productive, and cleans the air around us by absorbing toxins. Most of us being urban dwellers spending their days in apartments with limited access to parks and ecological reserves, have no way of feeling close to nature and experiencing the benefits of being around plants.</p>
        </div>
        <div className='about-us-content-col1-5'>
           <img src={image4} alt='plant' className='image4'></img>
        </div>
        <div className='about-us-content-col5-7'>
            <p > Ordering a pizza is easy but ever heard of ordering a plant to your doorstep? This is where nurserylive comes in.</p>
            <p >We believe that Green is Good and are here to enable Indians to access plants in the easiest way possible – online! We are here to shape the future of gardening!</p>
            <p > A one-stop-shop for all gardening related requirements, nurserylive has more than 6000 products available online for delivery across India saving you numerous messy trips to various nurseries.</p>
            <p >We cater to all kinds of gardening needs ranging from plants, pots, tools, to curated plant-scaping solutions. Our ever-growing platform integrates nurseries and customers across India. </p>
            <p > If you’re new to being a plant parent, we’re here to make it easier. Our garden experts can provide you with guidance for detailed care every step of the way.</p>
            <p > Strongly developed with stores in new urban areas such as Durable Furnitures Phu My Hung  and Durable Furnitures Centre – the central area of District 1.</p>
            <p> Having served a network of 1 million happy plant parents, we can assure you that once you order a plant from us, you will emerge with your own home-grown veggies!</p>
            <p >Born with 2 large stores in Hanoi and Ho Chi Minh City. HCM, bold style in design and layout.</p>
                
        </div>
        <div className='about-us-content-col1-3'>
            <div className='about-us-content-portrait'>
               
            </div>
            
        </div>
        
        <div className='about-us-content-col1-3'>
            
            <img src={image2} alt='plant' className='image4'></img>
            
            
        </div>
        <div className='about-us-content-col3-7' >
		    <h3><b >Values and differences</b></h3>
            <p >We deliver 6000+ garden products across India including Agra, Ahmedabad, Ajmer, Aligarh, Ambattur, Amravati, Amritsar, Asansol, Aurangabad, Bangalore, Bareilly, Belgaum, Bhavnagar, Bhilai Nagar, Bhiwandi, Bhopal, Bhubaneswar, Bikaner, Chandigarh, Chennai, Coimbatore, Firozabad, Cuttack, Dehradun, Delhi, Dhanbad, Durgapur, Faridabad, Gaya, Ghaziabad, Gorakhpur, Gulbarga, Guntur, Gurgaon, Guwahati, Gwalior, Haora, Hubli and Dharwad, Hyderabad, Indore, Jabalpur, Jaipur, Jalandhar, Jalgaon, Jammu, Jamnagar, Jamshedpur, Jhansi, Jodhpur, Kalyan & Dombivali, Kanpur, Karnataka, Kochi, Kolapur, Kolkata, Kota, Loni, Lucknow, Ludhiana, Madurai, Maheshtala, Malegoan, Mangalore, Meerut, Mira and Bhayander, Moradabad, Mumbai, Nagpur, Nanded, Nashik, Navi Mumbai, Nellore, Noida, Patna, Pimpri & Chinchwad, Prayagraj, Pune, Raipur, Rajkot, Ranchi, Saharanpur, Salem, Sangli Miraj Kupwad, Siliguri, Solapur, Srinagar, Surat, Thane, Thiruvananthapuram, Tiruchirappalli, Tirunelveli, Trivandrum, Udaipur, Ujjain, Ulhasnagar, Vadodara, Varanasi, Vasai Virar, Vijayawada, Visakhapatnam, Warangal All Over India</p>
        </div>
        <div className='about-us-content-col1-4' >
            <div >
            <h3 >Quality and service</h3>
            <p >A garden is never finished—it is a creation that evolves from season-to-season and year-to-year. Experienced gardeners are well aware of this reality and have even come to enjoy the ephemeral nature of their outdoor spaces. If a plant outgrows its previous home, or performs less than adequately, they enjoy selecting its replacement. When the seasons change, they enjoy seeing different plants take center stage and when drought or other climatic conditions strike, they enjoy meeting the challenge.</p>
            <p >Gardeners are always tinkering, always improving, always dreaming. Once one section of their property is complete, they move onto another, eventually circling back for fine tuning. These articles are filled with ideas and inspiration for the home gardener. You'll find solutions for shady areas, container garden tips, meadow garden inspiration and much more.</p>
        </div>
        </div>
        <div className='about-us-content-col4-7'>
        <img src={image3} alt='plant' className='image4'></img>
        </div>
        <div className='about-us-content-col1-5'>
        <img src={image1} alt='plant' className='image4'></img>
        </div>
        
        <div className='about-us-content-col5-7'>
            <h3 >Garden</h3>
            <p >Plan to arrive at New York’s LaGuardia Airport by noon.  Once you arrive, meet your full-time tour manager, board your private motor coach and your Hudson Valley adventure begins.Your first stop is at the Cloisters, one certain to make life-long memories. This museum is a branch of the Metropolitan Museum of Art and was built in the 1930’s resembling architectural elements of several European medieval abbeys.  It is used to exhibit art and architecture from Medieval Europe. The Cloisters was landscaped with gardens planted according to horticultural information obtained from Medieval manuscripts and artifacts and the structure includes multiple Medieval-style cloistered herb gardens. </p>
            <h3>Garden and Community</h3>
            <p >The plantings in the Trie Cloister garden evoke the flowering meadow so often depicted in medieval works of art. The single field of herbs and flowers refers to the grounds of millefleurs tapestries, in which many species bloom simultaneously in an eternal spring. Many of the plants depicted in the Unicorn Tapestries—a masterpiece of The Met Cloisters—are cultivated in the Trie Cloister, though the plants bloom in the proper season.</p>
        </div>
    </div>
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

export default AboutUs;