import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import NavbarComp from '../../Components/UserComponents/NavbarComp.js';
import FooterComp from '../../Components/UserComponents/FooterComp.js';
import InsertUserFeedbackComp from '../../Components/UserComponents/InsertUserFeedbackComp.js';


const InsertUserFeedbackPage = () => {
  return (
    <>
     <Container>
      <Row>
        <Col><NavbarComp/></Col>
      </Row>
      <Row>
        <Col><InsertUserFeedbackComp/></Col>
      </Row>
      <Row>
        <Col><FooterComp/></Col>
      </Row>
     </Container> 
    </>
  )
}

export default InsertUserFeedbackPage;

