// import React, { useState, useEffect } from 'react';
// import DoctorNavbar from './DoctorNavbar.jsx';

// //import Profile from './Profile';
// //import AppointmentHistory from './AppointmentHistory';
// //import PatientList from './PatientList';
// import Prescriptions from './Prescriptions.jsx';
// import LabReports from './LabReports';

// const DoctorDashboard = ({ username }) => {
//   const [activeSection, setActiveSection] = useState('dashboard');
//   const [doctorData, setDoctorData] = useState(null);

//   useEffect(() => {
//     setDoctorData({
//       name: 'Dr. Strange',
//       age: 45,
//       specialty: 'Cardiology',
//       contact: '+123456789',
//       email: 'strange@gmail.com',
//     });
//   }, []);

//   const handleSectionChange = (section) => setActiveSection(section);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <DoctorNavbar />

//       <div className="container mx-auto px-4 py-8">
//         <div className="flex gap-6">
//           {/* Sidebar Navigation */}
//           <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-bold mb-4">Dashboard</h2>
//             <nav className="space-y-2">
//               {['profile', 'appointments', 'patients', 'prescriptions', 'labReports'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => handleSectionChange(section)}
//                   className={`block w-full text-left py-2 px-4 rounded-lg ${
//                     activeSection === section
//                       ? 'bg-blue-500 text-white'
//                       : 'text-gray-700 hover:bg-gray-100'
//                   }`}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Main Content */}
//           <div className="w-3/4 bg-white p-6 rounded-lg shadow-md">
//             {activeSection === 'profile' && doctorData && <Profile doctorData={doctorData} />}
//             {activeSection === 'appointments' && <AppointmentHistory />}
//             {activeSection === 'patients' && <PatientList />}
//             {activeSection === 'prescriptions' && <Prescriptions />}
//             {activeSection === 'labReports' && <LabReports />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Profile Section
// const Profile = ({ doctorData }) => {
//   const [avatar, setAvatar] = useState(null);

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setAvatar(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="text-gray-800">
//       <h2 className="text-2xl font-bold mb-6">My Profile</h2>
//       <div className="flex gap-6">
//         {/* Avatar Section */}
//         <div className="flex flex-col items-center">
//           <img
//             src={avatar || '/default-avatar.png'}
//             alt="Avatar"
//             className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover"
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleAvatarChange}
//             className="mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//           />
//         </div>
//         {/* Doctor Information */}
//         <div>
//           <p className="text-lg font-semibold">Name: {doctorData.name}</p>
//           <p>Age: {doctorData.age}</p>
//           <p>Specialty: {doctorData.specialty}</p>
//           <p>Contact: {doctorData.contact}</p>
//           <p>Email: {doctorData.email}</p>
//           <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
//             Edit Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Appointment History Section
// const AppointmentHistory = () => {
//   const appointments = [
//     { date: '2024-12-01', patient: 'Patient X', reason: 'Checkup' },
//     { date: '2024-11-20', patient: 'Patient Y', reason: 'Follow-up' },
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Appointment History</h2>
//       <ul className="space-y-4">
//         {appointments.map((appointment, index) => (
//           <li key={index} className="p-4 border rounded-lg bg-gray-50">
//             <p><strong>Date:</strong> {appointment.date}</p>
//             <p><strong>Patient:</strong> {appointment.patient}</p>
//             <p><strong>Reason:</strong> {appointment.reason}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Patients Section
// const PatientList = () => {
//   const patients = [
//     { name: 'Patient X', age: 30, contact: '+123456789', email: 'patientx@gmail.com' },
//     { name: 'Patient Y', age: 28, contact: '+123456788', email: 'patienty@gmail.com' },
//     { name: 'Patient Z', age: 25, contact: '+789456123', email: 'patientz@gmail.com' },
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Patients</h2>
//       <table className="w-full text-left border-collapse border border-gray-200">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2 border border-gray-200">Name</th>
//             <th className="p-2 border border-gray-200">Age</th>
//             <th className="p-2 border border-gray-200">Contact</th>
//             <th className="p-2 border border-gray-200">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((patient, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="p-2 border border-gray-200">{patient.name}</td>
//               <td className="p-2 border border-gray-200">{patient.age}</td>
//               <td className="p-2 border border-gray-200">{patient.contact}</td>
//               <td className="p-2 border border-gray-200">{patient.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Similar updates to Prescriptions and LabReports sections...

// export default DoctorDashboard;

