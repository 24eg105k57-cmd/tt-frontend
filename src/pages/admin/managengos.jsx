import React, { useState } from "react";

function ManageNGOs() {

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [ngos, setNgos] = useState([

    {
      id: 1,
      name: "Hope Foundation NGO",
      type: "NGO",
      location: "Medipally",
      contact: "9876543210",
      mealsNeeded: 100,
      status: "Verified"
    },

    {
      id: 2,
      name: "Helping Hands Orphanage",
      type: "Orphanage",
      location: "Uppal",
      contact: "9876501234",
      mealsNeeded: 75,
      status: "Verified"
    },

    {
      id: 3,
      name: "Care & Share NGO",
      type: "NGO",
      location: "LB Nagar",
      contact: "9988776655",
      mealsNeeded: 120,
      status: "Pending"
    },

    {
      id: 4,
      name: "Little Stars Children's Home",
      type: "Orphanage",
      location: "Ghatkesar",
      contact: "9123456780",
      mealsNeeded: 60,
      status: "Verified"
    },

    {
      id: 5,
      name: "Food For All Foundation",
      type: "NGO",
      location: "ECIL",
      contact: "9012345678",
      mealsNeeded: 150,
      status: "Blocked"
    }

  ]);


  // VERIFY / BLOCK NGO

  const updateStatus = (id, newStatus) => {

    setNgos(

      ngos.map((ngo) => {

        if (ngo.id === id) {

          return {
            ...ngo,
            status: newStatus
          };

        }

        return ngo;

      })

    );

  };


  // FILTER

  const filteredNGOs = ngos.filter((ngo) => {

    const matchesSearch =
      ngo.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      ngo.location
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesStatus =
      statusFilter === "All" ||
      ngo.status === statusFilter;


    return matchesSearch && matchesStatus;

  });


  return (

    <div className="admin-dashboard">

      {/* HEADER */}

      <div className="admin-header">

        <div>

          <h1>
            🏢 Manage NGOs & Orphanages
          </h1>

          <p>
            Verify and manage organizations receiving rescued food.
          </p>

        </div>

      </div>


      {/* CONTROLS */}

      <div className="admin-user-controls">

        <input
          type="text"
          placeholder="🔍 Search NGO or location..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >

          <option value="All">
            All Status
          </option>

          <option value="Verified">
            Verified
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Blocked">
            Blocked
          </option>

        </select>

      </div>


      {/* NGO TABLE */}

      <div className="admin-user-table-container">

        <table className="admin-user-table">

          <thead>

            <tr>

              <th>
                #
              </th>

              <th>
                Organization
              </th>

              <th>
                Type
              </th>

              <th>
                Location
              </th>

              <th>
                Contact
              </th>

              <th>
                Meals Needed
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

            {filteredNGOs.map((ngo) => (

              <tr key={ngo.id}>

                <td>
                  {ngo.id}
                </td>


                <td>

                  <strong>
                    {ngo.name}
                  </strong>

                </td>


                <td>

                  <span className="user-role">
                    {ngo.type}
                  </span>

                </td>


                <td>
                  📍 {ngo.location}
                </td>


                <td>
                  📞 {ngo.contact}
                </td>


                <td>

                  <strong>
                    🍛 {ngo.mealsNeeded}
                  </strong>

                </td>


                <td>

                  <span
                    className={
                      ngo.status === "Verified"
                        ? "user-active"
                        : ngo.status === "Blocked"
                        ? "user-blocked"
                        : "ngo-pending"
                    }
                  >

                    {ngo.status === "Verified"
                      ? "🟢 Verified"
                      : ngo.status === "Pending"
                      ? "🟡 Pending"
                      : "🔴 Blocked"}

                  </span>

                </td>


                <td>

                  <div className="ngo-actions">


                    {ngo.status === "Pending" && (

                      <button
                        className="ngo-verify-button"
                        onClick={() =>
                          updateStatus(
                            ngo.id,
                            "Verified"
                          )
                        }
                      >

                        ✅ Verify

                      </button>

                    )}


                    {ngo.status !== "Blocked" && (

                      <button
                        className="user-action-button"
                        onClick={() =>
                          updateStatus(
                            ngo.id,
                            "Blocked"
                          )
                        }
                      >

                        🚫 Block

                      </button>

                    )}


                    {ngo.status === "Blocked" && (

                      <button
                        className="ngo-verify-button"
                        onClick={() =>
                          updateStatus(
                            ngo.id,
                            "Verified"
                          )
                        }
                      >

                        🔓 Unblock

                      </button>

                    )}

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>


        {filteredNGOs.length === 0 && (

          <div className="no-users">

            🔍 No NGOs or orphanages found.

          </div>

        )}

      </div>

    </div>

  );

}

export default ManageNGOs;