import React, { useState } from 'react';

const PatientRegistrationForm = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    dob: '',
    email: '',
    contact: '',
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process submission
    console.log('Patient Data:', patientData);
  };

  return (
    <div>
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={patientData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={patientData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={patientData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={patientData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
};

export default PatientRegistrationForm;
