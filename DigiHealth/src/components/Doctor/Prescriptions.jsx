// Prescriptions Section
const Prescriptions = () => {
    const prescriptions = [
      { date: '2024-12-01', patient: 'Patient X', prescription: 'Ibuprofen 200mg' },
      { date: '2024-11-20', patient: 'Patient Y', prescription: 'Antibiotics' },
    ];
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Prescriptions</h2>
        <ul className="space-y-4">
          {prescriptions.map((prescription, index) => (
            <li key={index} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
              <p><strong>Date:</strong> {prescription.date}</p>
              <p><strong>Patient:</strong> {prescription.patient}</p>
              <p><strong>Prescription:</strong> {prescription.prescription}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Prescriptions;