import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUtensils,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async (e) => {

  e.preventDefault();

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {

    const response = await fetch(
      "http://localhost:8082/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      }
    );

    if (!response.ok) {
      alert("Login failed");
      return;
    }

    const user = await response.json();

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert("Login successful!");

    if (user.role === "ORGANIZER") {
  navigate("/organizer");
} else if (user.role === "NGO") {
  navigate("/ngo");
} else if (user.role === "VOLUNTEER") {
  navigate("/volunteer");
} else if (user.role === "ADMIN") {
  navigate("/admin");
} else {
  navigate("/");
}

  } catch (error) {

    console.error(error);
    alert("Cannot connect to server");

  }
};

  return (
    <div className="auth-page">

      <div className="auth-container">

        {/* Left Side */}

        <div className="auth-left">

          <div className="auth-logo">
            <FaUtensils />
            <span>FoodRescue</span>
          </div>

          <h1>
            Welcome Back!
          </h1>

          <p>
            Login to continue making a difference
            and help turn leftover food into
            meaningful meals.
          </p>

          <div className="auth-benefits">

            <div>
              🍛
              <span>Rescue leftover food</span>
            </div>

            <div>
              🏢
              <span>Connect with organizations</span>
            </div>

            <div>
              🛵
              <span>Help deliver food</span>
            </div>

          </div>

        </div>


        {/* Right Side */}

        <div className="auth-right">

          <div className="auth-form">

            <h2>
              Login
            </h2>

            <p className="form-subtitle">
              Enter your account details
            </p>


            <form onSubmit={handleLogin}>

              {/* Email */}

              <div className="input-group-custom">

                <label>
                  Email Address
                </label>

                <div className="input-wrapper">

                  <FaEnvelope />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />

                </div>

              </div>


              {/* Password */}

              <div className="input-group-custom">

                <label>
                  Password
                </label>

                <div className="input-wrapper">

                  <FaLock />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >

                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}

                  </button>

                </div>

              </div>


              {/* Forgot Password */}

              <div className="forgot-password">

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>

              </div>


              {/* Login */}

              <button
                type="submit"
                className="auth-submit"
              >
                Login
              </button>

            </form>


            {/* Register */}

            <p className="register-text">

              Don't have an account?

              <Link to="/register">
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;