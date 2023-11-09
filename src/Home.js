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
import Detaildata from './Detaildata.json';
import { useState } from "react";
import { Link } from "react-router-dom";
import pic2 from './media/image/2.webp';
import pic6 from './media/image/5.webp';
import pic7 from './media/image/6.webp';




const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 2500 })

    }, [])

    const productdemo = [...Detaildata]


    const [num1, setnum1] = useState(0)
    const [num2, setnum2] = useState(3)
    const handleclick0 = () => {
        setnum1(0)
        setnum2(3)
    }
    const handleclick1 = () => {
        setnum1(8)
        setnum2(11)
    }
    const handleclick2 = () => {
        setnum1(16)
        setnum2(19)
    }
    const handleclick3 = () => {
        setnum1(24)
        setnum2(27)
    }

    const [search, setsearch] = useState("")
    const searchbox = (event) => {
        setsearch(event.target.value)
    }




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
                <div className="home-second-part">
                    <div className="home-welcome">
                        <p className='greentext'>Welcome to Garden World</p>
                        <p className='bigtext boldtext'>
                            Hight Quality & Awesome <span className='greentext '>Gardening</span> Services
                        </p>
                        <p>We Sell Indoor & Outdoor Plants, Pots, Garden Supplies</p>
                        <div className="home-b-group">
                            <p className='start-button'><a href="/Product" style={{ color: 'white', textDecoration: "none" }}>Get Started</a></p>
                            <p className='read-button'><a href="/Gardentips" style={{ color: 'black', textDecoration: "none" }}>Read More</a></p>
                        </div>
                    </div>
                </div>
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
                        <p className="home3-navbar" onClick={handleclick0}>Soil fertilizers</p>
                        <p className="home3-navbar" onClick={handleclick1}>Pesticides for plants</p>
                        <p className="home3-navbar" onClick={handleclick2}>Seeds details</p>
                        <p className="home3-navbar" onClick={handleclick3}>Pots</p>
                        <p className="home3-navbar" > <a href="/Product" style={{ color: 'white', textDecoration: "none" }}>All Product</a></p>
                    </div>
                    <div className="home3-contain">
                        <div className="responsive-1100">
                            {productdemo.map((item) => {
                                return item.id > num1 && item.id <= num2 ?
                                    <Card style={{ width: '16rem' }} key={Math.floor(Math.random() * 10000)} >
                                        <Card.Img variant="top" src={require(`${item.picture}`)} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                            <Button variant="primary" className='me-3'>Add To Cart</Button>
                                            <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                        </Card.Body>

                                    </Card>

                                    : []
                            })}
                        </div>




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
                <p className="greentext boldtext greenbutton"><a href="/Gardentips" style={{ color: "green" }}>MORE TIPS & NEWS</a></p>
                <div className="home5-card-group responsive-1100">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pic2} />
                        <Card.Body>
                            <Card.Title>How to Plant a Seed?</Card.Title>
                            <Card.Text>
                                All seeds require a few basic things to grow: sunlight, a growing medium, and water...
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Link to={`/Gardentips/Plantseed`}>
                                <Button variant="success">Read More...</Button>
                            </Link>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pic7} />
                        <Card.Body>
                            <Card.Title>How to Take Care of Plants?</Card.Title>
                            <Card.Text>
                                How to Take Care of Plants? <br />
                                Plants, both indoors and out, are lovely additions to any decor...

                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Link to={`/Gardentips/Takecareplant`}>
                                <Button variant="success">Read More...</Button>
                            </Link>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pic6} />
                        <Card.Body>
                            <Card.Title>How to Grow Mushrooms Indoors?</Card.Title>
                            <Card.Text>
                                Growing mushrooms at home is a task that any gardener ...
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Link to={`/Gardentips/Growmushroom`}>
                                <Button variant="success">Read More...</Button>
                            </Link>
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


        </div >

    )
}

export default Home;
