import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import pic1 from '../media/Readmore/takecare1.webp';
import pic2 from '../media/Readmore/takecare2.webp';
import pic3 from '../media/Readmore/takecare3.webp';
import pic4 from '../media/Readmore/takecare4.webp';
import pic5 from '../media/Readmore/takecare5.webp';

function Takecareplant() {
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
                    <h1>How to Take Care of Plants</h1>
                    <img src={pic1} alt='mush' style={{ width: '50%' }}></img>
                    <p>Plants, both indoors and out, are lovely additions to any décor. They are generally easy to take care of and maintain, and will thrive when given proper care and treatment. Whether you're unsure of how to care for your plants or you just want to make sure you've done your homework, read on to Step One for information on properly caring for indoor and garden plants.</p>
                    <h2>Method 1: Caring for Houseplants</h2>
                    <p><span>step 1</span>:
                        Give your plants plenty of light. One of the primary concerns for house plants is making sure they get enough light. Keeping your plants on a side-table in your living room may look good, but if it is too far from a window, your plant may not last long. Look up the sun requirements for your specific plant, and move them to a location that matches those requirements. Keep in mind that windows facing the south side of your house will receive the most light, while windows facing the north side will receive the least amount of light. Basic sunshine guidelines are as follows:
                        Plants that need 'full sunlight' should be placed somewhere that gets 4-6 hours of direct light per day.
                        Plants that need 'partial sunlight' should be placed somewhere that gets 2-3 hours of direct light per day.
                        Plants that need 'shade' should be placed somewhere that gets 1 hour of direct sunlight per day.</p>
                    <img src={pic2} alt='mush' style={{ width: '50%' }}></img>
                    <p><span>step 2</span>:Water your plants regularly. Getting the proper balance of water for houseplants can be tricky: too much water, and the roots will start to rot because of poor drainage, and too little water and they'll dry out. The specific amounts of water needed will vary from plant to plant, as some like to be very wet all the time while others (like cacti and succulents) only need watering once every few weeks. However, most plants will thrive when watered 2-3 times a week. Use a spray bottle or small watering can, and add enough water each time so that the soil is moist without being muddy.
                        Stick your finger in the soil up to your 2nd knuckle to see how wet it is; if your finger comes back dry, you need to water your plant. If it is wet at all, then hold off on watering for a day or two more.
                        Always use warm water for your plants, as cold water can shock the roots and cause damage to the plant.[1]
                        Give your plants a deep watering about once a month. Place them in the sink and let the water run through them. This will help keep salts from building up on the surface of the soil.</p>
                    <img src={pic3} alt='mush' style={{ width: '50%' }}></img>
                    <p><span>step 3</span>:Fertilize your plants every few weeks. Fertilizer is a soil additive that supplies plants with nutrients. It is particularly important to fertilize indoor plants every 2-3 weeks, because there is no organic matter being added to the soil naturally like there would be outdoors. Most fertilizers come with a 3-number series, such as 10-20-10; these numbers refer to the amounts of nitrogen, phosphorus, and potassium the fertilizer contains. Because every kind of plant requires different amounts of those three minerals, the type of fertilizer you need to use will vary. However, starting with a 'middle ground' fertilizer such as a 6-12-6 or 10-10-10 mix should be good enough for most plants.
                        Spray or sprinkle the fertilizer directly onto the top of the soil, according to the package directions.
                        Liquid fertilizers can be mixed with water in your watering can. To apply, simply water your plants.
                        You don't need to mix the fertilizer into the potted soil, as it will dissolve and incorporate into the mixture on its own over time.
                    </p>
                    <img src={pic4} alt='mush' style={{ width: '50%' }}></img>
                    <p><span>step 4</span>: Clean dust off your plants. Indoor plants will become coated in a thin layer of dust over time. This dust takes away from the plants' natural beauty, and it also makes it harder for them to grow by clogging the 'pores' on the leaves. As a result, it is important to clean off any dust you notice on a regular basis. Depending on the size of your plant, there are two different general cleaning methods: wipe them off with a cloth, or rinse them in the sink under running water. If you choose to wipe down your plants, mix a small amount of warm water with a bit of dish soap or plant soap, and dip a clean rag into the mixture before carefully wiping down the leaves. If you run them under water, just turn on warm water in your sink and carefully rinse each leaf with your hands or a clean dish rag.
                        Rinsing down your plant under running water works best for smaller plants. Make sure not to get too much water into the pot itself, though.
                        There are brands of plant cleaning spray on the market that you can use to spray the dust off your plants.</p>
                    <img src={pic5} alt='mush' style={{ width: '50%' }}></img>
                    <p><span>step 5</span>:
                        PMove your plant away from air vents. Moisture levels inside of houses tends to be lower than moisture levels outside of houses. As a result, it is common for houseplants to become dried up due to a lack of humidity. Although regular watering can help prevent this, a bigger issue causing this is placing your indoor plants near air vents. Whether the heater or the air conditioner is the one working, the constant air flow will dry out the leaves of the plants and cause them to die off. To solve this problem, move them away from any vents in the room. You can also incorporate a humidifier into your décor nearby to add moisture to the air</p>
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
        </div>
    );
}

export default Takecareplant;