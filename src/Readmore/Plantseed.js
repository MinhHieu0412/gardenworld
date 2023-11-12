import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import pic1 from '../media/Readmore/plantseed1.webp';
import pic2 from '../media/Readmore/plantseed2.webp';
import pic3 from '../media/Readmore/plantseed3.webp';
import pic4 from '../media/Readmore/plantseed4.webp';
import pic5 from '../media/Readmore/plantseed5.webp';
import pic6 from '../media/Readmore/plantseed6.webp';
import pic7 from '../media/Readmore/plantseed7.webp';
function Plantseed() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <Container fluid='md'>
                <div className='content-readmore'>
                    <h1>How to Plant a Seed in a Pot</h1>
                    <img src={pic1} alt='mush' style={{ width: '50%' }}></img>
                    <p>Planting seeds in pots can be a great way to start a houseplant or indoor garden, or otherwise start seeds that you may later transplant into your garden. Starting seeds in pots does not need to be difficult, but it does require some planning and attention to ensure successful propagation of your new plant. Be sure to start the seeds carefully in a soil matrix meant for seedlings, and keep your new plants in sunny areas with proper exposure to heat and water.</p>
                    <h2>Part 1 Preparing to Plant Your Seeds</h2>
                    <p><span>step 1</span>:
                        Get your containers and soil. Whether you are starting seeds so that you can transplant them into your garden or into larger containers later, you will want to start them in seed starting trays or a large pot, These are large and deep enough so that the seeds will have room to grow, and are compartmentalized to avoid overcrowding. You will also want to select a soil made especially for growing seeds.[1]
                        Make sure your seed starting trays or pots have holes for proper drainage. If you choose to plant in a pot rather than starting in trays, a six inch (15 cm) pot should be good enough to start.
                        Look for a soil that is made especially for starting seeds, or make your own by combining 1 part each of peat moss, vermiculite, and perlite</p>
                    <img src={pic2} alt='mush' style={{ width: '50%' }}></img>
                    <p><span>step 2</span>:
                        Select your seeds. Starting plants, especially herbs and vegetables, from seeds is not always easy, so it’s important to select seeds that have a good chance of being successful. Herbs and vegetables such as lettuce are good choices to start in pots.[3]
                        Remember to check your hardiness zone to make sure you are growing a plant that will survive in your area if you plan to keep it outdoors or transplant it later on.[4]
                        Look at your local nursery or farmer’s market for seeds that have been carefully screened and selected for quality.</p>
                    <img src={pic3} alt='mush' style={{ width: '50%' }}></img>
                    <p><span>step 3</span>:
                        Get your pots ready for planting. Rinse out your pots or seed trays to remove any dust and particulates, and moisten your soil. The soil should be damp but not wet. Then, fill your pot up to half an inch (1.25 cm) from the top with your soil mixture.[5]
                        It is also sometimes recommended that a thin layer of sand be added to the bottom of the pot before soil to promote better drainage.</p>
                    <img src={pic4} alt='mush' style={{ width: '50%' }}></img>
                    <p><span>step 4</span>: Read your seed packet. Your seed packet will typically let you know how deep to plant your seeds, and how far apart each seed should be. Consult your seed packet, or otherwise talk to the seed provider, to get specific instructions regarding how deep and how far apart seeds need to be planted.
                        Your seed packet will also tell you the best time of year to start sowing your seeds, if you plan on keeping the pots outdoors.</p>
                    <h2>Part 2 Sowing Your Seeds</h2>
                    <img src={pic5} alt='mush' style={{ width: '50%' }}></img>
                    <p><span>step 1</span>:
                        Place seeds in the soil. Once you are fully prepared to start planting, place your seeds in the pot as indicated on the seed packets. Gently press in the seeds, or lightly cover them with a seed-starting mixture or mulch.
                        You can use toothpicks to tweezers to help you distribute and press in larger seeds.
                    </p>
                    <img src={pic6} alt='mush' style={{ width: '50%' }}></img>
                    <p><span>step 2</span>:
                        Moisten the seeds. Use a mister or a small watering can to moisten the seeds after planting. The top layer of seed starter or mulch should be damp, but not wet. Be sure to add small amounts of water at a time, as adding too much could displace or wash away the seeds.</p>
                    <img src={pic7} alt='mush' style={{ width: '50%' }}></img>
                    <p><span>step 3</span>:Ensure proper light and temperature. Most seeds will need a consistent temperature of between 65° and 75° Fahrenheit (18° to 24° C) and regular exposure to sunlight to properly germinate. Keep your seeds in a climate controlled environment and a sunny area where your seeds will get a full day’s worth of exposure.[7]
                        If you live in an area where sunlight or temperature is variable, you may also consider purchasing a sun lamp or heating mats to help encourage your seeds to grow.
                        Some seed starting trays come with a cover to create a warm, moist environment for the seeds. Keep this on until the seeds sprout from the soil.
                        If you don't have a cover, you can slip a plastic bag over the pot to keep moisture in until the seeds sprout. Keep the seeds out of direct sunlight while the cover is on, or they will overheat.</p>
                </div>
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



        </div>);

}

export default Plantseed;