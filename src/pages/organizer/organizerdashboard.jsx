import React from "react";
import {
  FaUtensils,
  FaPlus,
  FaTruck,
  FaClock,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBell,
  FaUserCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";

function OrganizerDashboard() {

  return (

    <div className="dashboard-page">

      {/* ================= DASHBOARD HEADER ================= */}

      <div className="dashboard-header">

        <div>

          <h1>
            Welcome back, Organizer! 👋
          </h1>

          <p>
            Let's make sure no good food goes to waste.
          </p>

        </div>

        <div className="dashboard-actions">

          <button className="notification-btn">
            <FaBell />
            <span>3</span>
          </button>

          <FaUserCircle className="profile-icon" />

        </div>

      </div>


      {/* ================= QUICK ACTION ================= */}

      <div className="quick-action">

        <div>

          <div className="quick-icon">
            <FaUtensils />
          </div>

          <div>

            <h2>
              Have leftover food?
            </h2>

            <p>
              Register your surplus food and connect
              with nearby organizations.
            </p>

          </div>

        </div>

        <Link
          to="/organizer/add-donation"
          className="donate-button"
        >
          <FaPlus />
          Donate Food
        </Link>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="dashboard-stats">

        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon green">
            <FaUtensils />
          </div>

          <div>

            <h3>
              12
            </h3>

            <p>
              Total Donations
            </p>

          </div>

        </div>


        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon orange">
            <FaClock />
          </div>

          <div>

            <h3>
              3
            </h3>

            <p>
              Pending Requests
            </p>

          </div>

        </div>


        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon blue">
            <FaTruck />
          </div>

          <div>

            <h3>
              8
            </h3>

            <p>
              Deliveries
            </p>

          </div>

        </div>


        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon purple">
            <FaCheckCircle />
          </div>

          <div>

            <h3>
              850
            </h3>

            <p>
              Meals Rescued
            </p>

          </div>

        </div>

      </div>


      {/* ================= RECENT DONATIONS ================= */}

      <div className="dashboard-section">

        <div className="section-title-row">

          <div>

            <h2>
              Recent Donations
            </h2>

            <p>
              Track your recent food donations
            </p>

          </div>

         <Link to="/organizer/my-donations" className="view-all-btn">
  View All
</Link>

        </div>


        <div className="donation-table">

          {/* Donation 1 */}

          <div className="donation-row">

            <div className="food-info">

              <div className="food-icon">
                🍛
              </div>

              <div>

                <h4>
                  Vegetable Biryani
                </h4>

                <p>
                  Wedding Event
                </p>

              </div>

            </div>


            <div>
              <strong>
                100 meals
              </strong>

              <p>
                25 kg
              </p>
            </div>


            <div className="location-info">

              <FaMapMarkerAlt />

              Ghatkesar

            </div>


            <div className="status completed">

              <FaCheckCircle />

              Delivered

            </div>

          </div>


          {/* Donation 2 */}

          <div className="donation-row">

            <div className="food-info">

              <div className="food-icon">
                🍚
              </div>

              <div>

                <h4>
                  Rice & Dal
                </h4>

                <p>
                  College Event
                </p>

              </div>

            </div>


            <div>

              <strong>
                75 meals
              </strong>

              <p>
                18 kg
              </p>

            </div>


            <div className="location-info">

              <FaMapMarkerAlt />

              Medipally

            </div>


            <div className="status pending">

              <FaClock />

              Pending

            </div>

          </div>


          {/* Donation 3 */}

          <div className="donation-row">

            <div className="food-info">

              <div className="food-icon">
                🥗
              </div>

              <div>

                <h4>
                  Mixed Meals
                </h4>

                <p>
                  Birthday Party
                </p>

              </div>

            </div>


            <div>

              <strong>
                50 meals
              </strong>

              <p>
                12 kg
              </p>

            </div>


            <div className="location-info">

              <FaMapMarkerAlt />

              Uppal

            </div>


            <div className="status in-progress">

              <FaTruck />

              In Transit

            </div>

          </div>

        </div>

      </div>


      {/* ================= IMPACT ================= */}

      <div className="impact-card">

        <div className="impact-icon">
          🌱
        </div>

        <div>

          <h2>
            Your Impact
          </h2>

          <p>
            Your donations have helped rescue
            <strong> 850 meals</strong> from being wasted.
          </p>

        </div>

        <div className="impact-number">
          850
          <span>
            Meals Saved
          </span>
        </div>

      </div>

    </div>

  );
}

export default OrganizerDashboard;