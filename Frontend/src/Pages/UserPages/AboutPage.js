import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import NavbarComp from '../../Components/UserComponents/NavbarComp'
import FooterComp from '../../Components/UserComponents/FooterComp'
import aboutfood from "../../Images/UserImages/AboutImage/aboutfood.jpg"

const AboutPage = () => {
  return (
    <>
    <Container>
        <Row>
            <Col><NavbarComp/></Col>
        </Row>
        <Row>
        <Col>
        <h2 style = {{marginTop: "4rem",paddingLeft:"6rem"}}><font color="brown"><b>About Us</b></font></h2><br/>
        <p style = {{paddingLeft:"6rem"}}>Online food ordering is the process of ordering food, for delivery or pickup, from a 
        website or other application. The product can be either ready-to-eat food (e.g., direct from a 
        home-kitchen, restaurant, or a virtual restaurant) or food that has not been specially prepared 
        for direct consumption (e.g., vegetables direct from a farm/garden, fruits, frozen meats. 
         </p>
         </Col>
        <Col><img src = {aboutfood} height = "300" weight = "400" style = {{marginTop: "3rem",paddingLeft:"6rem"}}/></Col>  
        </Row>
        <Row>
            <Col><FooterComp/></Col>
        </Row>
    </Container>
      
    </>
  )
}

export default AboutPage
