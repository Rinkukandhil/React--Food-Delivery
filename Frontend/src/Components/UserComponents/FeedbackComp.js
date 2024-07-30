import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Col, Container, Row } from 'react-bootstrap';


const FeedbackComp = () => {

  return (
    <>
    <Container>
     
        <MDBContainer  className='d-flex align-items-center justify-content-center bg-image' 
    style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)',
    marginTop:"2rem"}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '1200px', maxHeight: '800px'}}>
        <MDBCardBody className='px-5'>   
        <center><font color="brown" size="6"><b>Feedback</b></font></center>
            <form className='d-flex input-group w-auto'>
          </form><br/>
          <table class="table" style={{backgroundcolor: "#8fc4b7"}}>
  <thead class="thead-dark" style={{backgroundColor:"black"}}>
  <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Description</th>
      <th scope="col">Rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Rinku Gurjar</td>
      <td>rinkugurjar@gmail.com</td>
      <td>6263420752</td>
      <td>Add any text</td>
      {/* <td><img src ="" height="50px" width="60px" alt=""/></td>  */}
      <td><span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     </td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Krati Asthana</td>
      <td>krati@gmail.com</td>
      <td>2345678992</td>
      <td>Add any text</td>
      {/* <td><img src ="" height="50px" width="60px" alt=""/></td>  */}
      <td><span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star "></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     </td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Ravi Tiwari</td>
      <td>ravi@gmail.com</td>
      <td>9876543210</td>
      <td>Add any text</td>
      {/* <td><img src ="" height="50px" width="60px" alt=""/></td>  */}
      <td><span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star "></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     </td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>Shourya Verma</td>
      <td>shourya@gmail.com</td>
      <td>4563452345</td>
      <td>Add any text</td>
      {/* <td><img src ="" height="50px" width="60px" alt=""/></td>  */}
      <td><span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     </td>
    </tr>

    <tr>
      <th scope="row">5</th>
      <td>Sumit Gupta</td>
      <td>sumit@gmail.com</td>
      <td>9876543210</td>
      <td>Add any text</td>
      {/* <td><img src ="" height="50px" width="60px" alt=""/></td>  */}
      <td><span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     </td>
    </tr>
  </tbody>
</table>
         
    </MDBCardBody>
      </MDBCard>
    </MDBContainer>

       
    </Container>
 

    </>
  )
}

export default FeedbackComp;
