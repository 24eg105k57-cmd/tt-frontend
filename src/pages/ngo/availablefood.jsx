import React, { useState } from "react";

function AvailableFood() {

  const [search, setSearch] = useState("");

  const [foodType, setFoodType] = useState("all");

  const [activeTab, setActiveTab] = useState("available");

  const [requestedFood, setRequestedFood] = useState([]);


  const donations = [

    {
      id: 1,
      foodName: "Vegetable Biryani",
      foodType: "Vegetarian",
      quantity: "25 KG",
      meals: 100,
      event: "Wedding Reception",
      location: "Ghatkesar",
      distance: "2.4 km",
      pickupTime: "Before 9:00 PM",
      organizer: "Rahul Events",
      freshness: "Fresh"
    },

    {
      id: 2,
      foodName: "Rice & Dal",
      foodType: "Vegetarian",
      quantity: "18 KG",
      meals: 75,
      event: "College Event",
      location: "Medipally",
      distance: "4.1 km",
      pickupTime: "Before 8:30 PM",
      organizer: "ABC College",
      freshness: "Fresh"
    },

    {
      id: 3,
      foodName: "Chicken Biryani",
      foodType: "Non-Vegetarian",
      quantity: "20 KG",
      meals: 80,
      event: "Corporate Event",
      location: "Uppal",
      distance: "6.2 km",
      pickupTime: "Before 10:00 PM",
      organizer: "Tech Events",
      freshness: "Fresh"
    },

    {
      id: 4,
      foodName: "Chapati & Vegetable Curry",
      foodType: "Vegetarian",
      quantity: "30 KG",
      meals: 120,
      event: "Birthday Party",
      location: "LB Nagar",
      distance: "7.5 km",
      pickupTime: "Before 8:00 PM",
      organizer: "Family Events",
      freshness: "Fresh"
    }

  ];


  const filteredDonations = donations.filter(
    (food) => {

      const matchesSearch =

        food.foodName
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        food.location
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        food.event
          .toLowerCase()
          .includes(search.toLowerCase());


      const matchesType =

        foodType === "all" ||
        food.foodType === foodType;


      return (
        matchesSearch &&
        matchesType
      );

    }
  );


  const requestFood = (food) => {

    if (
      requestedFood.some(
        (item) => item.id === food.id
      )
    ) {

      alert(
        "You have already requested this donation."
      );

      return;

    }


    setRequestedFood([
      ...requestedFood,
      food
    ]);


    alert(
      `Request sent to ${food.organizer} for ${food.foodName}!`
    );

  };


  return (

    <div className="available-food-page">


      {/* HEADER */}

      <div className="available-food-header">

        <div>

          <h1>
            🍛 Available Food
          </h1>

          <p>
            Find surplus food donations available
            near your organization.
          </p>

        </div>

      </div>


      {/* SUMMARY */}

      <div className="food-summary">

        <div className="food-summary-card">

          <span>
            🍛
          </span>

          <div>

            <h2>
              {donations.length}
            </h2>

            <p>
              Available Donations
            </p>

          </div>

        </div>


        <div className="food-summary-card">

          <span>
            🍽️
          </span>

          <div>

            <h2>
              375
            </h2>

            <p>
              Total Meals
            </p>

          </div>

        </div>


        <div className="food-summary-card">

          <span>
            📍
          </span>

          <div>

            <h2>
              2.4 KM
            </h2>

            <p>
              Nearest Donation
            </p>

          </div>

        </div>


        <div className="food-summary-card">

          <span>
            ❤️
          </span>

          <div>

            <h2>
              {requestedFood.length}
            </h2>

            <p>
              My Requests
            </p>

          </div>

        </div>

      </div>


      {/* SEARCH + FILTER */}

      <div className="food-controls">


        <div className="food-search">

          🔎

          <input
            type="text"
            placeholder="Search food, event or location..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <select
          value={foodType}
          onChange={(e) =>
            setFoodType(e.target.value)
          }
        >

          <option value="all">
            All Food
          </option>

          <option value="Vegetarian">
            🥗 Vegetarian
          </option>

          <option value="Non-Vegetarian">
            🍗 Non-Vegetarian
          </option>

        </select>

      </div>


      {/* TABS */}

      <div className="food-tabs">

        <button
          className={
            activeTab === "available"
              ? "active-food-tab"
              : ""
          }
          onClick={() =>
            setActiveTab("available")
          }
        >

          🍛 Available Food

        </button>


        <button
          className={
            activeTab === "requested"
              ? "active-food-tab"
              : ""
          }
          onClick={() =>
            setActiveTab("requested")
          }
        >

          ❤️ My Requests

        </button>

      </div>


      {/* AVAILABLE FOOD */}

      {activeTab === "available" && (

        <div className="available-food-list">

          {filteredDonations.length === 0 ? (

            <div className="no-food">

              <div>
                🍽️
              </div>

              <h2>
                No Food Found
              </h2>

              <p>
                Try changing your search or filter.
              </p>

            </div>

          ) : (

            filteredDonations.map(
              (food) => (

                <div
                  className="food-donation-card"
                  key={food.id}
                >


                  {/* TOP */}

                  <div className="food-card-top">

                    <div>

                      <h2>
                        🍛 {food.foodName}
                      </h2>

                      <p>
                        🎉 {food.event}
                      </p>

                    </div>


                    <span className="fresh-badge">

                      🟢 {food.freshness}

                    </span>

                  </div>


                  {/* DETAILS */}

                  <div className="food-details">

                    <div>

                      <strong>
                        {food.quantity}
                      </strong>

                      <span>
                        Quantity
                      </span>

                    </div>


                    <div>

                      <strong>
                        {food.meals}
                      </strong>

                      <span>
                        Meals
                      </span>

                    </div>


                    <div>

                      <strong>
                        {food.foodType}
                      </strong>

                      <span>
                        Food Type
                      </span>

                    </div>


                    <div>

                      <strong>
                        📏 {food.distance}
                      </strong>

                      <span>
                        Distance
                      </span>

                    </div>

                  </div>


                  {/* LOCATION */}

                  <div className="food-location">

                    <div>

                      📍

                      <strong>
                        Pickup Location
                      </strong>

                      <span>
                        {food.location}
                      </span>

                    </div>


                    <div>

                      ⏰

                      <strong>
                        Pickup Deadline
                      </strong>

                      <span>
                        {food.pickupTime}
                      </span>

                    </div>


                    <div>

                      👤

                      <strong>
                        Organizer
                      </strong>

                      <span>
                        {food.organizer}
                      </span>

                    </div>

                  </div>


                  {/* ACTIONS */}

                  <div className="food-card-actions">

                    <button
                      className="view-food-button"
                      onClick={() =>
                        alert(
                          `Food: ${food.foodName}\n` +
                          `Quantity: ${food.quantity}\n` +
                          `Meals: ${food.meals}\n` +
                          `Pickup: ${food.location}\n` +
                          `Deadline: ${food.pickupTime}`
                        )
                      }
                    >

                      👁️ View Details

                    </button>


                    <button
                      className="request-food-button"
                      onClick={() =>
                        requestFood(food)
                      }
                    >

                      ❤️ Request Food

                    </button>

                  </div>


                </div>

              )
            )

          )}

        </div>

      )}


      {/* REQUESTED FOOD */}

      {activeTab === "requested" && (

        <div className="requested-food-list">

          {requestedFood.length === 0 ? (

            <div className="no-food">

              <div>
                ❤️
              </div>

              <h2>
                No Food Requests
              </h2>

              <p>
                You haven't requested any food yet.
              </p>

            </div>

          ) : (

            requestedFood.map(
              (food) => (

                <div
                  className="food-donation-card"
                  key={food.id}
                >

                  <div className="food-card-top">

                    <div>

                      <h2>
                        🍛 {food.foodName}
                      </h2>

                      <p>
                        {food.event}
                      </p>

                    </div>


                    <span className="request-status">

                      🟡 Request Sent

                    </span>

                  </div>


                  <div className="food-details">

                    <div>

                      <strong>
                        {food.quantity}
                      </strong>

                      <span>
                        Quantity
                      </span>

                    </div>


                    <div>

                      <strong>
                        {food.meals}
                      </strong>

                      <span>
                        Meals
                      </span>

                    </div>


                    <div>

                      <strong>
                        📍 {food.location}
                      </strong>

                      <span>
                        Pickup
                      </span>

                    </div>


                    <div>

                      <strong>
                        {food.distance}
                      </strong>

                      <span>
                        Distance
                      </span>

                    </div>

                  </div>


                  <p className="request-message">

                    ⏳ Waiting for the organizer
                    to approve your request.

                  </p>

                </div>

              )
            )

          )}

        </div>

      )}

    </div>

  );

}

export default AvailableFood;