import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal"; 

const Profile = () => {
  const [patient, setPatient] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const patientId = localStorage.getItem("patientId");

  useEffect(() => {
    const fetchPatientData = async () => {
      if (patientId) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/patient/${patientId}`
          );
          setPatient(response.data);
          setFormData(response.data); // Initialize form data with patient data
        } catch (error) {
          console.error("Error fetching patient data:", error);
        }
      }
    };

    fetchPatientData();
  }, [patientId]);

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
      await axios.put(
        `http://localhost:8080/api/patient/${patientId}`,
        formData
      );
      setPatient(formData); // Update the patient state with new data
      setIsEditing(false); // Close the modal
    } catch (error) {
      console.error("Error updating patient data:", error);
    }
  };

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <p>
        <strong>Name:</strong> {patient.firstName} {patient.lastName}
      </p>
      {/* <p>
        <strong>Age:</strong>{" "}
        {new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()}
      </p> */}
      <p>
        <strong>Contact:</strong> {patient.phoneNumber}
      </p>
      <p>
        <strong>Email:</strong> {patient.email}
      </p>
      <button
        className="mt-4 px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition duration-300"
        onClick={handleEditProfile}
      >
        Edit Profile
      </button>

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
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
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

export default Profile;
