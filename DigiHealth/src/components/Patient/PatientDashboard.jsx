import React, { useState } from "react";
import PatientNavbar from "./PatientNavbar.jsx";
import Profile from "./Profile";
import AppointmentHistory from "./AppointmentHistory";
import Prescriptions from "./Prescriptions";
import LabReports from "./LabReports";
import BookAppointment from "./BookAppointment";

const PatientDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="patient-dashboard">
      <PatientNavbar />

      {/* Navigation of different sections */}
      <div className="flex space-x-4 p-4 bg-gray-200 rounded-lg">
        <button
          onClick={() => handleSectionChange("profile")}
          className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition duration-300"
        >
          My Profile
        </button>
        <button
          onClick={() => handleSectionChange("appointments")}
          className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition duration-300"
        >
          Appointment History
        </button>
        <button
          onClick={() => handleSectionChange("prescriptions")}
          className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition duration-300"
        >
          Prescriptions
        </button>
        <button
          onClick={() => handleSectionChange("labReports")}
          className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition duration-300"
        >
          Lab Reports
        </button>
        <button
          onClick={() => handleSectionChange("bookAppointment")}
          className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition duration-300"
        >
          Book Appointment
        </button>
      </div>

      {/* Main content area */}
      <div className="p-6">
        {activeSection === "profile" && <Profile />}
        {activeSection === "appointments" && <AppointmentHistory />}
        {activeSection === "prescriptions" && <Prescriptions />}
        {activeSection === "labReports" && <LabReports />}
        {activeSection === "bookAppointment" && <BookAppointment />}
      </div>
    </div>
  );
};

export default PatientDashboard;
