import React, { useEffect } from 'react'
import "../style.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import pic2 from '../media/image/2.webp';
import pic4 from '../media/image/3.webp';
import pic5 from '../media/image/4.webp';
import pic6 from '../media/image/5.webp';
import pic7 from '../media/image/6.webp';
import pic11 from '../media/image/ideagarden2.jpg';
import pic16 from '../media/image/balconyimage1.jpg';
import pic17 from '../media/image/balconyimage2.jpg';
import pic20 from '../media/image/7.webp';
import pic21 from '../media/image/8.webp';
import pic22 from '../media/image/9.webp';
import pic23 from '../media/image/10.webp';
import pic24 from '../media/image/sunlight.webp';
import pic25 from '../media/image/photo3.jpg';


import { Link } from 'react-router-dom';
import video1 from '../media/audio/growplant.mp4';
import video2 from '../media/audio/growstrawberry.mp4';
import video3 from '../media/audio/growvegetable.mp4';


function Gardentip() {
  useEffect(() => {
    AOS.init({ duration: 2000 })

  }, [])

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
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>


          </Container>
        </Navbar>
      </div>

      <Container>
        <Row>
          <Col>
            <div className='content-text animation' data-aos="fade-down">
              <span>Lastest News and Blogs</span>
              <h2>Get Every Single Update Article, Tips & News</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Row className='content2'>

            < Col>
              <Card className='card ' >
                <Card.Img variant="top" src={pic2} />
                <Card.Body>
                  <Card.Title>How to Plant a Seed?</Card.Title>
                  <Card.Text>
                    All seeds require a few basic things to grow: sunlight, a growing medium, and water...
                  </Card.Text>
                  <Link to={`/Gardentips/Plantseed`}>
                    <Button variant="success">Read More...</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            < Col>
              <Card className='card' >
                <Card.Img variant="top" src={pic7} />
                <Card.Body>
                  <Card.Title>How to Take Care of Plants?</Card.Title>
                  <Card.Text>
                    Plants, both indoors and out, are lovely additions to any décor...
                  </Card.Text>
                  <Link to={`/Gardentips/Takecareplant`}>
                    <Button variant="success">Read More...</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            < Col>
              <Card className='card' >
                <Card.Img variant="top" src={pic6} />
                <Card.Body>
                  <Card.Title>How to Grow Mushrooms Indoors?</Card.Title>
                  <Card.Text>
                    Growing mushrooms at home is a task that any gardener ...
                  </Card.Text>
                  <Link to={`/Gardentips/Growmushroom`}>
                    <Button variant="success">Read More...</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>

        <Row>
          <Col>
            <div className='content-text animation' data-aos="fade-down">
              <span>Our Working Process</span>
              <h2>A few videos on gardening tips</h2>
            </div>
          </Col>
        </Row>
        <br />
        <div className='content2-video'>
          <Col className='video2 '>
            <video src={video1} width="100%" controls className='video'></video>
            <p>14 Clever Plant Hacks That Will Really Grow on You! </p>
          </Col>
          <Col className='video2'>
            <video src={video2} width="100%" controls className='video'></video>
            <p>Top 6 Common Indoor Plants That Can Grow In Water</p>
          </Col>
          <Col className='video2'>
            <video src={video3} width="100%" controls className='video'></video>
            <p>How To Grow Fruit & Vegetables At Home 🌱No Garden Necessary!</p>
          </Col>
        </div>
        <Row>
          <Col className='text-content2 animation' data-aos="fade-down">
            <h2>Seed, Soil, and Sun: Discovering the Many Healthful Benefits of Gardening</h2>
          </Col>
        </Row>
        <Row className='Blog' >
          <Col xs={6} md={4}>
            <Image style={{ width: '100%' }} src={pic4} rounded />
          </Col>
          <Col className='blog-content'>
            <p>Small garden ideas have lots of advantages  the main one being they're wonderfully low-maintenance.
              Small gardens, city terraces, balconies and even unloved corners can all make enticing outdoor spaces with a little care and attention. Visual tricks, good lighting, interesting planting and comfortable seating will play to the strengths of the most awkward or compact of gardens. </p>
            <p>Whether you're looking for garden ideas to create an impressive balcony garden, want to introduce some garden furniture to your patio or love to be surrounded by greenery, you'll find lots of inspiration for your small outdoor space below.</p>
          </Col>
        </Row>
        <Row className='Blog'>
          <Col className='blog-content'>
            <h2>Outdoor gardening can help your body fight disease</h2>
            <p>You're more like a plant than you may realize. Your body is capable of photosynthesis — the process where plants make their own food using sunlight.

              Your skin uses sunlight to make one of the nutrients you need: vitamin D. ResearchersTrusted Source estimate that a half hour in the sun can produce between 8,000 and 50,000 international units (IU) of vitamin D in your body, depending on how much your clothes cover and the color of your skin.</p>
          </Col>
          <Col xs={6} md={4}>
            <Image style={{ width: '100%' }} src={pic5} rounded />
          </Col>
        </Row>
        <Row className='Blog' >
          <Col xs={6} md={4}>
            <Image style={{ width: '100%' }} src={pic25} rounded />
          </Col>
          <Col className='blog-content1'>
            <h2>Gardening calms you after stressful events</h2>
            <p>Working in a garden can help you recuperate if you’ve experienced something stressful.

              In a 2011 study, researchers exposed study participants to a stressful activity. Then they asked half the group to spend time quietly reading and the other half to spend time gardening.

              When researchers tested the levels of the stress hormone cortisol in their bodies, they found that the gardening group had recovered from the stress better than the reading group. The gardening group also reported that their moods had returned to a positive state — while fewer of the readers had</p>
          </Col>
        </Row>
        <Row className='Blog'>
          <Col className='blog-content'>
            <h2>Gardening can help protect your memory as you get older</h2>
            <p>Doctors have also known for some time that exercise improves cognitive functioning in the brain. There’s some debate about whether gardening on its own is enough to affect cognitive skills like memory. But new evidence shows that gardening activities may spur growth in your brain’s memory-related nerves.

              Researchers in Korea gave 20-minute gardening activities to people being treated for dementia in an inpatient facility. After the residents had raked and planted in vegetable gardens, researchers discovered increased amounts of some brain nerve growth factors associated with memory in both males and females.</p>
          </Col>
          <Col xs={6} md={4}>
            <Image style={{ width: '100%' }} src={pic22} rounded />
          </Col>
        </Row>
        <Row>

        </Row>
        <div className='text-content2'>
          <div>
            <h2>Balcony garden ideas – 8 ways to create a lush oasis in the smallest of spaces</h2>
            <h4>Our favorite balcony garden ideas, curated tips and expert advice will inspire you to make the most of even the smallest of balcony gardens</h4>
          </div>
        </div>
        <div className='Blog2'>

          <div className='blog-content'>

            <h2>1. Use All Surfaces Of Your Balcony</h2>
            <p>So much attention in gardening is focused downwards on digging, planting and weeding flower beds and lawns, but vertical gardens can make the most of a small space.

              There's a good chance your balcony has limited square footage, so take advantage of all the surface area you have available. Vertical space can be maximized, for example, with hanging planters that hook directly onto your railing. </p>
          </div>
          <div>
            <Image style={{ width: '100%' }} src={pic16} rounded />
          </div>
        </div>
        <div className='Blog2'>

          <div className='blog-content'>
            <h2>2. Choose The Right Size Planters</h2>
            <p>When you plan a small garden, it's important to factor in the size of the planters, and resist them temptation to overcrowd the space, so you can give plants enough room to grow.

              'The container needs to be large enough to support the size plant(s) you will be growing in it,' says Jeanine Standard of Proven Winners, one of the leading plant brands in the U.S.  'The more plants you are adding to the container, the larger it needs to be in order to hold a good amount of soil that will provide the water the plant needs.'</p>
          </div>
          <div>
            <Image style={{ width: '100%' }} src={pic17} rounded />
          </div>
        </div>

        <div className='Blog2'>
          <div className='blog-content'>

            <h2>3. Choose A Type Of Garden</h2>
            <p>Before you start planting, decide what type of garden you want to have, as well as the type that'll work for your outdoor space.

              A balcony that gets lots of light is perfect for annuals like poppies or petunias or a vegetable garden, while one that's mostly in the shade can be better suited to flowers like Sweet Alyssum or boxwood shrubs.

              When you're container gardening, it's also wise to separate annuals and perennials, that way come winter, you can move your perennial planters indoors. </p>
          </div>
          <div >
            <Image style={{ width: '100%' }} src={pic20} rounded />
          </div>
        </div>
        <div className='Blog2'>

          <div className='blog-content'>
            <h2>4. Use A Plant Stand</h2>
            <p>A multi-tiered plant stand allows for plenty of pots without crowding the floor. Use all the same plant to make a cohesive statement, or vary your pots and planters for a cottage container garden feel. </p>
          </div>
          <div >
            <Image style={{ width: '100%' }} src={pic21} rounded />
          </div>
        </div>
        <div className='Blog2'>

          <div className='blog-content'>
            <h2>5. Grow A Living Wall Vegetable Garden</h2>
            <p>When you think of a vegetable garden, you may think of a sprawling suburban yard or a large plot of farmland, but a balcony wall can offer a chance to incorporate a small vegetable garden into your limited outdoor space.

              'A vertical garden makes green space accessible to the masses and as attention continues to turn to where our food comes from, we’re not hugely surprised that people are now thinking about what more their living walls can offer them,' says Matt Lindsay, general manager at Growing Revolution. 'With a fixture against an external wall or on a balcony, those in flats and other urban homes can reap the physical, mental and environmental rewards that gardening for production provides.'</p>
          </div>
          <div >
            <Image style={{ width: '100%' }} src={pic22} rounded />
          </div>

        </div>

        <div className='Blog2'>

          <div className='blog-content'>
            <h2>6. Add A Table And Chairs To Large Balcony Gardens</h2>
            <p>Balcony gardens are the perfect place to enjoy a morning coffee or an afternoon tea, so why not set up a cozy spot to perch.

              This space mixes nature with surrounding structures, in a way that is very original. The style is undulating and looks like a beautiful picture. There’s structure, but there’s a wild harmony to it that fits with the overall design ethos. </p>
          </div>
        </div>
        <div>
          <Image style={{ width: '100%' }} src={pic23} rounded />
        </div>

        <div className='Blog2'>

          <div className='blog-content'>
            <h2>7. Plant According To Sunlight</h2>
            <p>You need to consider how much sunlight your balcony gets. This may mean you have to position plants in certain places, and it will also help in deciding which plants to choose.

              If you get sunlight pretty much all day, choose varieties such as petunias or marigolds. If sun is hard to come by, primroses and foxgloves would be good options.</p>
          </div>
          <div>
            <Image style={{ width: '100%' }} src={pic24} rounded />
          </div>
        </div>
        <div className='Blog2'>

          <div className='blog-content'>
            <h2>8. Choose The Right Colors For A Small Balcony</h2>
            <p>'Choose the colors that you love, but don't go too vivid – restrict your palette to around three different colors that work well with each other,' advises Isabelle.

              If you want to make a small garden look bigger, Isabelle advises: 'Lighter color flowers really open up a space, so put your lightest flowers at the furthest point so that your eyes are drawn outwards.' </p>
          </div>
          <div >
            <Image style={{ width: '100%' }} src={pic11} rounded />
          </div>
        </div>
        <br /> <br /> <br />

       
      </Container>
      <br /> <br /> <br />
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
    </>
  )
}

export default Gardentip;