import React, { useState } from 'react';
// import axios from "axios";
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


const InsertContactComp= () => {

  const [foodId, setFoodId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userDesc, setUserDesc] = useState("");
  
 
 
  const InsertData = async()=>{
     const sendData = {
      foodId,
      userName,
      userEmail,
      userMobile,
      userDesc,
      
     }
    //  const udata = await axios.post("http://localhost:8001/api/v1/user/register", sendData);
    //  console.log(udata);
    //  alert("User Registered....");
    //  setUserName("");
  }

  
  return (
    <>
    <Container>
        
       
            <MDBContainer  className='d-flex align-items-center justify-content-center bg-image' 
style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', 
marginTop:"2rem"}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5"><font color="Dark Blue"><b>Insert User Contact</b></font></h2>
          <MDBInput wrapperClass='mb-4' label='Food Name' size='lg' id='form1' type='text' 
           onChange={(e)=> setFoodId(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='User Name' size='lg' id='form1' type='text' 
           onChange={(e)=> setUserName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form2' type='text' 
           onChange={(e)=> setUserEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Mobile' size='lg' id='form3' type='text' 
           onChange={(e)=> setUserMobile(e.target.value)}/>
           <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form3' type='text' 
           onChange={(e)=> setUserDesc(e.target.value)}/>
        
         

        
          {/* <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div> */}
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={()=>InsertData()}>Submit</MDBBtn>
         
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
   
       
    </Container>
    

    </>
  )
}

export default InsertContactComp;

