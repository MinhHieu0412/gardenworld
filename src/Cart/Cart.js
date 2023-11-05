import React, { useState } from 'react'
import Datacart from './Cart.json';
import Table from 'react-bootstrap/Table';
import Cartmini from './Cartmini';
import Product from '../Product';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
function Cart() {
  /*const [carts, Setcarts] = useState(Datacart);

  const handleaddproduct = (id,name,price) =>{
    const updateposts = [...carts];
    updateposts.push({
      id: id,
      name: name,
      price: price
  
    });
    Setcarts(updateposts);
  }*/
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
        <main >
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>ID</th>
          <th> Name</th>
          <th>Hours</th>
          <th>Action</th>
          <th>Stock</th>
        </tr>
        </thead>
        
        </Table>
        </main>
        <div>
        </div>
    </div>
  )
}

export default Cart