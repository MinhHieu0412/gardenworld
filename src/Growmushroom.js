import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import pic1 from './media/Readmore/growmushroom1.jpg';
import pic2 from './media/Readmore/growmushroom2.jpg';
import pic3 from './media/Readmore/growmushroom3.jpg';
import pic4 from './media/Readmore/growmushroom4.jpg';
import pic5 from './media/Readmore/growmushroom5.jpg';
import pic6 from './media/Readmore/growmushroom6.jpg';
function Growmushroom() {
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
        <h1>How to Grow Mushrooms Indoors</h1>
    <img src={pic1} alt='mush' style={{width:'50%'}}></img>
     <p>Growing mushrooms at home is a task that any gardener interested in growing their own food should attempt. Mushrooms are a healthy addition to any diet, as they are low in calories and fat, high in fiber, and contain high amounts of potassium and selenium. Mushrooms are best grown indoors where the temperature and light conditions can be more readily managed. Learning how to grow mushrooms indoors is a matter of managing their growing conditions carefully.</p>
     <h2>Part 1: Using Basic Growing Methods</h2>
     <p><span>step 1</span>: Decide what type of mushroom you want to grow. The three types of mushrooms that are easiest to grow at home are oyster, white button, and Shiitake. The method for growing each mushroom is similar, but the ideal growing substrate differs.[1]
Oyster mushrooms grow best in straw or coffee grounds (described later); Shiitakes grow best on hardwood sawdust; button mushrooms grow best in composted manure. These different substrates reflect the different nutritional needs of each species; however, each of these three species can be grown readily enough in sawdust or straw. Make sure that if you use sawdust it is from untreated wood.
Choosing a type of mushroom to grow is a matter of taste. You should grow the type you most want to eat.</p>
<img src={pic2} alt='mush' style={{width:'50%'}}></img>
<p><span>step 2</span>:Purchase mushroom spawn. Mushroom spawn is sawdust permeated with mushroom mycelia — essentially the root structure of the fungus. It is used much like plant seedlings to facilitate growth.[2]
You can purchase high-quality mushroom spawn from several online retailers, some gardening supply stores, or some specialty organic living stores.
Make sure to buy spawn rather than spores. Some retailers will also sell spores, which are more akin to the seeds of plants (rather than seedlings). Growing mushrooms from spores takes more time and practice, and is best suited for a seasoned mushroom grower.</p>
<img src={pic3} alt='mush' style={{width:'50%'}}></img>
<p><span>step 3</span>:Sterilize the growing substrate. If you are growing mushrooms in straw or sawdust, it will be necessary to sterilize these growing mediums before inoculating with the spawn. This is done to kill off any micro-organisms that could compete with the mycelia.[3]
To sterilize the substrate, place it in a microwave-safe bowl and add enough water to make the straw or sawdust damp. Place the bowl in the microwave and heat on high for two minutes, or until the water has boiled off.
This kills off any microorganisms, leaving the substrate safe to receive the mushroom mycelia. You may need to work in batches in order to sterilize all of the straw or sawdust.</p>
<img src={pic4} alt='mush' style={{width:'50%'}}></img>
<p><span>step 4</span>: Heat the substrate so that the mycelia will spread. The mycelia in your mushroom spawn need to spread into the substrate thoroughly before producing mushrooms. A warm temperature encourages this growth.[4]
After choosing the substrate best suited to your mushroom species, place a few handfuls of it into a baking pan. A shallow pan with a large surface area will provide the most room for your mushrooms to grow.
Mix the spawn into the substrate with a sterilized utensil. Place the baking pan on a heating pad set to 70°F (21°C). This is the ideal temperature to encourage growth. You can also try simply placing the pan in a warm area of your home.
Leave the setup in a dark environment, such as a cabinet, for about three weeks. This will allow the mushroom mycelia to permeate the substrate.</p>
<img src={pic5} alt='mush' style={{width:'50%'}}></img>
<p><span>step 5</span>: 
Place the substrate into the proper environment. After two weeks, check the substrate to see if it has been fully colonized — the substrate should be entirely covered with what looks like white fuzz. This may take between two to four weeks. If the substrate is colonized, you can move the pan into an environment that is dark and cool (about 55°F or 13°C). A basement usually works well for this, but a cabinet or drawer in an unheated room will work in winter.
If you notice any dark spots of green or brown (like what you might see on moldy bread), remove these areas from your substrate and throw them out.
Cover the substrate with a handful of potting soil and spray the entire mixture with enough water to dampen it thoroughly. You can place a damp towel over the pan to prevent moisture loss if desired.
Consider placing a low heat lamp near the pan. This simulates the sun, which can help the mushrooms orient themselves and grow "up," making them easier to harvest.
The mix should be kept moist and cool as the mushrooms grow. Check it periodically and spray it with water as necessary.
The mushrooms will prefer a cooler environment, but the key is just not to let them get too hot. If the environment is below 70°F (21°C), then your mushrooms should grow fine.</p>
<img src={pic6} alt='mush' style={{width:'50%'}}></img>
<p><span>step 6</span>: Harvest your mushrooms when they are fully grown. In about three weeks, you should see small mushrooms appearing. Continue to keep their environment moist, cool, and dark to encourage their growth.
When the mushroom caps separate fully from their stems, they are ready to harvest. You can pluck the mushrooms out with your fingers or use a sharp knife to cut the mushrooms at the base of the stem.
It is best to rinse the mushrooms before cooking or eating. You can store harvested mushrooms in a paper bag in the refrigerator for up to a week.</p>
</div>
</Container>
 </div>
  );
}

export default Growmushroom;