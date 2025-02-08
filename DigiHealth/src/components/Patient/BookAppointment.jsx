import React from "react";

const BookAppointment = () => {
  const handleBookAppointment = () => {
    alert("Appointment booked!");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
      <form>
        <input
          type="date"
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Doctor's Name"
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <button
          className="mt-2 px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition duration-300"
          onClick={handleBookAppointment}
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
