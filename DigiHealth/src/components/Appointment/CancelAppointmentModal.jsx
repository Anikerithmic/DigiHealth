import React from "react";

const CancelAppointmentModal = ({
  isOpen,
  onClose,
  onConfirm,
  cancelReason,
  setCancelReason,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Cancel Appointment
        </h2>
        <p className="text-gray-300 mb-3">
          Are you sure you want to cancel your appointment?
        </p>

        <label className="text-gray-400 block mb-2">
          Reason for cancellation
        </label>
        <textarea
          className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
          placeholder="ex: Urgent meeting came up"
          value={cancelReason}
          onChange={(e) => setCancelReason(e.target.value)}
        ></textarea>

        <div className="flex justify-end mt-4">
          <button
            className="text-gray-400 mr-3 hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={onConfirm}
            disabled={!cancelReason.trim()}
          >
            Cancel appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelAppointmentModal;
