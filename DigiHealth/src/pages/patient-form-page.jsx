import React, { useState } from "react";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    occupation: "",
    emergencyContact: "",
    emergencyPhone: "",
    physician: "",
    insuranceProvider: "",
    insuranceNumber: "",
    allergies: "",
    medications: "",
    familyHistory: "",
    pastMedicalHistory: "",
    idType: "Birth Certificate",
    idNumber: "",
    consentTreatment: false,
    consentDisclosure: false,
    agreePrivacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-green-400">
          CarePulse - Patient Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input"
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="input"
                onChange={handleChange}
              />
              <input
                type="date"
                name="dob"
                className="input"
                onChange={handleChange}
              />
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                  />{" "}
                  Other
                </label>
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input"
                onChange={handleChange}
              />
              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                className="input"
                onChange={handleChange}
              />
              <input
                type="text"
                name="emergencyContact"
                placeholder="Emergency Contact Name"
                className="input"
                onChange={handleChange}
              />
              <input
                type="tel"
                name="emergencyPhone"
                placeholder="Emergency Contact Phone"
                className="input"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Medical Information */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Medical Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="physician"
                placeholder="Primary Care Physician"
                className="input"
                onChange={handleChange}
              />
              <input
                type="text"
                name="insuranceProvider"
                placeholder="Insurance Provider"
                className="input"
                onChange={handleChange}
              />
              <input
                type="text"
                name="insuranceNumber"
                placeholder="Insurance Policy Number"
                className="input"
                onChange={handleChange}
              />
              <input
                type="text"
                name="allergies"
                placeholder="Allergies (if any)"
                className="input"
                onChange={handleChange}
              />
              <input
                type="text"
                name="medications"
                placeholder="Current Medications"
                className="input"
                onChange={handleChange}
              />
              <input
                type="text"
                name="familyHistory"
                placeholder="Family Medical History"
                className="input"
                onChange={handleChange}
              />
              <input
                type="text"
                name="pastMedicalHistory"
                placeholder="Past Medical History"
                className="input"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Identification and Verification */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Identification and Verification
            </h3>
            <select name="idType" className="input" onChange={handleChange}>
              <option>Birth Certificate</option>
              <option>Driver's License</option>
              <option>Passport</option>
            </select>
            <input
              type="text"
              name="idNumber"
              placeholder="Identification Number"
              className="input"
              onChange={handleChange}
            />
            <input type="file" className="input bg-gray-700 p-2 rounded" />
          </div>

          {/* Consent and Privacy */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Consent and Privacy</h3>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="consentTreatment"
                onChange={handleChange}
              />
              <span>
                I consent to receive treatment for my health condition.
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="consentDisclosure"
                onChange={handleChange}
              />
              <span>
                I consent to the use and disclosure of my health information for
                treatment purposes.
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreePrivacy"
                onChange={handleChange}
              />
              <span>
                I acknowledge that I have reviewed and agree to the privacy
                policy.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
