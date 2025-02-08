import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Login Data:", data);

    if (data.role === "patient") {
      localStorage.setItem("patientId", data.pId);
      navigate("/patient-dashboard");
    } else if (data.role === "doctor") {
      localStorage.setItem("doctorId", data.dId);
      navigate("/doctor-dashboard");
    } else if (data.role === "admin") navigate("/admin-dashboard");
    else alert(data.error || "Login failed");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 p-3 w-full border border-transparent rounded-lg bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-4 p-3 w-full border border-transparent rounded-lg bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="w-full p-3 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
