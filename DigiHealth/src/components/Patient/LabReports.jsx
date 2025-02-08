import React from "react";

const LabReports = () => {
  const labReports = [
    { date: "2024-12-01", reportType: "Blood Test", result: "Normal" },
    { date: "2024-11-20", reportType: "X-Ray", result: "No issues" },
  ];

  const handleDownload = (report) => {
    alert(`Download report`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Lab Reports</h2>
      <h2 className="text-2xl font-bold mb-4">Lab Reports</h2>
      <ul>
        {labReports.map((report, index) => (
          <li key={index} className="mb-2">
            <strong>Date:</strong> {report.date} <br />
            <strong>Report Type:</strong> {report.reportType} <br />
            <strong>Result:</strong> {report.result} <br />
            <button
              className="mt-2 px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition duration-300"
              onClick={() => handleDownload(report)}
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabReports;
