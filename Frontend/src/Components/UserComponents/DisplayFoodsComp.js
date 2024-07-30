import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Dosa from "../../Images/UserImages/FoodsImages/Dosa.jpg";
import chillipaneer from "../../Images/UserImages/FoodsImages/chillipaneer.jpg";
import dalbati from "../../Images/UserImages/FoodsImages/dalbati.jpg";
import manchurian from "../../Images/UserImages/FoodsImages/manchurian.jpg";

const DisplayFoodsComp = () => {

  const foodsData = [
    {"catid":"South Indian Food","foodid":"100", "foodname":"Dosa","quantity":"2","price":"100Rs",
    "foodtype":"veg","foodimg":Dosa},
    {"catid":"North Indian Food","foodid":"101", "foodname":"Chilli Paneer","quantity":"Full Plate",
    "price":"150Rs","foodtype":"veg","foodimg":chillipaneer},
    {"catid":"Rajasthani Food","foodid":"102", "foodname":"Dal Bati","quantity":"2 plates","price":"200Rs",
    "foodtype":"veg","foodimg":dalbati},
    {"catid":"Chinese Food","foodid":"103", "foodname":"Manchuriyan","quantity":"Half Plate","price":"180Rs",
    "foodtype":"veg","foodimg":manchurian},
    // {"catid":"South Indian Food","foodid":"100", "foodname":"Dosa","quantity":"2","price":"100Rs",
    // "foodtype":"veg","foodimg":docimg4},
   
]

  return (
    <div>
 <MDBContainer  className='d-flex align-items-center justify-content-center bg-image' 
style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '1200px', maxHeight: '800px'}}>
        <MDBCardBody className='px-5'>
   
        <center><font color="brown" size="5"><b> Display Food List</b></font></center>
            <form className='d-flex input-group w-auto'>
          
          </form><br/>


          <table class="table" style={{backgroundcolor: "#8fc4b7"}}>
  <thead class="thead-dark" style={{backgroundColor:"black"}}>
  <tr>
      <th scope="col">#</th>
      <th scope="col">Category Name</th>
      <th scope="col"> ID</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Type</th>
      <th scope="col">Photo</th>

    </tr>
  </thead>
  <tbody>
  {foodsData.map((food, index)=>{
    return<>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{food.catid}</td>
      <td>{food.foodid}</td>
      <td>{food.foodname}</td>
      <td>{food.quantity}</td>
      <td>{food.price}</td>
      <td>{food.foodtype}</td>
      <td><img src ={food.foodimg} height="50px" width="60px" alt={food.foodimg}/></td> 
    </tr>
    </>
  })}
  
  </tbody>
</table>
         
    </MDBCardBody>
      </MDBCard>
    </MDBContainer>

    </div>
  )
}

export default DisplayFoodsComp;
