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
import NavbarComp from './NavbarComp';
import FooterComp from './FooterComp';
  // import Dropdown from 'react-bootstrap/Dropdown';


const InsertUserFeedbackComp = () => {
  const [feedbackId, setFeedbackId] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile,setUserMobile] = useState("");
  const [userdesc,setUserDesc] = useState("");
  const [rating,setRating] = useState("");
 
 
  const InsertData = async()=>{
     const sendData = {
      feedbackId,
      userId,
      userName,
      userEmail,
      userMobile,
      userdesc,
      rating,
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
          <h2 className="text-uppercase text-center mb-5"><font color="Dark Blue"><b>Insert User Feedback </b></font></h2>
          <MDBInput wrapperClass='mb-4' label='Feedback Id' size='lg' id='form1' type='text' 
           onChange={(e)=> setFeedbackId(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='User Name' size='lg' id='form2' type='email' 
           onChange={(e)=> setUserName(e.target.value)}/>
           <MDBInput wrapperClass='mb-4' label='User Email' size='lg' id='form2' type='email' 
           onChange={(e)=> setUserEmail(e.target.value)}/>
           <MDBInput wrapperClass='mb-4' label='User Mobile' size='lg' id='form2' type='email' 
           onChange={(e)=> setUserMobile(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form3' type='date' 
           onChange={(e)=> setUserDesc(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Rating' size='lg' id='form1' type='radio'
           onChange={(e)=> setRating(e.target.value)}/>
         

        
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

export default InsertUserFeedbackComp;
