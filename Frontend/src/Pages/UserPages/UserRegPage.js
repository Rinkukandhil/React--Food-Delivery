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
  // import Dropdown from 'react-bootstrap/Dropdown';


const UserRegPage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userGender,setUserGender] = useState("");
  const [userDOB, setUserDOB] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userPincode, setUserPincode] = useState("");
  const [userPassword,setUserPassword] = useState("");

 
  const InsertData = async()=>{
     const sendData = {
      userName,
      userEmail,
      userMobile,
      userGender,
      userDOB,
      userAddress,
      userCity,
      userPincode,
      userPassword
     }
    //  const udata = await axios.post("http://localhost:8001/api/v1/user/register", sendData);
    //  console.log(udata);
    //  alert("User Registered....");
    //  setUserName("");
  }

  
  return (
    <div>
    
<MDBContainer  className='d-flex align-items-center justify-content-center bg-image' 
style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5"><font color="Dark Blue"><b>User Registration Form</b></font></h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' 
           onChange={(e)=> setUserName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' 
           onChange={(e)=> setUserEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Your Mobile' size='lg' id='form3' type='mobile' 
           onChange={(e)=> setUserMobile(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Your Gender' size='lg' id='form1' type='gender'
           onChange={(e)=> setUserGender(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Your DOB' size='lg' id='form2' type='dob' 
           onChange={(e)=> setUserDOB(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Your Address' size='lg' id='form3' type='address'
           onChange={(e)=> setUserAddress(e.target.value)}/>
          {/* <textarea name = "address" id = "address" cols = "30" rows = "10" label = "Your Address"></textarea> */}
          <MDBInput wrapperClass='mb-4' label='Your City' size='lg' id='city' type='text' 
           onChange={(e)=> setUserCity(e.target.value)}/>
  

          <MDBInput wrapperClass='mb-4' label='Your Pincode' size='lg' id='form2' type='pin' 
           onChange={(e)=> setUserPincode(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'
           onChange={(e)=> setUserPassword(e.target.value)}/>
         
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={()=>InsertData()}>Register</MDBBtn>
          <center>&nbsp;<p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Have already an account? 
          &nbsp;&nbsp;<a href="/userlogin" >Login here</a></p></center>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  )
}

export default UserRegPage;
