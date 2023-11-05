import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Productadd({id,  name, title, price, picture, onaddproduct }) {

   function handleaddproduct(){
        onaddproduct(id,name,price);
   };
  return (
    <div>
        <Card style={{ width: '17rem' }} key={Math.floor(Math.random() * 10000)}>
                                <Card.Img variant="top" src={require(`${picture}`)} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        {price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3' onClick={handleaddproduct}>Add To Cart</Button>
                                    <Link to={`/Product/detail/${id}`}><Button variant="warning">See Detail</Button></Link>
                                </Card.Body>
                            </Card>
    </div>
  )
}

export default Productadd;