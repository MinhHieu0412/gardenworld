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
import { useEffect } from 'react';
import Detaildata from './Detaildata.json';
import pic1 from './media/picture/photo15.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import React from 'react'




const Product = () => {

    

    useEffect(() => {
        AOS.init({ duration: 2000 })

    }, [])
    const [search, setsearch] = useState("")
    const searchbox = (event) => {
        setsearch(event.target.value)
    }


    let productIncard = localStorage.getItem("products")? JSON.parse(localStorage.getItem("products")):[]

    const addTocart = (id) =>{
        let checkProduct = productIncard.some(value => value.id ===id)
        if(!checkProduct){
            let product = Detaildata.find(value => value.id ===id)
            productIncard.unshift({
                ...product,
                quantity: 1
            })
           saveToLocalStorage()
            calculatorTotal()
        } else{
            let getIndex = productIncard.findIndex(value => value.id === id)
            let product = productIncard.find(value => value.id === id)
            productIncard[getIndex] ={
                ...product,
                quantity: ++product.quantity
            }
            saveToLocalStorage()
            calculatorTotal()
        }
        alert("Successfully!");
    
    }

    

    const calculatorTotal = () => {
        document.getElementById('total').innerHTML = productIncard.length;
    }

   

    const saveToLocalStorage = () => {
        localStorage.setItem("products", JSON.stringify(productIncard));
    }

    
   


    /*const {shoppingCart, setShoppingCart} = useContext(CartContext);
    const handleAddtocart = (productId) => {
        alert(productId)
        let newShoppingCart = [...shoppingCart];
        const productInCart = newShoppingCart.filter((product) => product.id === productId);
        if(productInCart.length !== 0){
            newShoppingCart = newShoppingCart.filter((product) => product.id !== productId)
            newShoppingCart.push({'id':productId, 'quantity':productInCart[0].quantity + 1})
        }
        else{
            newShoppingCart.push({'id':productId, 'quantity': 1});
        }   
        console.log(newShoppingCart);
        setShoppingCart(newShoppingCart);
    } */
    

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
                                <Nav.Link href="/Contact">Contact Us</Nav.Link>
                                 <Nav.Link href="/Aboutus">About Us</Nav.Link>
                                 <Nav.Link href="/Login"><i class="bi bi-people-fill"></i>Login</Nav.Link>
                                 <Nav.Link href="/Basket"><i class="bi bi-cart-fill">:</i><span id='total'>0</span></Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
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
            <div className='contact'>
        <div className="product-all-banner">
            <img className='product-banner-img' src={pic1} alt="banner" />
        </div>
    </div>
    <div className="product-banner-cover">
              <div className='product-banner'>
                <h1>Best Garden Products</h1>
                <p>In the market for a new vacuum, set of sheets, or a gift for dad? We've got the best product choices to suit all your needs right here.</p>
                </div>
            </div>
            
            <div className="product-main">

                <div className="product">
                    <div className="title">
                        <p className='mediumtext boldtext'>Soil fertilizers</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product " data-aos='fade-up'>
                        {Detaildata.map((item) => {
                            return item.id > 0 && item.id <= 8 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>
                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>

                                </Card.Body>
                            </Card> : []
                        })}
                    </div>
                    <div className="title">
                        <p className='mediumtext boldtext'>Pesticides for plants</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {

                            return item.id > 8 && item.id <= 16 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []


                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Seeds</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 16 && item.id <= 24 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Pots</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 24 && item.id <= 32 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Pot plates</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 32 && item.id <= 40 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Wall mounted</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 40 && item.id <= 48 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>
                    <div className="title">
                        <p className='mediumtext boldtext'>Wall hanging brackets</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 48 && item.id <= 56 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Pot hangers</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 56 && item.id <= 64 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Railing brackets</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 64 && item.id <= 72 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Miniature Garden Toys</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 72 && item.id <= 80 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Gardening Accessories</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 80 && item.id <= 88 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
                    </div>

                    <div className="title">
                        <p className='mediumtext boldtext'>Decorative Pebbbles</p>
                    </div>
                    <div className="product1 aninmation responsive-1100-product" data-aos='fade-up'>

                        {Detaildata.map((item) => {
                            return item.id > 88 && item.id <= 96 ? <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={() => addTocart(item.id)}>Add To Cart</Button>

                                    <Link to={`/Product/detail/${item.id}`}><Button variant="warning" className='me-2'>See Detail</Button></Link>
                                </Card.Body>
                            </Card> : []
                        })}
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
        </>
    )
}

export default Product;
