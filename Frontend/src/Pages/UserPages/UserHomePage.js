import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import UserNavbarComp from '../../Components/UserComponents/NavbarComp.js';
import HeaderComp from '../../Components/UserComponents/HeaderComp.js';
import FooterComp from '../../Components/UserComponents/FooterComp.js';

const UserHomePage = () => {
  return (
    <>
    <Container>
        <Row>
            <Col><UserNavbarComp/></Col>
        </Row>
        <Row>
            <Col><HeaderComp/></Col>
        </Row>
        <Row>
            <Col><FooterComp/></Col>
        </Row>
    </Container>
    </>
  )
}

export default UserHomePage
