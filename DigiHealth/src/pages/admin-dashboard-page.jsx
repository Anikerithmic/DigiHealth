import React from "react";

const appointments = [
  {
    id: 1,
    initials: "PB",
    name: "Phoenix Baker",
    date: "Jan 4, 2022",
    status: "Scheduled",
    doctor: "Dr. Alex Ramirez",
    doctorImg: "/doctor1.jpg",
  },
  {
    id: 2,
    initials: "LS",
    name: "Candice Wu",
    date: "Jan 2, 2022",
    status: "Pending",
    doctor: "Dr. Michael May",
    doctorImg: "/doctor2.jpg",
  },
  {
    id: 3,
    initials: "LS",
    name: "Lana Steiner",
    date: "Jan 4, 2022",
    status: "Cancelled",
    doctor: "Dr. Jasmine Lee",
    doctorImg: "/doctor3.jpg",
  },
  {
    id: 4,
    initials: "DC",
    name: "Drew Cano",
    date: "Jan 8, 2022",
    status: "Scheduled",
    doctor: "Dr. Hardik Sharma",
    doctorImg: "/doctor4.jpg",
  },
  {
    id: 5,
    initials: "NC",
    name: "Natali Craig",
    date: "Jan 6, 2022",
    status: "Pending",
    doctor: "Dr. Alyana Cruz",
    doctorImg: "/doctor5.jpg",
  },
];

const statusStyles = {
  Scheduled: "text-green-500 bg-green-100",
  Pending: "text-blue-500 bg-blue-100",
  Cancelled: "text-red-500 bg-red-100",
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Welcome, Admin</h1>
        <div className="flex items-center gap-2">
          <span>Admin</span>
          <img
            className="w-10 h-10 rounded-full border border-gray-700"
            src="/admin-avatar.jpg"
            alt="Admin"
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            📅 94
          </h2>
          <p className="text-gray-400">
            Total number of scheduled appointments
          </p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            ⏳ 32
          </h2>
          <p className="text-gray-400">Total number of pending appointments</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            ⚠️ 56
          </h2>
          <p className="text-gray-400">
            Total number of cancelled appointments
          </p>
        </div>
      </div>

      {/* Appointment Table */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="py-3">Patient</th>
              <th className="py-3">Date</th>
              <th className="py-3">Status</th>
              <th className="py-3">Doctor</th>
              <th className="py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr
                key={appt.id}
                className="border-b border-gray-700 hover:bg-gray-700"
              >
                <td className="py-4 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white font-bold">
                    {appt.initials}
                  </div>
                  {appt.name}
                </td>
                <td className="py-4">{appt.date}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      statusStyles[appt.status]
                    }`}
                  >
                    {appt.status}
                  </span>
                </td>
                <td className="py-4 flex items-center gap-3">
                  <img
                    className="w-8 h-8 rounded-full border border-gray-600"
                    src={appt.doctorImg}
                    alt={appt.doctor}
                  />
                  {appt.doctor}
                </td>
                <td className="py-4">
                  <button className="text-green-400 hover:text-green-300 mr-4">
                    Schedule
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
