import React, { useState } from "react";

function Profile() {

  const [profile, setProfile] = useState({
    name: "Hasini",
    email: "hasini@gmail.com",
    phone: "9876543210",
    location: "Hyderabad",
    role: "Volunteer"
  });

  const [notifications, setNotifications] = useState(true);

  const [message, setMessage] = useState("");


  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });

  };


  const handleSave = (e) => {

    e.preventDefault();

    setMessage("Profile updated successfully! ✅");

    setTimeout(() => {
      setMessage("");
    }, 3000);

  };


  return (

    <div className="profile-page">

      {/* HEADER */}

      <div className="profile-header">

        <div className="profile-avatar">
          👤
        </div>

        <div>

          <h1>
            My Profile
          </h1>

          <p>
            Manage your account and preferences.
          </p>

        </div>

      </div>


      {/* SUCCESS MESSAGE */}

      {message && (

        <div className="profile-success">

          {message}

        </div>

      )}


      <div className="profile-layout">

        {/* PERSONAL INFORMATION */}

        <div className="profile-card">

          <h2>
            👤 Personal Information
          </h2>

          <p className="profile-card-description">
            Update your personal details.
          </p>


          <form onSubmit={handleSave}>

            {/* NAME */}

            <div className="profile-form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />

            </div>


            {/* EMAIL */}

            <div className="profile-form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />

            </div>


            {/* PHONE */}

            <div className="profile-form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />

            </div>


            {/* LOCATION */}

            <div className="profile-form-group">

              <label>
                Location
              </label>

              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
              />

            </div>


            {/* ROLE */}

            <div className="profile-form-group">

              <label>
                Account Role
              </label>

              <input
                type="text"
                value={profile.role}
                disabled
              />

            </div>


            <button
              type="submit"
              className="profile-save-button"
            >

              💾 Save Changes

            </button>

          </form>

        </div>


        {/* SETTINGS */}

        <div className="profile-card">

          <h2>
            ⚙️ Account Settings
          </h2>

          <p className="profile-card-description">
            Manage your application preferences.
          </p>


          {/* NOTIFICATIONS */}

          <div className="profile-setting">

            <div>

              <strong>
                🔔 Notifications
              </strong>

              <p>
                Receive updates about food rescue activities.
              </p>

            </div>


            <label className="profile-switch">

              <input
                type="checkbox"
                checked={notifications}
                onChange={() =>
                  setNotifications(
                    !notifications
                  )
                }
              />

              <span className="profile-slider"></span>

            </label>

          </div>


          {/* HISTORY */}

          <div className="profile-setting">

            <div>

              <strong>
                📋 Rescue History
              </strong>

              <p>
                View your completed food rescue activities.
              </p>

            </div>


            <a
              href="/food-rescue-history"
              className="profile-setting-link"
            >

              View

            </a>

          </div>


          {/* NOTIFICATIONS PAGE */}

          <div className="profile-setting">

            <div>

              <strong>
                🔔 Notification Center
              </strong>

              <p>
                View all your latest notifications.
              </p>

            </div>


            <a
              href="/notifications"
              className="profile-setting-link"
            >

              Open

            </a>

          </div>


          {/* CHANGE PASSWORD */}

          <div className="profile-setting">

            <div>

              <strong>
                🔐 Password
              </strong>

              <p>
                Keep your account secure.
              </p>

            </div>


            <button
              className="profile-setting-button"
              onClick={() =>
                alert(
                  "Password change feature will be connected to the backend later."
                )
              }
            >

              Change

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Profile;