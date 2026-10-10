import React, { useState } from "react";

function ManageDonations() {

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [donations, setDonations] = useState([

    {
      id: 1,
      foodName: "Vegetable Biryani",
      event: "Wedding Reception",
      organizer: "Rahul Events",
      quantity: "25 KG",
      meals: 100,
      pickupLocation: "Ghatkesar",
      ngo: "Hope Foundation NGO",
      volunteer: "Priya Sharma",
      status: "Delivered"
    },

    {
      id: 2,
      foodName: "Rice & Dal",
      event: "College Event",
      organizer: "ABC College",
      quantity: "18 KG",
      meals: 75,
      pickupLocation: "Medipally",
      ngo: "Helping Hands Orphanage",
      volunteer: "Arjun Reddy",
      status: "On The Way"
    },

    {
      id: 3,
      foodName: "Chapati & Curry",
      event: "Corporate Event",
      organizer: "Tech Events",
      quantity: "30 KG",
      meals: 120,
      pickupLocation: "Uppal",
      ngo: "Care & Share NGO",
      volunteer: "Sneha Rao",
      status: "Picked Up"
    },

    {
      id: 4,
      foodName: "Fried Rice",
      event: "Birthday Party",
      organizer: "Sunrise Events",
      quantity: "15 KG",
      meals: 60,
      pickupLocation: "ECIL",
      ngo: "Food For All Foundation",
      volunteer: "Ananya Patel",
      status: "Available"
    },

    {
      id: 5,
      foodName: "Pulao & Curry",
      event: "Community Function",
      organizer: "Grand Celebrations",
      quantity: "20 KG",
      meals: 80,
      pickupLocation: "Hyderabad",
      ngo: "Little Stars Children's Home",
      volunteer: "Kiran Kumar",
      status: "Cancelled"
    }

  ]);


  // UPDATE STATUS

  const updateStatus = (id, newStatus) => {

    setDonations(

      donations.map((donation) => {

        if (donation.id === id) {

          return {
            ...donation,
            status: newStatus
          };

        }

        return donation;

      })

    );

  };


  // FILTER

  const filteredDonations =
    donations.filter((donation) => {

      const matchesSearch =

        donation.foodName
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        donation.event
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        donation.organizer
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        donation.ngo
          .toLowerCase()
          .includes(search.toLowerCase());


      const matchesStatus =
        statusFilter === "All" ||
        donation.status === statusFilter;


      return matchesSearch && matchesStatus;

    });


  // STATUS CLASS

  const getStatusClass = (status) => {

    if (status === "Delivered") {
      return "donation-delivered";
    }

    if (status === "On The Way") {
      return "donation-onway";
    }

    if (status === "Picked Up") {
      return "donation-picked";
    }

    if (status === "Available") {
      return "donation-available";
    }

    return "donation-cancelled";

  };


  return (

    <div className="admin-dashboard">

      {/* HEADER */}

      <div className="admin-header">

        <div>

          <h1>
            🍛 Manage Food Donations
          </h1>

          <p>
            Monitor surplus food donations and their rescue status.
          </p>

        </div>

      </div>


      {/* CONTROLS */}

      <div className="admin-user-controls">

        <input
          type="text"
          placeholder="🔍 Search food, event, organizer or NGO..."
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

          <option value="Available">
            Available
          </option>

          <option value="Picked Up">
            Picked Up
          </option>

          <option value="On The Way">
            On The Way
          </option>

          <option value="Delivered">
            Delivered
          </option>

          <option value="Cancelled">
            Cancelled
          </option>

        </select>

      </div>


      {/* DONATION TABLE */}

      <div className="admin-user-table-container">

        <table className="admin-user-table">

          <thead>

            <tr>

              <th>#</th>

              <th>Food</th>

              <th>Event</th>

              <th>Organizer</th>

              <th>Quantity</th>

              <th>Meals</th>

              <th>Pickup</th>

              <th>NGO</th>

              <th>Volunteer</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {filteredDonations.map(
              (donation) => (

                <tr key={donation.id}>

                  <td>
                    {donation.id}
                  </td>


                  <td>

                    <strong>
                      🍛 {donation.foodName}
                    </strong>

                  </td>


                  <td>
                    🎉 {donation.event}
                  </td>


                  <td>
                    {donation.organizer}
                  </td>


                  <td>

                    <strong>
                      ⚖️ {donation.quantity}
                    </strong>

                  </td>


                  <td>
                    🍽️ {donation.meals}
                  </td>


                  <td>
                    📍 {donation.pickupLocation}
                  </td>


                  <td>
                    🏢 {donation.ngo}
                  </td>


                  <td>
                    🚴 {donation.volunteer}
                  </td>


                  <td>

                    <span
                      className={
                        getStatusClass(
                          donation.status
                        )
                      }
                    >

                      {donation.status === "Delivered"
                        ? "❤️ Delivered"
                        : donation.status === "On The Way"
                        ? "🚚 On The Way"
                        : donation.status === "Picked Up"
                        ? "📦 Picked Up"
                        : donation.status === "Available"
                        ? "🟢 Available"
                        : "🔴 Cancelled"}

                    </span>

                  </td>


                  <td>

                    {donation.status === "Available" && (

                      <button
                        className="ngo-verify-button"
                        onClick={() =>
                          updateStatus(
                            donation.id,
                            "Picked Up"
                          )
                        }
                      >

                        📦 Pick Up

                      </button>

                    )}


                    {donation.status === "Picked Up" && (

                      <button
                        className="ngo-verify-button"
                        onClick={() =>
                          updateStatus(
                            donation.id,
                            "On The Way"
                          )
                        }
                      >

                        🚚 Deliver

                      </button>

                    )}


                    {donation.status === "On The Way" && (

                      <button
                        className="ngo-verify-button"
                        onClick={() =>
                          updateStatus(
                            donation.id,
                            "Delivered"
                          )
                        }
                      >

                        ❤️ Complete

                      </button>

                    )}


                    {donation.status === "Delivered" && (

                      <span>
                        ✅ Complete
                      </span>

                    )}


                    {donation.status === "Cancelled" && (

                      <span>
                        ❌ Cancelled
                      </span>

                    )}

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>


        {filteredDonations.length === 0 && (

          <div className="no-users">

            🔍 No donations found.

          </div>

        )}

      </div>

    </div>

  );

}

export default ManageDonations;