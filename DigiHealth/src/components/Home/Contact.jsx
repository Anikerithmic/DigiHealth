// import React from 'react';
// import HomeNavbar from './HomeNavbar';
// import './Home.css';
// import './contact.css';
// import ContactDetails from './ContactDetails';
// import ContactForm from './ContactForm';
// import Footer from './Footer';
// const Contact = () => {
//   return (
//     <>
//     <div className="home-container">
//       <HomeNavbar />
//       <main>
//         <div className="section-1 color">
//            <h1>Contact Us</h1>
//            <p>If you have any questions, feel free to reach out to us:</p>
//         </div>
//       </main>
//       <ContactForm/>
//       <ContactDetails/>
//       <Footer />
//     </div>

//     </>
//   );
// };

// export default Contact;

import React from "react";
import HomeNavbar from "./HomeNavbar";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeNavbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 bg-gradient-to-r from-gray-600 to-gray-300 text-white py-16 rounded-lg shadow-lg">
          {/* <div className="bg-blue-100 text-center py-12"> */}

          <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white">
            If you have any questions, feel free to reach out to us:
          </p>
        </div>
        <ContactForm />
        <ContactDetails />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
