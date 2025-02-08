import React from "react";
// import { Link } from 'react-router-dom';
// import "./Home.css";
import "./contact.css";
const ContactDetails = () => {
  return (
    <div className="container-2">
      <section className="contact-details">
        <ul>
          <li>
            <strong>Email:</strong> support@digihealth.com
          </li>
          <li>
            <strong>Phone:</strong> +91-987667870
          </li>
          <li>
            <strong>Address:</strong> DigiHealth HQ, Kolhapur, Maharashtra
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ContactDetails;
