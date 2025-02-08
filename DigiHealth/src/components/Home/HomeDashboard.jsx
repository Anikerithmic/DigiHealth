// // import React from 'react';
// // import Slider from "react-slick";
// // import HomeNavbar from './HomeNavbar';
// // import Footer from './Footer';
// // import './Home.css';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // const Home = () => {

// //   const settings = {
// //     dots: true,           // Show navigation dots
// //     infinite: true,       // Infinite looping
// //     speed: 500,           // Transition speed
// //     slidesToShow: 3,      // Number of slides to show at once
// //     slidesToScroll: 1,    // Scroll one slide at a time
// //     autoplay: true,       // Auto scroll
// //     autoplaySpeed: 3000,  // Auto scroll speed
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //         }
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           slidesToShow: 1,
// //         }
// //       }
// //     ]
// //   };

// //   return (
// //     <div className="home-container">
// //       <HomeNavbar />
// //       <main>
// //         <h1>Welcome to DigiHealth</h1>
// //         <p>Your healthcare solution in the digital age.</p>

// //         {/* Horizontal Carousel */}
// //         <Slider {...settings}>
// //           <div className="carousel-item">
// //             <img src="https://via.placeholder.com/300x200" alt="Slide 1" />

// //           </div>
// //           <div className="carousel-item">
// //             <img src="https://via.placeholder.com/300x200" alt="Slide 2" />

// //           </div>
// //           <div className="carousel-item">
// //             <img src="https://via.placeholder.com/300x200" alt="Slide 3" />

// //           </div>
// //           <div className="carousel-item">
// //             <img src="https://via.placeholder.com/300x200" alt="Slide 4" />

// //           </div>
// //           <div className="carousel-item">
// //             <img src="https://via.placeholder.com/300x200" alt="Slide 5" />

// //           </div>
// //         </Slider>

// //         <Footer />
// //       </main>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from 'react';
// import Slider from "react-slick";
// import HomeNavbar from './HomeNavbar';
// import Footer from './Footer';
// import './Home.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from '../../assets/homeImages/img1.jpg';
// import img2 from '../../assets/homeImages/img2.jpg';
// import img3 from '../../assets/homeImages/img3.jpg';
// import img4 from '../../assets/homeImages/img4.jpg';
// import img5 from '../../assets/homeImages/img5.jpg';

// const Home = () => {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="home-container">
//       <HomeNavbar />
//       <main>
//         <h1>Welcome to DigiHealth</h1>
//         <p>Your healthcare solution in the digital age.</p>

//         <Slider {...settings}>
//           <div className="carousel-item">
//             <img src={img1} alt="Slide 1" />
//           </div>
//           <div className="carousel-item">
//             <img src={img2} alt="Slide 2" />
//           </div>
//           <div className="carousel-item">
//             <img src={img3} alt="Slide 3" />
//           </div>
//           <div className="carousel-item">
//             <img src={img4} alt="Slide 4" />
//           </div>
//           <div className="carousel-item">
//             <img src={img5} alt="Slide 5" />
//           </div>
//         </Slider>

//         <Footer />
//       </main>
//     </div>

//   );
// };

// export default Home;

import React from "react";
import Slider from "react-slick";
import HomeNavbar from "./HomeNavbar";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/homeImages/img1.jpg";
import img2 from "../../assets/homeImages/img2.jpg";
import img3 from "../../assets/homeImages/img3.jpg";
import img4 from "../../assets/homeImages/img4.jpg";
import img5 from "../../assets/homeImages/img5.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const services = [
    {
      title: "Appoinment Booking",
      description: "Make appointment online from the comfort of your home.",
      icon: "fas fa-video",
    },
    {
      title: "Digital Prescriptions",
      description: "Get instant, secure digital prescriptions.",
      icon: "fas fa-prescription-bottle",
    },
    {
      title: "Patient Management",
      description: "Track and manage your healthcare records seamlessly.",
      icon: "fas fa-notes-medical",
    },
  ];

  return (
    <div className="bg-gray-50">
      <HomeNavbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12 bg-gradient-to-r from-gray-600 to-gray-300 text-white py-16 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Welcome to DigiHealth
          </h1>
          <p className="text-xl mb-6">
            Your Comprehensive Digital Healthcare Solution
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-800 hover:bg-white hover:text-gray-800 text-white px-6 py-3 rounded-full transition">
              Get Started
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-6 py-3 rounded-full transition">
              Learn More
            </button>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="text-4xl text-blue-600 mb-4 text-center">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Image Carousel */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Journey
          </h2>
          <Slider {...settings}>
            {[img1, img2, img3, img4, img5].map((img, index) => (
              <div key={index} className="px-2">
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
