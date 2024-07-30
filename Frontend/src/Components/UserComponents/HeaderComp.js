import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import FooddeliveryHeader1 from "../../Images/UserImages/HeaderImages/FooddeliveryHeader1.jpg";
import FooddeliveryHeader2 from "../../Images/UserImages/HeaderImages/FooddeliveryHeader2.jpg";
import FooddeliveryHeader4 from "../../Images/UserImages/HeaderImages/FooddeliveryHeader4.jpg";


const HeaderComp = () => {
  return (
    <div>
       {/* Start Carousel */}
  <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={FooddeliveryHeader1} className='d-block w-100'  height = "350" width = "600" alt='...' style={{marginTop:"2rem"}}/>
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={FooddeliveryHeader2} className='d-block w-100' height = "350" width = "600" alt='...' />
        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={FooddeliveryHeader4} className='d-block w-100' height = "350" width = "600" alt='...'  />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem> 
    </MDBCarousel>
  {/* End Carousel */}
    </div>
  )
}

export default HeaderComp
