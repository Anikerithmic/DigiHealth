import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorRegistrationForm = () => {
  const [doctorData, setDoctorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    specialty: "",
    qualification: "",
    yearsOfExperience: "",
  });

  const showToast = () => {
    toast.success("Registration Successful", {
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const handleChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/doctor/register", doctorData)
      .then((response) => {
        console.log("Doctor Data:", response.data);
        showToast();
        setDoctorData({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          password: "",
          specialty: "",
          qualification: "",
          yearsOfExperience: "",
        });
      })
      .catch((error) => {
        console.error("There was an error registering the doctor!", error);
        alert("There was an error registering the doctor!");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg backdrop-filter">
          <div className="px-6 py-8 sm:px-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                Doctor Registration
              </h2>
              <p className="text-sm text-gray-600">
                Join our network of healthcare professionals
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
                    value={doctorData.firstName}
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
                    value={doctorData.lastName}
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
                  value={doctorData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="doctor@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contact"
                  value={doctorData.contact}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your contact number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={doctorData.password}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Create a strong password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specialty
                </label>
                <input
                  type="text"
                  name="specialty"
                  value={doctorData.specialty}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your medical specialty"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  value={doctorData.qualification}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your qualification"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  name="yearsOfExperience"
                  value={doctorData.yearsOfExperience}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter years of experience"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-400  hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                >
                  Register as Doctor
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

export default DoctorRegistrationForm;
