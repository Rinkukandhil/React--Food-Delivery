import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import NavbarComp from '../../Components/UserComponents/NavbarComp.js';
import FooterComp from '../../Components/UserComponents/FooterComp.js';
import FeedbackComp from '../../Components/UserComponents/FeedbackComp.js';


const FeedbackPage = () => {
  return (
    <>
     <Container>
      <Row>
        <Col><NavbarComp/></Col>
      </Row>
      <Row>
        <Col><FeedbackComp/></Col>
      </Row>
      <Row>
        <Col><FooterComp/></Col>
      </Row>
     </Container> 
    </>
  )
}

export default FeedbackPage;

