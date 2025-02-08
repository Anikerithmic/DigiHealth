// import { CheckCircle, Calendar } from "lucide-react";

// export default function AppointmentSuccess() {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
//             <div className="text-center max-w-lg">
//                 <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
//                 <h2 className="text-2xl font-semibold">
//                     Your <span className="text-green-400">appointment request</span> has
//                     been successfully submitted!
//                 </h2>
//                 <p className="text-gray-400 mt-2">
//                     We&apos;ll be in touch shortly to confirm.
//                 </p>

//                 <div className="mt-6 bg-gray-800 rounded-lg p-4 flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                         <img
//                             src="https://via.placeholder.com/40" // Replace with actual doctor image
//                             alt="Doctor"
//                             className="w-10 h-10 rounded-full"
//                         />
//                         <span className="font-medium">Dr. Adam Smith</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <Calendar className="w-5 h-5 text-gray-400" />
//                         <span className="text-gray-300">23 June 2024 - 5:00 PM</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { CheckCircle, Calendar } from "lucide-react";

export default function AppointmentSuccess({ doctorName, doctorImage, appointmentDate }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
            <div className="text-center max-w-lg">
                <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold">
                    Your <span className="text-green-400">appointment request</span> has been successfully submitted!
                </h2>
                <p className="text-gray-400 mt-2">We&apos;ll be in touch shortly to confirm.</p>

                <div className="mt-6 bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img
                            src={doctorImage || "https://via.placeholder.com/40"} // Use actual doctor image
                            alt="Doctor"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="font-medium">{doctorName || "Unknown Doctor"}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">{appointmentDate || "TBD"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
