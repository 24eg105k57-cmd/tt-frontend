import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      {/* LOGO */}

      <div className="navbar-logo">

        🍛 FoodRescue

      </div>


      {/* NAVIGATION */}

      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/organizer">
          Organizer
        </Link>

        <Link to="/ngo">
          NGO
        </Link>

        <Link to="/volunteer">
          Volunteer
        </Link>

        <Link to="/admin">
          Admin
        </Link>

        <Link to="/food-rescue-history">
          History
        </Link>

        <Link to="/notifications">
          🔔
        </Link>

        <Link to="/profile">
          👤
        </Link>

      </div>


      {/* AUTH BUTTONS */}

      <div className="navbar-auth">

        <Link
          to="/login"
          className="navbar-login"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="navbar-register"
        >
          Register
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;