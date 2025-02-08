// Lab Reports Section
const LabReports = () => {
    const labReports = [
      { date: '2024-12-01', reportType: 'Blood Test', result: 'Normal' },
      { date: '2024-11-20', reportType: 'X-Ray', result: 'No issues' },
    ];
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Lab Reports</h2>
        <ul className="space-y-4">
          {labReports.map((report, index) => (
            <li key={index} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
              <p><strong>Date:</strong> {report.date}</p>
              <p><strong>Report Type:</strong> {report.reportType}</p>
              <p><strong>Result:</strong> {report.result}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default LabReports;