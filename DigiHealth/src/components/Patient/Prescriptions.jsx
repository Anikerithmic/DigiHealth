import React from "react";

const Prescriptions = () => {
  const prescriptions = [
    {
      date: "2024-12-01",
      doctor: "Dr. Strange",
      prescription: "Ibuprofen 200mg",
    },
    { date: "2024-11-20", doctor: "Dr. Strange", prescription: "Antibiotics" },
  ];

  const handleDownload = (prescription) => {
    alert("Download Prescription");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Prescriptions</h2>
      <ul>
        {prescriptions.map((prescription, index) => (
          <li key={index} className="mb-2">
            <strong>Date:</strong> {prescription.date} <br />
            <strong>Doctor:</strong> {prescription.doctor} <br />
            <strong>Prescription:</strong> {prescription.prescription} <br />
            <button
              className="mt-2 px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition duration-300"
              onClick={() => handleDownload(prescription)}
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prescriptions;
