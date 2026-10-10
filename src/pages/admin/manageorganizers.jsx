import React, { useState } from "react";

function ManageOrganizers() {

  const [search, setSearch] = useState("");

  const [organizers, setOrganizers] = useState([

    {
      id: 1,
      name: "Rahul Events",
      email: "rahulevents@gmail.com",
      location: "Ghatkesar",
      events: 18,
      donations: 35,
      status: "Active"
    },

    {
      id: 2,
      name: "ABC College",
      email: "events@abccollege.com",
      location: "Medipally",
      events: 12,
      donations: 24,
      status: "Active"
    },

    {
      id: 3,
      name: "Tech Events",
      email: "techevents@gmail.com",
      location: "Uppal",
      events: 27,
      donations: 48,
      status: "Active"
    },

    {
      id: 4,
      name: "Grand Celebrations",
      email: "grandcelebrations@gmail.com",
      location: "Hyderabad",
      events: 9,
      donations: 16,
      status: "Blocked"
    },

    {
      id: 5,
      name: "Sunrise Events",
      email: "sunriseevents@gmail.com",
      location: "ECIL",
      events: 15,
      donations: 29,
      status: "Active"
    }

  ]);


  // BLOCK / UNBLOCK

  const toggleStatus = (id) => {

    setOrganizers(

      organizers.map((organizer) => {

        if (organizer.id === id) {

          return {
            ...organizer,
            status:
              organizer.status === "Active"
                ? "Blocked"
                : "Active"
          };

        }

        return organizer;

      })

    );

  };


  // SEARCH

  const filteredOrganizers =
    organizers.filter((organizer) => {

      return (

        organizer.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        organizer.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        organizer.location
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
            🎉 Manage Organizers
          </h1>

          <p>
            Manage event organizers and their food donations.
          </p>

        </div>

      </div>


      {/* SEARCH */}

      <div className="admin-user-controls">

        <input
          type="text"
          placeholder="🔍 Search organizer, email or location..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>


      {/* ORGANIZER TABLE */}

      <div className="admin-user-table-container">

        <table className="admin-user-table">

          <thead>

            <tr>

              <th>
                #
              </th>

              <th>
                Organizer
              </th>

              <th>
                Email
              </th>

              <th>
                Location
              </th>

              <th>
                Events
              </th>

              <th>
                Donations
              </th>

              <th>
                Status
              </th>

              <th>
                Action
              </th>

            </tr>

          </thead>


          <tbody>

            {filteredOrganizers.map(
              (organizer) => (

                <tr key={organizer.id}>

                  <td>
                    {organizer.id}
                  </td>


                  <td>

                    <strong>
                      {organizer.name}
                    </strong>

                  </td>


                  <td>
                    📧 {organizer.email}
                  </td>


                  <td>
                    📍 {organizer.location}
                  </td>


                  <td>

                    <strong>
                      🎉 {organizer.events}
                    </strong>

                  </td>


                  <td>

                    <strong>
                      🍛 {organizer.donations}
                    </strong>

                  </td>


                  <td>

                    <span
                      className={
                        organizer.status === "Active"
                          ? "user-active"
                          : "user-blocked"
                      }
                    >

                      {organizer.status === "Active"
                        ? "🟢 Active"
                        : "🔴 Blocked"}

                    </span>

                  </td>


                  <td>

                    <button
                      className="user-action-button"
                      onClick={() =>
                        toggleStatus(
                          organizer.id
                        )
                      }
                    >

                      {organizer.status === "Active"
                        ? "🚫 Block"
                        : "✅ Unblock"}

                    </button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>


        {filteredOrganizers.length === 0 && (

          <div className="no-users">

            🔍 No organizers found.

          </div>

        )}

      </div>

    </div>

  );

}

export default ManageOrganizers;