import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col} from "react-bootstrap";
// import {  MDBContainer, MDBInput, MDBBtn}
// from 'mdb-react-ui-kit';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import FoodDelivery from "../../Images/UserImages/LoginImages/FoodDelivery.jpg";
// import NavbarComp from '../../Components/UserComponents/NavbarComp';

const UserLoginPage = () => {
// 
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
 
  const navigate = useNavigate();
  
  const UserLoginBtn = async() =>{
     console.log(userEmail,userPassword);
    const sendData = {
                        userEmail, 
                        userPassword,
                     }
    const udata =  await axios.post("http://localhost:8001/api/v1/user/login", sendData);
    console.log(udata);

    navigate("/userhome");
};

  return (
  <Container>
    {/* <Row>
      <Col><NavbarComp/></Col>
    </Row>
   */}
    <MDBContainer fluid className="p-3 my-5 h-custom">

    <MDBRow>

      <MDBCol col='10' md='6'>
        <img src={FoodDelivery} height={500} width={500}
        class="img-fluid" alt="Sample image"  />
      </MDBCol>

      <MDBCol col='4' md='6' style={{marginTop:"3rem"}}>

        <div className="d-flex flex-row align-items-center justify-content-center">
        <h1 className="h2 fw-bold mb-0"><font color="Dark Blue"><b>User Login</b></font></h1><br/>
        
          {/* <p className="lead fw-normal mb-0 me-3">Sign in with</p><br/>
        
          <MDBBtn floating size='md' tag='a' className='me-2'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn floating size='md' tag='a'  className='me-2'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn floating size='md' tag='a'  className='me-2'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn> */}

        </div>

        {/* <div className="divider d-flex align-items-center my-4">
          <p className="text-center fw-bold mx-3 mb-0">Or</p>
        </div> */}
<br/><br/>
        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"  
            value ={userEmail} onChange={(e)=> setUserEmail(e.target.value)}/>
            
        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  
           value ={userPassword} onChange={(e)=> setUserPassword(e.target.value)}/>

        <div className="d-flex justify-content-between mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>

        <div className='text-center text-md-start mt-4 pt-2'>
          <MDBBtn className="mb-0 px-5" size='lg' onClick={()=>UserLoginBtn()}>Login</MDBBtn>
          <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/userreg" className="link-danger">Register</a></p>
        </div>

      </MDBCol>

    </MDBRow>

    <div className="d-flex flex-column flex-md-row text-center text-md-start 
    justify-content-between py-4 px-4 px-xl-5 bg-primary">

      <div className="text-white mb-3 mb-md-0">
        Copyright © 2024. All rights reserved.
      </div>

      <div>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
          <MDBIcon fab icon='facebook-f' size="md"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
          <MDBIcon fab icon='twitter' size="md"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
          <MDBIcon fab icon='google' size="md"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
          <MDBIcon fab icon='linkedin-in' size="md"/>
        </MDBBtn>

      </div>

    </div>

  </MDBContainer>
  </Container>
  );
}

export default UserLoginPage;
