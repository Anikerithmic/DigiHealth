import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PatientForm from "./pages/patient-form-page";
import AdminDashboard from "./pages/admin-dashboard-page";
import AppointmentSuccess from "./components/Appointment/AppointmentSuccess";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* <Navbar /> */}
//       <PatientForm />
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/HomeDashboard";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
// import About from './components/Home/About';
import AboutPage from "./components/Home/AboutPage";
import Contact from "./components/Home/Contact";
import Patient from "./components/Patient/Patient";
// import Doctor from './components/Doctor/Doctor';
// import AdminDashboard from "./components/Admin/AdminDashboard";
import PatientDashboard from "./components/Patient/PatientDashboard";
import RegisterPatient from "./components/Patient/PatientRegistrationForm";
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import RegisterDoctor from "./components/Doctor/DoctorRegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/patient-form-page" element={<PatientForm />} />
        <Route path="/pages/admin-dashboard-page" element={<AdminDashboard />} />
        <Route path="/appointment-success" element={<AppointmentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register-patient" element={<RegisterPatient />} />
        <Route path="/register-doctor" element={<RegisterDoctor />} />
        <Route path="/patient" element={<Patient />} />
        {/* <Route path="/doctor" element={<Doctor />} /> */}

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
