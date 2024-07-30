import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLoginPage from './Pages/UserPages/UserLoginPage.js';
import UserHomePage from './Pages/UserPages/UserHomePage.js';
import ServicesPage from './Pages/UserPages/ServicesPage.js';
import UserLogoutPage from './Pages/UserPages/UserLogoutPage.js';
import AboutPage from './Pages/UserPages/AboutPage.js';
import ContactUsPage from './Pages/UserPages/ContactUsPage.js';
import DisplayFoodsCategoryPage from './Pages/UserPages/DisplayFoodsCategoryPage.js';
import DisplayFoodsPage from './Pages/UserPages/DisplayFoodsPage.js';
import FeedbackPage from './Pages/UserPages/FeedbackPage.js';
import InsertUserPage from './Pages/UserPages/InsertUserPage.js';
import InsertUserFeedbackPage from './Pages/UserPages/InsertUserFeedbackPage.js';
import FoodBookingPage from "./Pages/UserPages/FoodBookingPage.js";
import InsertContactPage from './Pages/UserPages/InsertContactPage.js';
import UserRegPage from './Pages/UserPages/UserRegPage.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/userlogin" element={<UserLoginPage />}></Route>
          <Route path="/userreg" element={<UserRegPage />}></Route>
          <Route path="/userhome" element={<UserHomePage />}></Route>

          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/userlogout" element={<UserLogoutPage />}></Route>
          <Route
            path="/displayfoodscategory"
            element={<DisplayFoodsCategoryPage />}
          ></Route>
          <Route path="/displayfoods" element={<DisplayFoodsPage />}></Route>
          <Route path="/insertuser" element={<InsertUserPage />}></Route>
          <Route path="/foodbooking" element={<FoodBookingPage />}></Route>
          <Route
            path="/insertuserfeedback"
            element={<InsertUserFeedbackPage />}
          ></Route>
          <Route path="/insertcontact" element={<InsertContactPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactUsPage />}></Route>
          <Route path="/feedback" element={<FeedbackPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

