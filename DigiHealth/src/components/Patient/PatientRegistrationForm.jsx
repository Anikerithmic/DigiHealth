import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientRegistrationForm = () => {
  const showToast = () => {
    toast.success("Registration Successful", {
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    medicalHistory: "",
    dateOfBirth: "",
    address: "",
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/patient/register", patientData)
      .then((response) => {
        console.log("Patient Data:", response.data);
        showToast();
        setPatientData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          medicalHistory: "",
          dateOfBirth: "",
          address: "",
        });
      })
      .catch((error) => {
        console.error("There was an error registering the patient!", error);
        toast.error("Registration Failed. Try again.");
      });
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg backdrop-filter">
          <div className="px-6 py-8 sm:px-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                Patient Registration
              </h2>
              <p className="text-sm text-gray-600">
                Join our healthcare platform for personalized care
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={patientData.firstName}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={patientData.lastName}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={patientData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="patient@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={patientData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={patientData.password}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Create a strong password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={patientData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Medical History
                </label>
                <textarea
                  name="medicalHistory"
                  value={patientData.medicalHistory}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Please provide any relevant medical history"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={patientData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Enter your full address"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-400  hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                >
                  Register as Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PatientRegistrationForm;