// import React, { useState, useEffect } from "react";
// import DoctorNavbar from "./DoctorNavbar.jsx";
// import Prescriptions from "./Prescriptions.jsx";
// import LabReports from "./LabReports.jsx";

// const DoctorDashboard = ({ username }) => {
//   const [activeSection, setActiveSection] = useState("dashboard");
//   const [doctorData, setDoctorData] = useState(null);

//   useEffect(() => {
//     setDoctorData({
//       name: "Dr. Strange",
//       age: 45,
//       specialty: "Cardiology",
//       contact: "+123456789",
//       email: "strange@gmail.com",
//     });
//   }, []);

//   const handleSectionChange = (section) => setActiveSection(section);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <DoctorNavbar />

//       <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
//         {/* Sidebar Navigation */}
//         <aside className="bg-white rounded-lg shadow-md p-4 sticky top-6 h-max">
//           <h2 className="text-xl font-semibold mb-4">Doctor Dashboard</h2>
//           <nav className="space-y-2">
//             {[
//               "profile",
//               "appointments",
//               "patients",
//               "prescriptions",
//               "labReports",
//             ].map((section) => (
//               <button
//                 key={section}
//                 onClick={() => handleSectionChange(section)}
//                 className={`block w-full text-left py-2 px-4 text-black bg-white rounded-lg transition ${
//                   activeSection === section
//                     ? "bg-white text-black font-bold"
//                     : "text-black hover:bg-gray-100"
//                 }`}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </button>
//             ))}
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="col-span-3 bg-white rounded-lg shadow-md p-6">
//           {activeSection === "profile" && doctorData && (
//             <Profile doctorData={doctorData} />
//           )}
//           {activeSection === "appointments" && <AppointmentHistory />}
//           {activeSection === "patients" && <PatientList />}
//           {activeSection === "prescriptions" && <Prescriptions />}
//           {activeSection === "labReports" && <LabReports />}
//         </main>
//       </div>
//     </div>
//   );
// };

// // Profile Section
// const Profile = ({ doctorData }) => {
//   const [avatar, setAvatar] = useState(null);

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setAvatar(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">My Profile</h2>
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Avatar Section */}
//         <div className="flex flex-col items-center">
//           <img
//             src={avatar || "/default-avatar.png"}
//             alt="Avatar"
//             className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover"
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleAvatarChange}
//             className="mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//           />
//         </div>

//         {/* Doctor Information */}
//         <div>
//           <p className="text-lg font-semibold">Name: {doctorData.name}</p>
//           <p>Age: {doctorData.age}</p>
//           <p>Specialty: {doctorData.specialty}</p>
//           <p>Contact: {doctorData.contact}</p>
//           <p>Email: {doctorData.email}</p>
//           <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
//             Edit Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Appointment History Section
// const AppointmentHistory = () => {
//   const appointments = [
//     { date: "2024-12-01", patient: "Patient X", reason: "Checkup" },
//     { date: "2024-11-20", patient: "Patient Y", reason: "Follow-up" },
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Appointment History</h2>
//       <ul className="space-y-4">
//         {appointments.map((appointment, index) => (
//           <li key={index} className="p-4 border rounded-lg bg-gray-50">
//             <p>
//               <strong>Date:</strong> {appointment.date}
//             </p>
//             <p>
//               <strong>Patient:</strong> {appointment.patient}
//             </p>
//             <p>
//               <strong>Reason:</strong> {appointment.reason}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Patients Section
// const PatientList = () => {
//   const patients = [
//     {
//       name: "Patient X",
//       age: 30,
//       contact: "+123456789",
//       email: "patientx@gmail.com",
//     },
//     {
//       name: "Patient Y",
//       age: 28,
//       contact: "+123456788",
//       email: "patienty@gmail.com",
//     },
//     {
//       name: "Patient Z",
//       age: 25,
//       contact: "+789456123",
//       email: "patientz@gmail.com",
//     },
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Patients</h2>
//       <table className="w-full text-left border-collapse border border-gray-200">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2 border border-gray-200">Name</th>
//             <th className="p-2 border border-gray-200">Age</th>
//             <th className="p-2 border border-gray-200">Contact</th>
//             <th className="p-2 border border-gray-200">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((patient, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="p-2 border border-gray-200">{patient.name}</td>
//               <td className="p-2 border border-gray-200">{patient.age}</td>
//               <td className="p-2 border border-gray-200">{patient.contact}</td>
//               <td className="p-2 border border-gray-200">{patient.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DoctorDashboard;

