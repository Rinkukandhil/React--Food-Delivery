import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import NavbarComp from '../../Components/UserComponents/NavbarComp.js';
import FooterComp from '../../Components/UserComponents/FooterComp.js';
import InsertContactComp from '../../Components/UserComponents/InsertContactComp.js';


const InsertContactPage = () => {
  return (
    <>
     <Container fluid>
      <Row>
        <Col><NavbarComp/></Col>
      </Row>
      <Row>
        <Col><InsertContactComp/></Col>
      </Row>
      <Row>
        <Col><FooterComp/></Col>
      </Row>
     </Container> 
    </>
  )
}

export default InsertContactPage;

