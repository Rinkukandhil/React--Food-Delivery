import React, { useState } from 'react';
import axios from "axios";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComp from '../../Components/UserComponents/NavbarComp';
import FooterComp from '../../Components/UserComponents/FooterComp';
  // import Dropdown from 'react-bootstrap/Dropdown';


const FoodBookingComp = () => {
  const [userfoodId, setUserFoodId] = useState("");
  const [userId, setUserId] = useState("");
  const [foodId, setFoodId] = useState("");
  const [qty, setQty] = useState("");
  const [date, setDate] = useState("");
  const [time,setTime] = useState("");
 
 
  const InsertData = async()=>{
     const sendData = {
      userfoodId,
      userId,
      foodId,
      qty,
      date,
      time,
     }
    //  const udata = await axios.post("http://localhost:8001/api/v1/user/register", sendData);
    //  console.log(udata);
    //  alert("User Registered....");
    //  setUserName("");
  }

  
  return (
    <>
    <Container>
       
        <Row>
            <Col><MDBContainer  className='d-flex align-items-center justify-content-center bg-image' 
style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5"><font color="Dark Blue"><b>User Food Booking </b></font></h2>
          <MDBInput wrapperClass='mb-4' label='UserFood Id' size='lg' id='form1' type='text' 
           onChange={(e)=> setUserFoodId(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='User Name' size='lg' id='form2' type='email' 
           onChange={(e)=> setUserId(e.target.value)}/>
           <MDBInput wrapperClass='mb-4' label='Food Name' size='lg' id='form2' type='email' 
           onChange={(e)=> setFoodId(e.target.value)}/>
           <MDBInput wrapperClass='mb-4' label='Quantity' size='lg' id='form2' type='email' 
           onChange={(e)=> setQty(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Date' size='lg' id='form3' type='date' 
           onChange={(e)=> setDate(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Time' size='lg' id='form1' type='text'
           onChange={(e)=> setTime(e.target.value)}/>
         

        
          {/* <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div> */}
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={()=>InsertData()}>Submit</MDBBtn>
         
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </Col>
        </Row>
     
    </Container>
    

    </>
  )
}

export default FoodBookingComp;
