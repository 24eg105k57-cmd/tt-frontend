import React, { useState } from "react";

function ManageVolunteers() {

  const [search, setSearch] = useState("");

  const [volunteers, setVolunteers] = useState([

    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      location: "Medipally",
      deliveries: 24,
      activePickups: 2,
      rating: 4.8,
      status: "Active"
    },

    {
      id: 2,
      name: "Arjun Reddy",
      email: "arjun@gmail.com",
      location: "Uppal",
      deliveries: 18,
      activePickups: 1,
      rating: 4.6,
      status: "Active"
    },

    {
      id: 3,
      name: "Sneha Rao",
      email: "sneha@gmail.com",
      location: "Ghatkesar",
      deliveries: 31,
      activePickups: 3,
      rating: 4.9,
      status: "Active"
    },

    {
      id: 4,
      name: "Kiran Kumar",
      email: "kiran@gmail.com",
      location: "LB Nagar",
      deliveries: 9,
      activePickups: 0,
      rating: 4.2,
      status: "Blocked"
    },

    {
      id: 5,
      name: "Ananya Patel",
      email: "ananya@gmail.com",
      location: "ECIL",
      deliveries: 15,
      activePickups: 1,
      rating: 4.7,
      status: "Active"
    }

  ]);


  // BLOCK / UNBLOCK

  const toggleStatus = (id) => {

    setVolunteers(

      volunteers.map((volunteer) => {

        if (volunteer.id === id) {

          return {
            ...volunteer,
            status:
              volunteer.status === "Active"
                ? "Blocked"
                : "Active"
          };

        }

        return volunteer;

      })

    );

  };


  // SEARCH

  const filteredVolunteers =
    volunteers.filter((volunteer) => {

      return (

        volunteer.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        volunteer.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        volunteer.location
          .toLowerCase()
          .includes(search.toLowerCase())

      );

    });


  return (

    <div className="admin-dashboard">

      {/* HEADER */}

      <div className="admin-header">

        <div>

          <h1>
            🚴 Manage Volunteers
          </h1>

          <p>
            Manage volunteers responsible for food pickup and delivery.
          </p>

        </div>

      </div>


      {/* SEARCH */}

      <div className="admin-user-controls">

        <input
          type="text"
          placeholder="🔍 Search volunteer, email or location..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>


      {/* VOLUNTEER TABLE */}

      <div className="admin-user-table-container">

        <table className="admin-user-table">

          <thead>

            <tr>

              <th>#</th>

              <th>Volunteer</th>

              <th>Email</th>

              <th>Location</th>

              <th>Deliveries</th>

              <th>Active Pickups</th>

              <th>Rating</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {filteredVolunteers.map(
              (volunteer) => (

                <tr key={volunteer.id}>

                  <td>
                    {volunteer.id}
                  </td>


                  <td>

                    <strong>
                      {volunteer.name}
                    </strong>

                  </td>


                  <td>
                    📧 {volunteer.email}
                  </td>


                  <td>
                    📍 {volunteer.location}
                  </td>


                  <td>

                    <strong>
                      📦 {volunteer.deliveries}
                    </strong>

                  </td>


                  <td>

                    <strong>
                      🚴 {volunteer.activePickups}
                    </strong>

                  </td>


                  <td>

                    <strong>
                      ⭐ {volunteer.rating}
                    </strong>

                  </td>


                  <td>

                    <span
                      className={
                        volunteer.status === "Active"
                          ? "user-active"
                          : "user-blocked"
                      }
                    >

                      {volunteer.status === "Active"
                        ? "🟢 Active"
                        : "🔴 Blocked"}

                    </span>

                  </td>


                  <td>

                    <button
                      className="user-action-button"
                      onClick={() =>
                        toggleStatus(
                          volunteer.id
                        )
                      }
                    >

                      {volunteer.status === "Active"
                        ? "🚫 Block"
                        : "✅ Unblock"}

                    </button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>


        {filteredVolunteers.length === 0 && (

          <div className="no-users">

            🔍 No volunteers found.

          </div>

        )}

      </div>

    </div>

  );

}

export default ManageVolunteers;