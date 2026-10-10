import React, { useEffect, useState } from "react";

function MyDonations() {

  const [filter, setFilter] = useState("all");
  const [donations, setDonations] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8082/api/donations")
      .then((response) => response.json())
      .then((data) => {
        setDonations(data);
      })
      .catch((error) => {
        console.error("Error loading donations:", error);
        alert("Cannot load donations");
      });

  }, []);


  const filteredDonations =
    donations.filter((donation) => {

      if (filter === "all") {
        return true;
      }

      return donation.status === filter;
    });


  const cancelDonation = async (id) => {

    const confirmed =
      window.confirm(
        "Are you sure you want to cancel this donation?"
      );

    if (!confirmed) {
      return;
    }

    try {

      const response = await fetch(
        `http://localhost:8082/api/donations/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status: "CANCELLED"
          })
        }
      );

      if (!response.ok) {
        alert("Failed to cancel donation");
        return;
      }

      const updatedDonation = await response.json();

      setDonations(
        donations.map((donation) =>
          donation.id === id
            ? updatedDonation
            : donation
        )
      );

    } catch (error) {

      console.error(error);
      alert("Cannot connect to server");

    }

  };


  const viewDonation = (donation) => {

    alert(
      `Food: ${donation.foodName}\n` +
      `Quantity: ${donation.quantity}\n` +
      `Event: ${donation.eventName}\n` +
      `Location: ${donation.pickupLocation}\n` +
      `Status: ${donation.status}`
    );

  };


  return (

    <div className="my-donations-page">

      <div className="donations-header">

        <div>

          <h1>
            🍛 My Food Donations
          </h1>

          <p>
            Manage all the surplus food donations
            created for your events.
          </p>

        </div>

        <button
          className="add-donation-button"
          onClick={() =>
            window.location.href =
            "/organizer/add-donation"
          }
        >
          + Add New Donation
        </button>

      </div>


      <div className="donation-summary">

        <div className="summary-card">
          <span>🍛</span>
          <div>
            <h2>{donations.length}</h2>
            <p>Total Donations</p>
          </div>
        </div>


        <div className="summary-card">
          <span>🟢</span>
          <div>
            <h2>
              {
                donations.filter(
                  d => d.status === "AVAILABLE"
                ).length
              }
            </h2>
            <p>Available</p>
          </div>
        </div>


        <div className="summary-card">
          <span>🚚</span>
          <div>
            <h2>
              {
                donations.filter(
                  d => d.status === "ACCEPTED"
                ).length
              }
            </h2>
            <p>Accepted</p>
          </div>
        </div>


        <div className="summary-card">
          <span>❤️</span>
          <div>
            <h2>
              {
                donations.filter(
                  d => d.status === "DELIVERED"
                ).length
              }
            </h2>
            <p>Delivered</p>
          </div>
        </div>

      </div>


      <div className="donation-filter">

        <button
          className={filter === "all" ? "active-filter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={
            filter === "AVAILABLE"
              ? "active-filter"
              : ""
          }
          onClick={() => setFilter("AVAILABLE")}
        >
          Available
        </button>

        <button
          className={
            filter === "ACCEPTED"
              ? "active-filter"
              : ""
          }
          onClick={() => setFilter("ACCEPTED")}
        >
          Accepted
        </button>

        <button
          className={
            filter === "DELIVERED"
              ? "active-filter"
              : ""
          }
          onClick={() => setFilter("DELIVERED")}
        >
          Delivered
        </button>

        <button
          className={
            filter === "CANCELLED"
              ? "active-filter"
              : ""
          }
          onClick={() => setFilter("CANCELLED")}
        >
          Cancelled
        </button>

      </div>


      <div className="donations-list">

        {filteredDonations.length === 0 ? (

          <div className="no-donations">

            <div>🍽️</div>

            <h2>
              No Donations Found
            </h2>

            <p>
              There are no donations in this category.
            </p>

          </div>

        ) : (

          filteredDonations.map((donation) => (

            <div
              className="donation-card"
              key={donation.id}
            >

              <div className="donation-card-top">

                <div>

                  <h2>
                    🍛 {donation.foodName}
                  </h2>

                  <p>
                    🎉 {donation.eventName}
                  </p>

                </div>


                <span
                  className={`donation-status ${donation.status.toLowerCase()}`}
                >
                  {donation.status}
                </span>

              </div>


              <div className="donation-details">

                <div>
                  <strong>
                    {donation.quantity}
                  </strong>
                  <span>Quantity</span>
                </div>


                <div>
                  <strong>
                    {donation.meals || 0}
                  </strong>
                  <span>Meals</span>
                </div>


                <div>
                  <strong>
                    📍 {donation.pickupLocation}
                  </strong>
                  <span>Pickup Location</span>
                </div>


                <div>
                  <strong>
                    📅 {donation.eventName}
                  </strong>
                  <span>Event</span>
                </div>

              </div>


              <div className="donation-date">

                📅 Donation ID: {donation.id}

              </div>


              <div className="donation-actions">

                <button
                  onClick={() =>
                    viewDonation(donation)
                  }
                >
                  👁️ View
                </button>


                {donation.status === "AVAILABLE" && (

                  <button
                    onClick={() =>
                      alert(
                        "Edit feature will be connected later."
                      )
                    }
                  >
                    ✏️ Edit
                  </button>

                )}


                {donation.status === "AVAILABLE" && (

                  <button
                    className="cancel-button"
                    onClick={() =>
                      cancelDonation(donation.id)
                    }
                  >
                    ❌ Cancel
                  </button>

                )}

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default MyDonations;