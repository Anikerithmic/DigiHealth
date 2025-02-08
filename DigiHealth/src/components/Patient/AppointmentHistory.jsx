import React from "react";

const AppointmentHistory = () => {
  const appointments = [
    { date: "2024-12-01", doctor: "Dr. Abc", reason: "Checkup" },
    { date: "2024-11-20", doctor: "Dr. Xyz", reason: "Follow-up" },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Appointment History</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index} className="mb-2">
            <strong>Date:</strong> {appointment.date} <br />
            <strong>Doctor:</strong> {appointment.doctor} <br />
            <strong>Reason:</strong> {appointment.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentHistory;
