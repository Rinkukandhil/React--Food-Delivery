import React, { useState } from 'react'
import {Nav, Container, Navbar, NavDropdown,Modal,Button} from 'react-bootstrap';
import logo from "../../Images/UserImages/NavbarImages/logo.png";
import mail from "../../Images/UserImages/NavbarImages/mail.jpeg";
import phone from '../../Images/UserImages/NavbarImages/phone.jpg';
import loginimg from '../../Images/UserImages/HeaderImages/loginimg.png';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const NavbarComp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const navigate = useNavigate();
  // const BloodLogin = () => {
  //   navigate("/userlogin");
  // }
  // const UserReg = () => {
  //   navigate("/userreg");
  // }
  return (
    <div>
    {/* Start First Navbar */}
<Navbar id="navbar1" bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#home">
      &nbsp;&nbsp;<img src={mail} height="25" width="25"/>&nbsp;
      <font size="4" >Fooddelivery@gmail.com</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={phone} height="30" width="30"/>
      <font size="4" >6263420752</font></Navbar.Brand>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      {/* <Button variant="primary" size= "small" onClick={() => BloodLogin()}>Login</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="primary"  onClick={() => UserReg()}>Sign Up</Button> */}
      
      <Button variant="primary" size='sm' onClick={handleShow}>
        Get Started
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      
        {/* start Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Food Delivery</Modal.Title>
        </Modal.Header>
        <Modal.Body><h1><font color="red" face="Times New Roman">Welcome to Online Food Delivery System</font></h1></Modal.Body>
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
   {/* <Link to = "/userlogout">Logout</Link>  */}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   {/* End First Navbar */}


  {/* Start Second Navbar */}
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <img src = {logo} height = "120" width = "140" />&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " id="hover" aria-current="page" href="/userhome">Home</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/userreg">Register</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link"  id="hover" href="/about">About</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/services">Services</a>
        </li> */}
      
        <li class="nav-item">
          <a class="nav-link" id="hover" href="/displayfoodscategory">Foods Catogory</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" id="hover" href="/displayfoods">Foods List</a>
        </li>

        {/* <li class="nav-item">
          <a class="nav-link" id="hover" href="/insertuser">Insert User</a>
        </li> */}

        <li class="nav-item">
          <a class="nav-link" id="hover" href="/insertcontact">Insert Contact</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" id="hover" href="/insertuserfeedback">User Feedback</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" id="hover" href="/foodbooking">Food Booking</a>
        </li>

       
         
        <li class="nav-item">
          <a class="nav-link" id="hover" href="/contact">Contact Us</a>
        </li>
      
      </ul>
    

      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button class="btn btn-outline-success" type="submit" onClick={() => BloodLogin()}>Blood Bank Login</button> */}

<img src = {loginimg} height = "45" width = "50"></img>
<Link to = "/userlogin">Login</Link> &nbsp;&nbsp;
<Link to = "/insertuser">Sign Up</Link> 
        {/* <Button variant="primary" size= "sm" onClick={() => BloodLogin()}>Login</Button> */}
        {/* <Button variant="primary" size='sm' onClick={() => UserReg()}>Sign Up</Button> */}
      
      
      </form>
    </div>
  </div>
</nav>
  {/* End Second Navbar */}

 

  
    </div>

    
  )
}

export default NavbarComp;






