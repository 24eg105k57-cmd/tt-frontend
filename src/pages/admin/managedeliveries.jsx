import React, { useState } from "react";

function ManageDeliveries() {

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [deliveries, setDeliveries] = useState([

    {
      id: 1,
      food: "Vegetable Biryani",
      quantity: "25 KG",
      pickup: "Ghatkesar",
      destination: "Hope Foundation NGO",
      volunteer: "Priya Sharma",
      deadline: "9:00 PM",
      status: "Delivered"
    },

    {
      id: 2,
      food: "Rice & Dal",
      quantity: "18 KG",
      pickup: "Medipally",
      destination: "Helping Hands Orphanage",
      volunteer: "Arjun Reddy",
      deadline: "8:30 PM",
      status: "On The Way"
    },

    {
      id: 3,
      food: "Chapati & Curry",
      quantity: "30 KG",
      pickup: "Uppal",
      destination: "Care & Share NGO",
      volunteer: "Sneha Rao",
      deadline: "10:00 PM",
      status: "Picked Up"
    },

    {
      id: 4,
      food: "Fried Rice",
      quantity: "15 KG",
      pickup: "ECIL",
      destination: "Food For All Foundation",
      volunteer: "Ananya Patel",
      deadline: "8:00 PM",
      status: "Available"
    },

    {
      id: 5,
      food: "Pulao & Curry",
      quantity: "20 KG",
      pickup: "Hyderabad",
      destination: "Little Stars Children's Home",
      volunteer: "Kiran Kumar",
      deadline: "9:30 PM",
      status: "Cancelled"
    }

  ]);


  // UPDATE STATUS

  const updateStatus = (id, newStatus) => {

    setDeliveries(

      deliveries.map((delivery) => {

        if (delivery.id === id) {

          return {
            ...delivery,
            status: newStatus
          };

        }

        return delivery;

      })

    );

  };


  // SEARCH + FILTER

  const filteredDeliveries =
    deliveries.filter((delivery) => {

      const matchesSearch =

        delivery.food
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        delivery.pickup
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        delivery.destination
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        delivery.volunteer
          .toLowerCase()
          .includes(search.toLowerCase());


      const matchesStatus =
        statusFilter === "All" ||
        delivery.status === statusFilter;


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
            🚚 Manage Deliveries
          </h1>

          <p>
            Monitor food pickup and delivery operations.
          </p>

        </div>

      </div>


      {/* CONTROLS */}

      <div className="admin-user-controls">

        <input
          type="text"
          placeholder="🔍 Search food, location, NGO or volunteer..."
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


      {/* DELIVERY TABLE */}

      <div className="admin-user-table-container">

        <table className="admin-user-table">

          <thead>

            <tr>

              <th>#</th>

              <th>Food</th>

              <th>Quantity</th>

              <th>Pickup</th>

              <th>Destination</th>

              <th>Volunteer</th>

              <th>Deadline</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {filteredDeliveries.map(
              (delivery) => (

                <tr key={delivery.id}>

                  <td>
                    {delivery.id}
                  </td>


                  <td>

                    <strong>
                      🍛 {delivery.food}
                    </strong>

                  </td>


                  <td>
                    ⚖️ {delivery.quantity}
                  </td>


                  <td>
                    📍 {delivery.pickup}
                  </td>


                  <td>
                    🏢 {delivery.destination}
                  </td>


                  <td>
                    🚴 {delivery.volunteer}
                  </td>


                  <td>
                    ⏰ {delivery.deadline}
                  </td>


                  <td>

                    <span
                      className={
                        getStatusClass(
                          delivery.status
                        )
                      }
                    >

                      {delivery.status === "Delivered"
                        ? "❤️ Delivered"
                        : delivery.status === "On The Way"
                        ? "🚚 On The Way"
                        : delivery.status === "Picked Up"
                        ? "📦 Picked Up"
                        : delivery.status === "Available"
                        ? "🟢 Available"
                        : "🔴 Cancelled"}

                    </span>

                  </td>


                  <td>

                    {delivery.status === "Available" && (

                      <button
                        className="ngo-verify-button"
                        onClick={() =>
                          updateStatus(
                            delivery.id,
                            "Picked Up"
                          )
                        }
                      >

                        📦 Pickup

                      </button>

                    )}


                    {delivery.status === "Picked Up" && (

                      <button
                        className="ngo-verify-button"
                        onClick={() =>
                          updateStatus(
                            delivery.id,
                            "On The Way"
                          )
                        }
                      >

                        🚚 Start

                      </button>

                    )}


                    {delivery.status === "On The Way" && (

                      <button
                        className="ngo-verify-button"
                        onClick={() =>
                          updateStatus(
                            delivery.id,
                            "Delivered"
                          )
                        }
                      >

                        ❤️ Complete

                      </button>

                    )}


                    {delivery.status === "Delivered" && (

                      <span>
                        ✅ Completed
                      </span>

                    )}


                    {delivery.status === "Cancelled" && (

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


        {filteredDeliveries.length === 0 && (

          <div className="no-users">

            🔍 No deliveries found.

          </div>

        )}

      </div>

    </div>

  );

}

export default ManageDeliveries;