import React, { useState, useEffect } from "react";
import DoctorNavbar from "./DoctorNavbar.jsx";
import Prescriptions from "./Prescriptions.jsx";
import LabReports from "./LabReports.jsx";
import Modal from "../Patient/Modal.jsx"; // Import the Modal component

const DoctorDashboard = ({ username }) => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [doctorData, setDoctorData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const doctorId = localStorage.getItem("doctorId");

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/doctor/${doctorId}`
        );
        const data = await response.json();
        setDoctorData(data);
        setFormData(data); // Initialize form data with doctor data
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
  }, [doctorId]);

  const handleSectionChange = (section) => setActiveSection(section);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:8080/api/doctor/${doctorId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setDoctorData(formData); // Update the doctor state with new data
      setIsEditing(false); // Close the modal
    } catch (error) {
      console.error("Error updating doctor data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DoctorNavbar />

      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="bg-white rounded-lg shadow-md p-4 sticky top-6 h-max">
          <h2 className="text-xl font-semibold mb-4">Doctor Dashboard</h2>
          <nav className="space-y-2">
            {[
              "profile",
              "appointments",
              "patients",
              "prescriptions",
              "labReports",
            ].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionChange(section)}
                className={`block w-full text-left py-2 px-4 text-black bg-white rounded-lg transition ${
                  activeSection === section
                    ? "bg-teal-500 text-teal-700 font-bold"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </aside>

        <main className="col-span-3 bg-white rounded-lg shadow-md p-6">
          {activeSection === "profile" && doctorData && (
            <Profile
              doctorData={doctorData}
              onEditProfile={handleEditProfile}
            />
          )}
          {activeSection === "appointments" && <AppointmentHistory />}
          {activeSection === "patients" && <PatientList />}
          {activeSection === "prescriptions" && <Prescriptions />}
          {activeSection === "labReports" && <LabReports />}
        </main>
      </div>

      <Modal isOpen={isEditing} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border rounded p-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border rounded p-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded p-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Contact:
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="border rounded p-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Specialty:
            <input
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              required
              className="border rounded p-2 w-full"
            />
          </label>
          <button
            type="submit"
            className="mt-4 px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition duration-300"
          >
            Update
          </button>
        </form>
      </Modal>
    </div>
  );
};

// Profile Section
const Profile = ({ doctorData, onEditProfile }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <p className="text-lg font-semibold">
            Name: {doctorData.firstName} {doctorData.lastName}
          </p>
          {/* <p>Age: {doctorData.age}</p> */}
          <p>Specialty: {doctorData.specialty}</p>
          <p>Contact: {doctorData.contact}</p>
          <p>Email: {doctorData.email}</p>
          <button
            className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
            onClick={onEditProfile}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

// Appointment History Section
const AppointmentHistory = () => {
  const appointments = [
    { date: "2024-12-01", patient: "Patient X", reason: "Checkup" },
    { date: "2024-11-20", patient: "Patient Y", reason: "Follow-up" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Appointment History</h2>
      <ul className="space-y-4">
        {appointments.map((appointment, index) => (
          <li key={index} className="p-4 border rounded-lg bg-gray-50">
            <p>
              <strong>Date:</strong> {appointment.date}
            </p>
            <p>
              <strong>Patient:</strong> {appointment.patient}
            </p>
            <p>
              <strong>Reason:</strong> {appointment.reason}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Patients Section
const PatientList = () => {
  const patients = [
    {
      name: "Patient X",
      age: 30,
      contact: "+123456789",
      email: "patientx@gmail.com",
    },
    {
      name: "Patient Y",
      age: 28,
      contact: "+123456788",
      email: "patienty@gmail.com",
    },
    {
      name: "Patient Z",
      age: 25,
      contact: "+789456123",
      email: "patientz@gmail.com",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Patients</h2>
      <table className="w-full text-left border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border border-gray-200">Name</th>
            <th className="p-2 border border-gray-200">Age</th>
            <th className="p-2 border border-gray-200">Contact</th>
            <th className="p-2 border border-gray-200">Email</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border border-gray-200">{patient.name}</td>
              <td className="p-2 border border-gray-200">{patient.age}</td>
              <td className="p-2 border border-gray-200">{patient.contact}</td>
              <td className="p-2 border border-gray-200">{patient.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorDashboard;
