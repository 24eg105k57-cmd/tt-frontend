import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (

    <div className="admin-dashboard">

      {/* HEADER */}

      <div className="admin-header">

        <div>

          <h1>
            👑 Admin Dashboard
          </h1>

          <p>
            Monitor and manage the entire Food Rescue System.
          </p>

        </div>

        <div className="admin-welcome">
          Welcome, Admin 👋
        </div>

      </div>


      {/* STATISTICS */}

      <div className="admin-stats">

        <div className="admin-stat-card">

          <span className="admin-stat-icon">
            👥
          </span>

          <div>

            <h2>
              248
            </h2>

            <p>
              Total Users
            </p>

          </div>

        </div>


        <div className="admin-stat-card">

          <span className="admin-stat-icon">
            🎉
          </span>

          <div>

            <h2>
              72
            </h2>

            <p>
              Organizers
            </p>

          </div>

        </div>


        <div className="admin-stat-card">

          <span className="admin-stat-icon">
            🏢
          </span>

          <div>

            <h2>
              36
            </h2>

            <p>
              NGOs
            </p>

          </div>

        </div>


        <div className="admin-stat-card">

          <span className="admin-stat-icon">
            🚴
          </span>

          <div>

            <h2>
              140
            </h2>

            <p>
              Volunteers
            </p>

          </div>

        </div>

      </div>


      {/* SECOND ROW */}

      <div className="admin-stats">

        <div className="admin-stat-card">

          <span className="admin-stat-icon">
            🍛
          </span>

          <div>

            <h2>
              586
            </h2>

            <p>
              Food Donations
            </p>

          </div>

        </div>


        <div className="admin-stat-card">

          <span className="admin-stat-icon">
            🚚
          </span>

          <div>

            <h2>
              421
            </h2>

            <p>
              Deliveries
            </p>

          </div>

        </div>


        <div className="admin-stat-card">

          <span className="admin-stat-icon">
            ❤️
          </span>

          <div>

            <h2>
              12,450
            </h2>

            <p>
              Meals Rescued
            </p>

          </div>

        </div>


        <div className="admin-stat-card">

          <span className="admin-stat-icon">
            🌱
          </span>

          <div>

            <h2>
              3.8 Tons
            </h2>

            <p>
              Food Waste Reduced
            </p>

          </div>

        </div>

      </div>


      {/* MANAGEMENT SECTION */}

      <div className="admin-section">

        <div className="admin-section-header">

          <h2>
            ⚙️ System Management
          </h2>

          <p>
            Manage different parts of the Food Rescue System.
          </p>

        </div>


        <div className="admin-management-grid">


          <div className="admin-management-card">

            <span>
              👥
            </span>

            <h3>
              Manage Users
            </h3>

            <p>
              View and manage registered users.
            </p>

           <button
  onClick={() => navigate("/admin/users")}
>
  View Users
</button>
          </div>


          <div className="admin-management-card">

            <span>
              🏢
            </span>

            <h3>
              Manage NGOs
            </h3>

            <p>
              Manage NGOs and orphanages.
            </p>

            <button
  onClick={() => navigate("/admin/ngos")}
>
  View NGOs
</button>

          </div>


          <div className="admin-management-card">

            <span>
              🎉
            </span>

            <h3>
              Manage Organizers
            </h3>

            <p>
              Manage event organizers.
            </p>

            <button
  onClick={() => navigate("/admin/organizers")}
>
  View Organizers
</button>
          </div>


          <div className="admin-management-card">

            <span>
              🚴
            </span>

            <h3>
              Manage Volunteers
            </h3>

            <p>
              Manage volunteers and activities.
            </p>

            <button
  onClick={() => navigate("/admin/volunteers")}
>
  View Volunteers
</button>

          </div>


          <div className="admin-management-card">

            <span>
              🍛
            </span>

            <h3>
              Manage Donations
            </h3>

            <p>
              Monitor donated food.
            </p>

           <button
  onClick={() => navigate("/admin/donations")}
>
  View Donations
</button>
          </div>


          <div className="admin-management-card">

            <span>
              🚚
            </span>

            <h3>
              Manage Deliveries
            </h3>

            <p>
              Track food delivery activities.
            </p>

            <button
  onClick={() => navigate("/admin/deliveries")}
>
  View Deliveries
</button>
          </div>


        </div>

      </div>


      {/* RECENT ACTIVITY */}

      <div className="admin-section">

        <div className="admin-section-header">

          <h2>
            📋 Recent Activity
          </h2>

        </div>


        <div className="admin-activity-list">


          <div className="admin-activity">

            <span>
              🍛
            </span>

            <div>

              <strong>
                New food donation registered
              </strong>

              <p>
                Vegetable Biryani — 25 KG
              </p>

            </div>

            <small>
              10 min ago
            </small>

          </div>


          <div className="admin-activity">

            <span>
              🚴
            </span>

            <div>

              <strong>
                Volunteer accepted a pickup
              </strong>

              <p>
                Rahul accepted a donation pickup.
              </p>

            </div>

            <small>
              25 min ago
            </small>

          </div>


          <div className="admin-activity">

            <span>
              🏢
            </span>

            <div>

              <strong>
                NGO requested food
              </strong>

              <p>
                Hope Foundation requested 50 meals.
              </p>

            </div>

            <small>
              1 hour ago
            </small>

          </div>


        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;