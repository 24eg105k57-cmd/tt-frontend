import React, { useState } from "react";

function FoodRescueHistory() {

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [history] = useState([

    {
      id: 1,
      food: "Vegetable Biryani",
      quantity: "25 KG",
      meals: 100,
      event: "Wedding Reception",
      organizer: "Rahul Events",
      volunteer: "Priya Sharma",
      ngo: "Hope Foundation NGO",
      location: "Ghatkesar",
      date: "25 Aug 2026",
      status: "Delivered"
    },

    {
      id: 2,
      food: "Rice & Dal",
      quantity: "18 KG",
      meals: 75,
      event: "College Event",
      organizer: "ABC College",
      volunteer: "Arjun Reddy",
      ngo: "Helping Hands Orphanage",
      location: "Medipally",
      date: "24 Aug 2026",
      status: "Delivered"
    },

    {
      id: 3,
      food: "Chapati & Curry",
      quantity: "30 KG",
      meals: 120,
      event: "Corporate Event",
      organizer: "Tech Events",
      volunteer: "Sneha Rao",
      ngo: "Care & Share NGO",
      location: "Uppal",
      date: "23 Aug 2026",
      status: "Delivered"
    },

    {
      id: 4,
      food: "Fried Rice",
      quantity: "15 KG",
      meals: 60,
      event: "Birthday Party",
      organizer: "Sunrise Events",
      volunteer: "Ananya Patel",
      ngo: "Food For All Foundation",
      location: "ECIL",
      date: "22 Aug 2026",
      status: "Delivered"
    },

    {
      id: 5,
      food: "Pulao & Curry",
      quantity: "20 KG",
      meals: 80,
      event: "Community Function",
      organizer: "Grand Celebrations",
      volunteer: "Kiran Kumar",
      ngo: "Little Stars Children's Home",
      location: "Hyderabad",
      date: "21 Aug 2026",
      status: "Delivered"
    }

  ]);


  // SEARCH + FILTER

  const filteredHistory = history.filter((item) => {

    const matchesSearch =

      item.food
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.event
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.organizer
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.ngo
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.volunteer
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesFilter =
      filter === "All" ||
      item.status === filter;


    return matchesSearch && matchesFilter;

  });


  // STATISTICS

  const totalMeals = history.reduce(
    (total, item) =>
      total + item.meals,
    0
  );


  const totalFood = history.reduce(
    (total, item) =>
      total + parseInt(item.quantity),
    0
  );


  return (

    <div className="history-page">

      {/* HEADER */}

      <div className="history-header">

        <div>

          <h1>
            📋 Food Rescue History
          </h1>

          <p>
            Track successfully rescued food and completed deliveries.
          </p>

        </div>

      </div>


      {/* STATISTICS */}

      <div className="history-statistics">

        <div className="history-stat-card">

          <span>
            🍛
          </span>

          <div>

            <h2>
              {history.length}
            </h2>

            <p>
              Successful Rescues
            </p>

          </div>

        </div>


        <div className="history-stat-card">

          <span>
            ⚖️
          </span>

          <div>

            <h2>
              {totalFood} KG
            </h2>

            <p>
              Food Rescued
            </p>

          </div>

        </div>


        <div className="history-stat-card">

          <span>
            🍽️
          </span>

          <div>

            <h2>
              {totalMeals}
            </h2>

            <p>
              Meals Provided
            </p>

          </div>

        </div>


        <div className="history-stat-card">

          <span>
            ❤️
          </span>

          <div>

            <h2>
              100%
            </h2>

            <p>
              Successful Delivery
            </p>

          </div>

        </div>

      </div>


      {/* CONTROLS */}

      <div className="history-controls">

        <input
          type="text"
          placeholder="🔍 Search food, event, NGO..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >

          <option value="All">
            All
          </option>

          <option value="Delivered">
            Delivered
          </option>

        </select>

      </div>


      {/* HISTORY CARDS */}

      <div className="history-list">

        {filteredHistory.length === 0 ? (

          <div className="no-history">

            <div>
              🔍
            </div>

            <h2>
              No Records Found
            </h2>

            <p>
              Try another search.
            </p>

          </div>

        ) : (

          filteredHistory.map((item) => (

            <div
              className="history-card"
              key={item.id}
            >

              {/* TOP */}

              <div className="history-card-top">

                <div>

                  <h2>
                    🍛 {item.food}
                  </h2>

                  <p>
                    🎉 {item.event}
                  </p>

                </div>


                <span className="history-delivered">

                  ❤️ Delivered

                </span>

              </div>


              {/* DETAILS */}

              <div className="history-details">

                <div>

                  <strong>
                    {item.quantity}
                  </strong>

                  <span>
                    Food Rescued
                  </span>

                </div>


                <div>

                  <strong>
                    {item.meals}
                  </strong>

                  <span>
                    Meals
                  </span>

                </div>


                <div>

                  <strong>
                    📍 {item.location}
                  </strong>

                  <span>
                    Pickup Location
                  </span>

                </div>


                <div>

                  <strong>
                    📅 {item.date}
                  </strong>

                  <span>
                    Rescue Date
                  </span>

                </div>

              </div>


              {/* JOURNEY */}

              <div className="history-journey">

                <div>

                  <span>
                    👤
                  </span>

                  <div>

                    <small>
                      Organizer
                    </small>

                    <strong>
                      {item.organizer}
                    </strong>

                  </div>

                </div>


                <div className="history-arrow">
                  →
                </div>


                <div>

                  <span>
                    🚴
                  </span>

                  <div>

                    <small>
                      Volunteer
                    </small>

                    <strong>
                      {item.volunteer}
                    </strong>

                  </div>

                </div>


                <div className="history-arrow">
                  →
                </div>


                <div>

                  <span>
                    🏢
                  </span>

                  <div>

                    <small>
                      NGO / Orphanage
                    </small>

                    <strong>
                      {item.ngo}
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default FoodRescueHistory;