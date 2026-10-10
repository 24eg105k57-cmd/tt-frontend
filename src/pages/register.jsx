import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUtensils,
  FaUser,
  FaBuilding,
  FaMotorcycle,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

function Register() {

  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    organizationName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    location: "",
    registrationNumber: "",
    age: ""
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleRegister = async (e) => {

  e.preventDefault();

  if (!role) {
    alert("Please select your role");
    return;
  }

  if (
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.password
  ) {
    alert("Please fill all required fields");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  let userRole = "";

  if (role === "organizer") {
    userRole = "ORGANIZER";
  } else if (role === "ngo") {
    userRole = "NGO";
  } else if (role === "volunteer") {
    userRole = "VOLUNTEER";
  }

  try {

    const response = await fetch(
      "http://localhost:8082/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: userRole
        })
      }
    );

    if (!response.ok) {
      alert("Registration failed");
      return;
    }

    alert("Registration successful!");

    navigate("/login");

  } catch (error) {

    console.error(error);
    alert("Cannot connect to server");

  }
};


  return (

    <div className="register-page">

      <div className="register-container">

        {/* ================= HEADER ================= */}

        <div className="register-header">

          <div className="register-logo">

            <FaUtensils />

            <span>FoodRescue</span>

          </div>

          <h1>
            Join the Food Rescue Movement
          </h1>

          <p>
            Create an account and help turn surplus food
            into meaningful meals.
          </p>

        </div>


        {/* ================= ROLE SELECTION ================= */}

        <div className="role-section">

          <h2>
            What would you like to do?
          </h2>

          <p>
            Choose your role to continue
          </p>


          <div className="role-cards">

            {/* ORGANIZER */}

            <div
              className={`role-card ${
                role === "organizer"
                  ? "selected"
                  : ""
              }`}
              onClick={() => setRole("organizer")}
            >

              <div className="role-icon">
                <FaUser />
              </div>

              <h3>
                Event Organizer
              </h3>

              <p>
                Donate leftover food from
                your events.
              </p>

            </div>


            {/* NGO */}

            <div
              className={`role-card ${
                role === "ngo"
                  ? "selected"
                  : ""
              }`}
              onClick={() => setRole("ngo")}
            >

              <div className="role-icon">
                <FaBuilding />
              </div>

              <h3>
                NGO / Orphanage
              </h3>

              <p>
                Receive surplus food for
                people in need.
              </p>

            </div>


            {/* VOLUNTEER */}

            <div
              className={`role-card ${
                role === "volunteer"
                  ? "selected"
                  : ""
              }`}
              onClick={() => setRole("volunteer")}
            >

              <div className="role-icon">
                <FaMotorcycle />
              </div>

              <h3>
                Volunteer
              </h3>

              <p>
                Pick up and deliver food
                to organizations.
              </p>

            </div>

          </div>

        </div>


        {/* ================= FORM ================= */}

        {role && (

          <form
            className="register-form"
            onSubmit={handleRegister}
          >

            <div className="form-title">

              <h2>

                {role === "organizer" &&
                  "Event Organizer Details"}

                {role === "ngo" &&
                  "NGO / Orphanage Details"}

                {role === "volunteer" &&
                  "Volunteer Details"}

              </h2>

              <p>
                Enter your information below
              </p>

            </div>


            {/* NAME */}

            <div className="form-row">

              <div className="form-field">

                <label>
                  {role === "ngo"
                    ? "Contact Person Name"
                    : "Full Name"}
                </label>

                <div className="register-input">

                  <FaUser />

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                </div>

              </div>


              {/* ORGANIZATION NAME */}

              {role === "ngo" && (

                <div className="form-field">

                  <label>
                    Organization Name
                  </label>

                  <div className="register-input">

                    <FaBuilding />

                    <input
                      type="text"
                      name="organizationName"
                      placeholder="Enter organization name"
                      value={
                        formData.organizationName
                      }
                      onChange={handleChange}
                    />

                  </div>

                </div>

              )}

            </div>


            {/* EMAIL + PHONE */}

            <div className="form-row">

              <div className="form-field">

                <label>
                  Email Address
                </label>

                <div className="register-input">

                  <FaEnvelope />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>

              </div>


              <div className="form-field">

                <label>
                  Phone Number
                </label>

                <div className="register-input">

                  <FaPhone />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>


            {/* LOCATION */}

            <div className="form-field">

              <label>
                Location
              </label>

              <div className="register-input">

                <FaMapMarkerAlt />

                <input
                  type="text"
                  name="location"
                  placeholder="City / Area"
                  value={formData.location}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* NGO REGISTRATION */}

            {role === "ngo" && (

              <div className="form-field">

                <label>
                  NGO Registration Number
                </label>

                <div className="register-input">

                  <FaBuilding />

                  <input
                    type="text"
                    name="registrationNumber"
                    placeholder="Enter registration number"
                    value={
                      formData.registrationNumber
                    }
                    onChange={handleChange}
                  />

                </div>

              </div>

            )}


            {/* VOLUNTEER AGE */}

            {role === "volunteer" && (

              <div className="form-field">

                <label>
                  Age
                </label>

                <div className="register-input">

                  <FaUser />

                  <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleChange}
                  />

                </div>

              </div>

            )}


            {/* PASSWORD */}

            <div className="form-row">

              <div className="form-field">

                <label>
                  Password
                </label>

                <div className="register-input">

                  <FaLock />

                  <input
                    type="password"
                    name="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                </div>

              </div>


              <div className="form-field">

                <label>
                  Confirm Password
                </label>

                <div className="register-input">

                  <FaLock />

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={
                      formData.confirmPassword
                    }
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="register-submit"
            >

              Create Account

              <FaArrowRight />

            </button>


            {/* BACK */}

            <button
              type="button"
              className="back-role"
              onClick={() => setRole("")}
            >

              <FaArrowLeft />

              Change Role

            </button>

          </form>

        )}


        {/* LOGIN */}

        <div className="already-account">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Register;