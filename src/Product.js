import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect, } from 'react';
import Detaildata from './Detaildata.json'

import { Link } from 'react-router-dom';
import Productadd from './Productadd';


const Product = ({Addproduct}) => {

    useEffect(() => {
        AOS.init({ duration: 2000 })

    }, [])

    const handleaddproduct = (id, name, price) => {
            Addproduct(id, name, price);
    }

  


    return (
        <>
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
            <Container fluid='md'>
            <div className="product-main">
            
                <div className="product">
                    <div className="title">
                        <p className='mediumtext boldtext'>Soil fertilizers</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>
                        {Detaildata.map((item) => {
                            return item.id > 0 && item.id <= 8 ? <Productadd name={item.name} price={item.price} id={item.id} picture={item.picture} onaddproduct={handleaddproduct} /> : []
                        })}
                    </div>
                    <div className="title">
                        <p className='mediumtext boldtext'>Pesticides for plants</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {

                            return item.id > 8 && item.id <= 16 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []


                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Seeds</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 16 && item.id <= 24 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Pots</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 24 && item.id <= 32 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Pot plates</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 32 && item.id <= 40 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Wall mounted</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 40 && item.id <= 48 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>
                    <div className="title">
                        <p className='mediumtext boldtext'>Wall hanging brackets</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 48 && item.id <= 56 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Pot hangers</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 56 && item.id <= 64 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Railing brackets</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 64 && item.id <= 72 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Miniature Garden Toys</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 72 && item.id <= 80 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Gardening Accessories</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 80 && item.id <= 88 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Decorative Pebbbles</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 88 && item.id <= 96 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>
                </div>
                           
            </div>
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
        </>
    )
}

export default Product;
