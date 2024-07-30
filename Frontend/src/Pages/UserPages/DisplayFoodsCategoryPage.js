import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import NavbarComp from '../../Components/UserComponents/NavbarComp.js';
import FooterComp from '../../Components/UserComponents/FooterComp.js';
import DisplayFoodsCategoryComp from '../../Components/UserComponents/DisplayFoodsCategoryComp.js';

const DisplayFoodsCategoryPage = () => {
  return (
    <>
     <Container>
      <Row>
        <Col><NavbarComp/></Col>
      </Row>
      <Row>
        <Col><DisplayFoodsCategoryComp/></Col>
      </Row>
      <Row>
        <Col><FooterComp/></Col>
      </Row>
     </Container> 
    </>
  )
}

export default DisplayFoodsCategoryPage

