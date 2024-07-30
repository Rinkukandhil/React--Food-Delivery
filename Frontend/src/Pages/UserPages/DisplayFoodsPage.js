import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import NavbarComp from '../../Components/UserComponents/NavbarComp.js';
import FooterComp from '../../Components/UserComponents/FooterComp.js';
import DisplayFoodsComp from '../../Components/UserComponents/DisplayFoodsComp.js';


const DoctorsPage = () => {
  return (
    <>
     <Container>
      <Row>
        <Col><NavbarComp/></Col>
      </Row>
      <Row>
        <Col><DisplayFoodsComp/></Col>
      </Row>
      <Row>
        <Col><FooterComp/></Col>
      </Row>
     </Container> 
    </>
  )
}

export default DoctorsPage;

