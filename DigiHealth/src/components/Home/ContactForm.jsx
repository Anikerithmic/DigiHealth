// import React from 'react'
// // import { Link } from 'react-router-dom';
// import './Home.css';
// import './contact.css';
// const ContactForm = () => {
//   return (
//     <div className='container-one'>

//           <section className="form-container-1">
//             <div className="container">
//               <form action="action_page.php">
//                 <label htmlFor="fname">First Name</label>
//                 <input type="text" id="fname" name="firstname" placeholder="Your name..." />

//                 <label htmlFor="lname">Last Name</label>
//                 <input type="text" id="lname" name="lastname" placeholder="Your last name..." />

//                 <label htmlFor="country">Country</label>
//                 <select id="country" name="country">
//                   <option value="INDIA">India</option>
//                   <option value="NRI">NRI</option>

//                 </select>

//                 <label htmlFor="subject">Write your Query</label>
//                 <textarea id="subject" name="subject" placeholder="Write to us..." style={{ height: "200px" }}></textarea>

//                 <input type="submit" value="Submit" />
//               </form>
//             </div>
//           </section>

//     </div>
//   )
// }

// export default ContactForm

import React from "react";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label
              htmlFor="fname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="INDIA">India</option>
              <option value="NRI">NRI</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Write your Query
            </label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write to us..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
