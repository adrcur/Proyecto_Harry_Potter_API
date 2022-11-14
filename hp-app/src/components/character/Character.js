import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';





const Character = ({ character = "" }) => {
  const { name, occupation ,img,nickname } = character
  return (
   
    <Col style={{padding: '1rem' }}>
    <Card bg="secondary" text="white" className="text-center " style={{ width: '12rem', height:'22rem'}}>
      <Card.Body >
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {occupation}
        </Card.Text>
        <Card.Img variant="top"  src={img  } style={{ width: '7rem'}} alt ="" />
        <Button variant="dark" className='position-absolute bottom-0 start-50 translate-middle-x '>{nickname}</Button>
      </Card.Body>
    </Card>
    </Col>
  )
  
}

export default Character