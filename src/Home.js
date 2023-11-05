import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import img1 from './media/picture/2.avif'
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "./media/picture/photo-1523348837708-15d4a09cfac2.webp";
import pic2 from "./media/picture/photo-1466692476868-aef1dfb1e735.webp";
import pic3 from "./media/picture/photo-1560331470-4737e8408873.webp";



const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 2500 })

    }, [])

    return (
        <div>
            <div className="home">
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
                                        <Nav.Link href="/Cart">Cart</Nav.Link>
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
                <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-live"
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-live"
          src={pic3}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <div className="home-second-part">
                    <div className="home-welcome">
                        <p className='greentext'>Welcome to Garden World</p>
                        <p className='bigtext boldtext'>
                            Hight Quality & Awesome <span className='greentext '>Gardening</span> Services
                        </p>
                        <p>We Sell Indoor & Outdoor Plants, Pots, Garden Supplies</p>
                        <div className="home-b-group">
                            <p className='start-button'>Get Started</p>
                            <p className='read-button'>Read More</p>
                        </div>
                    </div>
                </div>
    </Carousel>
                
            </div>

            <div className="home2 " >
                <div className="home2-head animation" data-aos='flip-right' >

                    <p className=' bigtext bigtext'>Welcome to <span className="greentext">Garden World</span> </p>

                    <p className="mediumtext">We provide ongoing property maintenance which includes lawn mowing, fertilizing, spring and fall cleanups, de-thatching, aerating, seeding, mulching, edging, herbicide application, plant health care, snow plowing, pruning, and tree care and removal.

                        We also provide the design and installation of many landscape construction projects including walkways, steps, retaining walls, patios, veneer stone,planting, trans-planting, drainage systems, lawn renovation and installation, paver driveways, cobblestone edging, and excavation.</p>
                </div>
            </div>
            <div className="home3" >
                <div className="home3-animation animation" data-aos='fade-right'>
                    <div className="home3-head">

                        <p className="boldtext bigtext whitetext">Our Product</p>
                    </div>
                    <div className="home3-nav whitetext">
                        <p className="home3-navbar">Soil fertilizers</p>
                        <p className="home3-navbar">Pesticides for plants</p>
                        <p className="home3-navbar">Seeds details</p>
                        <p className="home3-navbar">Pots</p>
                        <p className="home3-navbar">All Product</p>
                    </div>
                    <div className="home3-contain">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>


                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>


                    </div>
                </div>
            </div>

            <div className="home4">
                <div className="home4-contain animation" data-aos='zoom-in'>
                    <div className="home4-head">
                        <p className=' bigtext boldtext'>Why Choosing <span className="greentext">Garden World</span> </p>
                    </div>
                    <div className="home4-reason-contain">
                        <div className="home4-reason">
                            <p className="boldtext mediumtext">Over 30 Years of Expeirence</p>
                            <p className="graytext">We have a range of water specialists who can help you along the way. Whether you want a massive fountain or just a small water feature, we can design the right solution for you.</p>
                        </div>

                        <div className="home4-reason">
                            <p className="boldtext mediumtext">True Aquatic Landspacing Specialists</p>
                            <p className="graytext">We have a range of water specialists who can help you along the way. Whether you want a massive fountain or just a small water feature, we can design the right solution for you.</p>
                        </div>

                        <div className="home4-reason">
                            <p className="boldtext mediumtext">Licensed, Bonded, Insured</p>
                            <p className="graytext" >We have a range of water specialists who can help you along the way. Whether you want a massive fountain or just a small water feature, we can design the right solution for you.</p>
                        </div>

                        <div className="home4-reason">
                            <p className="boldtext mediumtext">Honest and Dependable
                            </p>
                            <p className="graytext">Honesty is the only policy and we strive to complete all projects with integrity, not just with our clients. With thousands of successful projects under our belt, we are the most trusted Landsacpe companies in US</p>
                        </div>


                        <div className="home4-reason">
                            <p className="boldtext mediumtext">Award Wining Company Since 1986
                            </p>
                            <p className="graytext">We have a range of water specialists who can help you along the way. Whether you want a massive fountain or just a small water feature, we can design the right solution for you.
                            </p>
                        </div>
                        <div className="home4-reason">
                            <p className="boldtext mediumtext">1000+ Sucessful Projects</p>
                            <p className="graytext">We have a range of water specialists who can help you along the way. Whether you want a massive fountain or just a small water feature, we can design the right solution for you.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="home5 animation" data-aos='fade-right'>
                <p className=' bigtext boldtext'>Gardening <span className="greentext">Tips </span>and <span className="greentext"> News</span></p>
                <p className="greentext boldtext greenbutton">MORE TIPS & NEWS</p>
                <div className="home5-card-group">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

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


        </div >

    )
}

export default Home;
