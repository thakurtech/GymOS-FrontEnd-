import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UserRoutes from "../components/UserRoutes/UserRoutes";
// import AdminRoutes from "../components/AdminRoutes/AdminRoutes";
// import CaloriesTracker from "../pages/CaloriesTracker/CaloriesTracker";
// import AdminLoginForm from "../pages/AdminLoginForm/AdminLoginForm";
// import AdminLayout from "../components/AdminLayout/AdminLayout";
// import UserLayout from "../components/UserLayout/UserLayout";
// import Dashboard from "../pages/AdminDashboard/Dashboard";
// import LogoutService from "../services/LogoutService";
// import DietRecommendation from "../pages/DietRecommendation/DietRecommendationPage";
// import DietTracker from "../pages/DietTracker/DietTracker";
// import PaymentPage from "../pages/PaymentPage/PaymentPage";
// import UserDashboard from "../pages/UserDashBoard/UserDashBoard";
// import BMICalculator from "../pages/CalculateBmi/CalculateBmi";
import Main from "../pages/Main";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Schedule from "../pages/Schedule/Schedule";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home";
// import Signup from "../pages/Signup/Signup";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ------------Normal Routes------------------ */}
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
