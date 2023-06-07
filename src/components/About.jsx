import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function About() {
  return (
    <div>
        <div className='AboutSection'>
         <h1>What are We Offering</h1>
        </div>
        <div className='d-flex justify-content-center m-4'>
        <Card style={{ width: '80vw' }}>
  <div className="d-flex">
    <Card.Body className="flex-grow-1 text-start">
      <h1>Who we Are</h1>
      <hr />
      <p style={{ whiteSpace: 'pre-line' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veniam aspernatur quas at aliquid quae delectus ipsum
        perferendis doloremque suscipit sunt. Ut expedita culpa
        repellendus delectus quia vero nulla, esse fuga
        perferendis doloremque suscipit sunt. Ut expedita culpa
        repellendus delectus quia vero nulla, esse fuga
      </p>

    </Card.Body>
    <img src="/images/team.jpg" alt="Card Image" className="w-50" style={{ width: '200px' , height: '300px' }} />
  </div>
</Card>


        </div>

    </div>
  )
}
