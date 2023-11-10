import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigateByUrl= useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 d-flex justify-content-evenly align-items-center w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aspernatur vel corrupti temporibus voluptatibus, repudiandae veritatis eos eveniet, neque laudantium ipsam quia. Eius culpa aliquam nemo exercitationem, odit ratione alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quod libero eum doloribus inventore esse delectus ut assumenda ex error adipisci ad magni, odio voluptates cupiditate corporis expedita maxime dicta.</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right ms-2"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
        </Col>
      </Row>

      <div className="container d-flex justify-content-center align-items-center w-100 flex-column">
        <h1>Features</h1>
        <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
          
        <Card className='p-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:'250px',height:'250px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:'250px',height:'250px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:'250px',height:'250px'}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif"/>
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>

      <div className="container border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between">
        <Row>
          <Col lg={5}>
              <h3 className='text-warning mb-5'>Simple fast and Powerful</h3>
              <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae nostrum odit, illum at reiciendis.ipsum dolor sit amet consectetur .</h6>
              <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae nostrum odit,illum at reiciendis.ipsum dolor sit amet consectetur  </h6>
              <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae nostrum odit, illum at reiciendis.ipsum dolor sit amet consectetur .</h6>
          </Col>
          <Col></Col>
          <Col lg={6}>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/Cz0JljAqEms" title="Night Shift ft. Arun Pradeep, Raffi DQ | Malayalam Sketch | Money Heist | Netflix India" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default LandingPage
