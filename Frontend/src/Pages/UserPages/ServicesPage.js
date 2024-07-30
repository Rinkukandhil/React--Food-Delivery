import React from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import UserNavbarComp from '../../Components/UserComponents/NavbarComp.js';
// import HeaderComp from '../../Components/UserComponents/HeaderComp.js';
import FooterComp from '../../Components/UserComponents/FooterComp.js';
import doctorimg from "../../Images/UserImages/ServicesImages/doctorimg.png"


const ServicesPage = () => {
  return (
    <>
    <Container>
    <Row>
            <Col><UserNavbarComp/></Col>
        </Row>
        {/* <Row>
            <Col><HeaderComp/></Col>
        </Row> */}
        <br/><br/>
       <Row>
       <center>
       <p><font color="Brown" size="6" face="Arial"><b>What Services We Provide For You</b></font></p>
       </center>
       </Row><br/><br/> 
        <Row>
            <Col xs={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><font color="Blue" size="4"><b>Neurology</b></font></Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <br/>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><font color="Blue" size="4"><b>Darmatologist</b></font></Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
            </Col>
            <Col xs={4}><img src={doctorimg} height={400} width={300}/></Col>
            
            <Col xs={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><font color="Blue" size="4"><b>Family Medicine</b></font></Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <br/>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><font color="Blue" size="4"><b>Physiotheraphy</b></font></Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
            </Col>
        </Row>
        <br/><br/>
        <Row>
            <Col><FooterComp/></Col>
        </Row>
    </Container>
      
    </>
  )
}

export default ServicesPage
