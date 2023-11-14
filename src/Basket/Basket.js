import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Basket.css';
import { useState } from "react";
import pic1 from '../media/picture/cartimage1.webp';
import { Link } from "react-router-dom";

const Basket = () => {

    let productIncard = localStorage.getItem("products")? JSON.parse(localStorage.getItem("products")):[]

    const saveToLocalStorage = () => {
        localStorage.setItem("products", JSON.stringify(productIncard));
    }

    const plusQuantity = (index) =>{
        productIncard[index] ={
            ...productIncard[index],
            quantity:++productIncard[index].quantity
        }
        saveToLocalStorage()
    }

    const minusQuantity = (index, quantity) =>{
        if(quantity > 1){
            productIncard[index] ={
                ...productIncard[index],
                quantity:--productIncard[index].quantity
            }
            renderCart();
            saveToLocalStorage();
        }else{
            alert("quantity min is 1!")
        }
    }

    const deleteProductInCart = (index) =>{
        productIncard.splice(index, 1)
        saveToLocalStorage();
        renderCart();
        alert("Do you want delete product?");
    }

    const renderCart = () =>{
        return productIncard.map((p, index) => <tr key={p.id}>
        <td>{p.name}</td>
        <td>{p.price}</td>
        <td>
        <button className='btn btn-variant' onClick={() => plusQuantity(index)}>+</button>
        <span>{p.quantity}</span>
        <button className='btn btn-variant' onClick={() => minusQuantity(index, p.quantity)}>-</button>
        </td>
        <td>
        <button className='btn-delete' onClick={() =>deleteProductInCart()}>Delete</button>
        </td>
        </tr>

            
        )
    }
   
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
                <Container fluid='md'>
                <Table responsive="md" className='table-cart'>
        <thead>
          <tr className='thead'>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {renderCart()}
          </tbody>
          </Table>
          <div className='content-shopping'>
          <div className='content-cart' >
            <div className='text-cart' >
            <h2 >Start Thoughtful Gifting Today!</h2>
            <h4>Want your team, partners & friends feel closer?
You are covered...</h4>
           
        </div>
        </div>
        <div className='img-cart'>
        <img src={pic1} alt='plant' className='image4'></img>
        </div>
        </div>
          </Container>
    </div>
  )
}

export default Basket;

