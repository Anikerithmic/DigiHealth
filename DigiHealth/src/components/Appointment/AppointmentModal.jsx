import React, { useState } from "react";
import {
    FaUserMd,
    FaCalendarAlt,
    FaTimes,
    FaChevronDown,
    FaSearch,
} from "react-icons/fa";

const doctors = [
    { id: 1, name: "Dr. Adam Smith", avatar: "/doctor1.jpg" },
    { id: 2, name: "Dr. Jane Doe", avatar: "/doctor2.jpg" },
    { id: 3, name: "Dr. Michael Lee", avatar: "/doctor3.jpg" },
];

const AppointmentModal = ({ isOpen, onClose }) => {
    const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
    const [reason, setReason] = useState("");
    const [date, setDate] = useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-900 text-white p-6 rounded-lg w-96 shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-xl font-semibold">Schedule Appointment</h2>
                    <FaTimes
                        className="cursor-pointer text-gray-400 hover:text-gray-200"
                        onClick={onClose}
                    />
                </div>

                {/* Doctor Selection */}
                <div className="mt-4">
                    <label className="text-gray-400 text-sm">Doctor</label>
                    <div className="relative mt-2">
                        <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-md cursor-pointer">
                            <img
                                src={selectedDoctor.avatar}
                                alt="Doctor"
                                className="w-8 h-8 rounded-full border border-gray-600"
                            />
                            <span>{selectedDoctor.name}</span>
                            <FaChevronDown className="ml-auto text-gray-400" />
                        </div>
                        <div className="absolute w-full mt-1 bg-gray-800 rounded-md shadow-md">
                            {doctors.map((doc) => (
                                <div
                                    key={doc.id}
                                    className="flex items-center gap-2 p-3 hover:bg-gray-700 cursor-pointer"
                                    onClick={() => setSelectedDoctor(doc)}
                                >
                                    <img
                                        src={doc.avatar}
                                        alt={doc.name}
                                        className="w-8 h-8 rounded-full border border-gray-600"
                                    />
                                    <span>{doc.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Reason for Appointment */}
                <div className="mt-4">
                    <label className="text-gray-400 text-sm">
                        Reason for appointment
                    </label>
                    <textarea
                        className="w-full p-3 bg-gray-800 rounded-md mt-2 resize-none h-20 focus:ring-2 focus:ring-green-500 outline-none"
                        placeholder="ex: Annual monthly check-up"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    />
                </div>

                {/* Date Picker */}
                <div className="mt-4">
                    <label className="text-gray-400 text-sm">
                        Expected appointment date
                    </label>
                    <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-md mt-2 cursor-pointer">
                        <FaCalendarAlt className="text-gray-400" />
                        <input
                            type="date"
                            className="bg-transparent outline-none w-full text-gray-300"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>

                {/* Schedule Button */}
                <button
                    className="w-full bg-green-500 text-white py-3 rounded-md mt-5 font-semibold hover:bg-green-600 transition"
                    onClick={() => {
                        alert(`Appointment scheduled with ${selectedDoctor.name}`);
                        onClose();
                    }}
                >
                    Schedule appointment
                </button>
            </div>
        </div>
    );
};

export default AppointmentModal;
