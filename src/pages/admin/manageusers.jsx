import React, { useState } from "react";

function ManageUsers() {

  const [search, setSearch] = useState("");

  const [roleFilter, setRoleFilter] = useState("All");

  const [users, setUsers] = useState([

    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      role: "Organizer",
      status: "Active"
    },

    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      role: "Volunteer",
      status: "Active"
    },

    {
      id: 3,
      name: "Anjali Reddy",
      email: "anjali@gmail.com",
      role: "NGO",
      status: "Active"
    },

    {
      id: 4,
      name: "Arjun Rao",
      email: "arjun@gmail.com",
      role: "Volunteer",
      status: "Blocked"
    },

    {
      id: 5,
      name: "Sneha Patel",
      email: "sneha@gmail.com",
      role: "Organizer",
      status: "Active"
    }

  ]);


  // BLOCK / UNBLOCK USER

  const toggleStatus = (id) => {

    setUsers(

      users.map((user) => {

        if (user.id === id) {

          return {
            ...user,
            status:
              user.status === "Active"
                ? "Blocked"
                : "Active"
          };

        }

        return user;

      })

    );

  };


  // FILTER USERS

  const filteredUsers = users.filter((user) => {

    const matchesSearch =
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      user.email
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesRole =
      roleFilter === "All" ||
      user.role === roleFilter;


    return matchesSearch && matchesRole;

  });


  return (

    <div className="admin-dashboard">

      {/* HEADER */}

      <div className="admin-header">

        <div>

          <h1>
            👥 Manage Users
          </h1>

          <p>
            View and manage all registered users.
          </p>

        </div>

      </div>


      {/* SEARCH + FILTER */}

      <div className="admin-user-controls">

        <input
          type="text"
          placeholder="🔍 Search by name or email..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <select
          value={roleFilter}
          onChange={(e) =>
            setRoleFilter(e.target.value)
          }
        >

          <option value="All">
            All Roles
          </option>

          <option value="Organizer">
            Organizer
          </option>

          <option value="NGO">
            NGO
          </option>

          <option value="Volunteer">
            Volunteer
          </option>

        </select>

      </div>


      {/* USERS TABLE */}

      <div className="admin-user-table-container">

        <table className="admin-user-table">

          <thead>

            <tr>

              <th>
                #
              </th>

              <th>
                User
              </th>

              <th>
                Email
              </th>

              <th>
                Role
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

            {filteredUsers.map((user) => (

              <tr key={user.id}>

                <td>
                  {user.id}
                </td>

                <td>

                  <strong>
                    {user.name}
                  </strong>

                </td>

                <td>
                  {user.email}
                </td>

                <td>

                  <span className="user-role">

                    {user.role}

                  </span>

                </td>

                <td>

                  <span
                    className={
                      user.status === "Active"
                        ? "user-active"
                        : "user-blocked"
                    }
                  >

                    {user.status}

                  </span>

                </td>

                <td>

                  <button
                    className="user-action-button"
                    onClick={() =>
                      toggleStatus(user.id)
                    }
                  >

                    {user.status === "Active"
                      ? "🚫 Block"
                      : "✅ Unblock"}

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>


        {filteredUsers.length === 0 && (

          <div className="no-users">

            🔍 No users found.

          </div>

        )}

      </div>

    </div>

  );

}

export default ManageUsers;