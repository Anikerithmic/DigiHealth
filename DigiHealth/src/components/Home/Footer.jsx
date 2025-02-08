// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-column">
//           <h4>About DigiHealth</h4>
//           <p>DigiHealth is your one-stop healthcare solution, offering digital services for patients, doctors, and healthcare professionals. We provide a wide range of services including telemedicine, digital prescriptions, and patient management systems.</p>
//         </div>

//         <div className="footer-column">
//           <h4>Quick Links</h4>
//           <ul className="footer-links">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/contact">Contact Us</Link></li>
//             <li><Link to="/privacy">Privacy Policy</Link></li>
//             <li><Link to="/terms">Terms & Conditions</Link></li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>Follow Us</h4>
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-facebook"></i>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-twitter"></i>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-instagram"></i>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-linkedin"></i>
//             </a>
//           </div>
//         </div>

//         <div className="footer-column">
//           <h4>Contact Us</h4>
//           <p>Email: contact@digihealth.com</p>
//           <p>Phone: +911234567890</p>
//           <p>Address: 123 Health Street, Navi Mumbai, India</p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} DigiHealth. All Rights Reserved.</p>
//       </div>
//     </footer>

//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* About Column */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-blue-400">
            About DigiHealth
          </h4>
          <p className="text-gray-300 text-sm">
            DigiHealth is your comprehensive digital healthcare platform,
            transforming patient care through innovative technology and seamless
            medical services.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Conditions" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-300 hover:text-blue-400 transition duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Column */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-blue-400">
            Connect With Us
          </h4>
          <div className="flex space-x-4">
            {[
              { icon: "fa-facebook", url: "https://facebook.com/digihealth" },
              { icon: "fa-twitter", url: "https://twitter.com/digihealth" },
              { icon: "fa-instagram", url: "https://instagram.com/digihealth" },
              {
                icon: "fa-linkedin",
                url: "https://linkedin.com/company/digihealth",
              },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <i className={`fab ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-blue-400">
            Contact Information
          </h4>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>✉️ contact@digihealth.com</p>
            <p>📞 +91 123 456 7890</p>
            <p>🏢 123 Health Street, Navi Mumbai, India</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} DigiHealth. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
