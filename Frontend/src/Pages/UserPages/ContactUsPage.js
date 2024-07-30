import React, { useState } from 'react';
import {Nav, Container, Navbar, NavDropdown,Modal,Button, Row, Col} from 'react-bootstrap';
import mail from '../../Images/UserImages/ContactImages/mail.jpeg';
import phone from '../../Images/UserImages/ContactImages/phone.jpg';
import map1 from '../../Images/UserImages/ContactImages/map1.png';
import location from '../../Images/UserImages/ContactImages/location.png';
import email from '../../Images/UserImages/ContactImages/email.png';
import call from '../../Images/UserImages/ContactImages/call.png';
import time from '../../Images/UserImages/ContactImages/time.png';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const ContactUs = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      {/* Start First Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            &nbsp;&nbsp;
            <img src={mail} height="30" width="30" />
            &nbsp;fooddelivery@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={phone} height="30" width="30" />
            6263420752
          </Navbar.Brand>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="primary" onClick={handleShow}>
            Get Started
          </Button>
          {/* start Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>
                <font color="red" face="Times New Roman">
                  Welcome to Online Food Delivery
                </font>
              </h1>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {/* End Modal */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* End First Navbar */}

      {/* Start Grid */}

      <Container fluid="md">
        <Row>
          <Col>
            <center>
              <h1 style={{ marginTop: "1rem" }}>Contact Us</h1>
            </center>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={8}>
            <img
              src={map1}
              height="400"
              weight="600"
              style={{ marginTop: "1rem" }}
            />
          </Col>
          <Col>
            {/* <center><h2 style = {{marginTop: "3rem"}}><b>Contact Us</b></h2></center> */}
            <img
              src={location}
              height="35"
              weight="35"
              style={{ marginTop: "1rem" }}
            />
            &nbsp;&nbsp; <b>Our Office Address</b>
            <p style={{ paddingLeft: "3rem" }}>
              Adresh Nagar Pinto Park Gwalior 
              (Madhya Pradesh)-474005
            </p>
            <img src={email} height="40" weight="40" />
            &nbsp; <b>General Enquries</b>
            <p style={{ paddingLeft: "3rem" }}>websupport@justdail.com</p>
            <img src={call} height="25" weight="25" />
            &nbsp;&nbsp;&nbsp;&nbsp; <b>Call Us</b>
            <p style={{ paddingLeft: "3rem" }}>6263420752</p>
            <img src={time} height="30" weight="30" />
            &nbsp;&nbsp;&nbsp;&nbsp; <b>Our Timings</b>
            <p style={{ paddingLeft: "3rem" }}>Mon-Sun : 10:00 AM - 07:00 PM</p>
          </Col>
        </Row>
        {/* <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row> */}
      </Container>
      {/* End Grid  */}

      {/* Start Footer  */}

      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
        style={{ marginTop: "4rem" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Madhya Pradesh -474005 (Gwalior)
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  +91 6263420752
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" /> +
                  +91 9617422316
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
      {/* End Footer */}
    </div>
  );
}

export default ContactUs
