import React, { useState } from 'react';
import SouthIndianFood from "../../Images/UserImages/CategoryImages/SouthIndianFood.jpg";
import NorthIndianFood from "../../Images/UserImages/CategoryImages/NorthIndianFood.jpg";
import RajasthaniFood from "../../Images/UserImages/CategoryImages/RajasthaniFood.jpg";
import ChineseFood from "../../Images/UserImages/CategoryImages/ChineseFood.jpg";
import fooddeliverybgimg from "../../Images/UserImages/FrontImages/fooddeliverybgimg.jpg"
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash,faEye } from '@fortawesome/free-solid-svg-icons';
import {Button, Modal} from 'react-bootstrap';


const DisplayFoodsCategoryComp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // catname meands technologuy name
  const catData = [
    {"catid":"1", "catname":"South Indian Food","catdesc":"Add any text","catimg":SouthIndianFood},
    {"catid":"2", "catname":"North Indian Food","catdesc":"Add any text","catimg":NorthIndianFood},
    {"catid":"3", "catname":"Rajasthani Food","catdesc":"Add any text","catimg":RajasthaniFood},
    {"catid":"4", "catname":"Chinese Food","catdesc":"Add any text","catimg":ChineseFood},
   
  ]
  return (
    <div>
      
      <MDBContainer  className='d-flex align-items-center justify-content-center bg-image'
img src={fooddeliverybgimg} 
style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '1500px', maxHeight: '800px'}}>
        <MDBCardBody className='px-5'>
   
           <center><font color="brown" size="5"><b>Display Food Category</b></font></center>
            <form className='d-flex input-group w-auto'>
          </form><br/>

   
   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Category Name</th>
      <th scope="col">Desc</th>
      <th scope="col">Image</th>
      {/* <th scope="col">More</th> */}
    </tr>
  </thead>
  <tbody>
  {catData.map((cat, index)=>{
    return<>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{cat.catname}</td>
      <td>{cat.catdesc}</td>
      <td><img src ={cat.catimg} height="50px" width="60px" alt={cat.catimg}/></td>
      <td>
      {/* <Button size='sm' variant="primary" >Update</Button>&nbsp;&nbsp;
      <Button size='sm' variant="danger" >Delete</Button> */}
      {/* <FontAwesomeIcon  icon={faEye} />Experts list
      <FontAwesomeIcon  icon={faEdit} />&nbsp;
      <FontAwesomeIcon  icon={faTrash} /> */}
     
      </td>
    </tr>
    </>
  })}
   
  </tbody>
</table>
            {/* Modal */}
 {/* <Button variant="primary" onClick={handleShow}>
      <FontAwesomeIcon  icon={faTrash} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
      
    </MDBCardBody>
      </MDBCard>
    </MDBContainer>

      
    </div>
  )
}

export default DisplayFoodsCategoryComp;