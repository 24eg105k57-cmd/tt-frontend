import React, { useState } from "react";
import NearbyMap from "../../components/nearbyMap.jsx";

import {
  FaBuilding,
  FaBell,
  FaUserCircle,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaUtensils,
  FaSearch,
  FaFilter,
  FaCheckCircle,
  FaTruck
} from "react-icons/fa";


function NGODashboard() {

  const [search, setSearch] = useState("");

  const [foodType, setFoodType] = useState("all");


  const donations = [

    {
      id: 1,
      food: "Vegetable Biryani",
      event: "Wedding Reception",
      type: "vegetarian",
      meals: 100,
      quantity: "25 KG",
      location: "Ghatkesar",
      distance: "2.4 km",
      safeUntil: "9:00 PM",
      time: "30 min ago",
      emoji: "🍛"
    },

    {
      id: 2,
      food: "Rice & Dal",
      event: "College Event",
      type: "vegetarian",
      meals: 75,
      quantity: "18 KG",
      location: "Medipally",
      distance: "4.1 km",
      safeUntil: "8:30 PM",
      time: "45 min ago",
      emoji: "🍚"
    },

    {
      id: 3,
      food: "Chapati & Curry",
      event: "Corporate Event",
      type: "vegetarian",
      meals: 120,
      quantity: "30 KG",
      location: "Uppal",
      distance: "6.2 km",
      safeUntil: "10:00 PM",
      time: "1 hour ago",
      emoji: "🥘"
    },

    {
      id: 4,
      food: "Mixed Meals",
      event: "Birthday Party",
      type: "non-vegetarian",
      meals: 50,
      quantity: "12 KG",
      location: "ECIL",
      distance: "8.5 km",
      safeUntil: "8:00 PM",
      time: "1 hour ago",
      emoji: "🍗"
    }

  ];


  const filteredDonations = donations.filter((item) => {

    const matchesSearch =
      item.food
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.location
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesType =
      foodType === "all" ||
      item.type === foodType;


    return matchesSearch && matchesType;

  });


  const handleRequest = (food) => {

    alert(
      `Food request sent for ${food.food}!`
    );

  };


  return (

    <div className="ngo-dashboard">


      {/* ================= HEADER ================= */}

      <div className="ngo-header">

        <div>

          <h1>
            Welcome, NGO! 👋
          </h1>
          
         <NearbyMap />

          <p>
            Find surplus food available near your organization.
          </p>

        </div>


        <div className="ngo-header-actions">

          <button className="ngo-notification">

            <FaBell />

            <span>
              4
            </span>

          </button>


          <FaUserCircle className="ngo-profile" />

        </div>

      </div>



      {/* ================= NGO INFO ================= */}

      <div className="ngo-info-card">

        <div className="ngo-info-icon">

          <FaBuilding />

        </div>


        <div>

          <h2>
            Your Organization
          </h2>

          <p>
            Helping provide meals to people in need.
          </p>

        </div>


        <div className="ngo-location">

          <FaMapMarkerAlt />

          <span>
            Your Location: Ghatkesar
          </span>

        </div>

      </div>



      {/* ================= STATS ================= */}

      <div className="ngo-stats">


        <div className="ngo-stat">

          <div className="ngo-stat-icon">
            🍛
          </div>

          <div>

            <h3>
              24
            </h3>

            <p>
              Meals Received
            </p>

          </div>

        </div>


        <div className="ngo-stat">

          <div className="ngo-stat-icon">
            📦
          </div>

          <div>

            <h3>
              8
            </h3>

            <p>
              Food Requests
            </p>

          </div>

        </div>


        <div className="ngo-stat">

          <div className="ngo-stat-icon">
            🚚
          </div>

          <div>

            <h3>
              5
            </h3>

            <p>
              Deliveries
            </p>

          </div>

        </div>


        <div className="ngo-stat">

          <div className="ngo-stat-icon">
            ❤️
          </div>

          <div>

            <h3>
              340
            </h3>

            <p>
              People Helped
            </p>

          </div>

        </div>

      </div>



      {/* ================= NEARBY FOOD ================= */}

      <div className="nearby-section">


        <div className="nearby-heading">

          <div>

            <h2>
              📍 Available Food Near You
            </h2>

            <p>
              Find surplus food donations from nearby events.
            </p>

          </div>


          <div className="food-count">

            {filteredDonations.length} Donations

          </div>

        </div>



        {/* SEARCH AND FILTER */}

        <div className="food-search">


          <div className="search-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search food or location..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <div className="filter-box">

            <FaFilter />

            <select
              value={foodType}
              onChange={(e) =>
                setFoodType(e.target.value)
              }
            >

              <option value="all">
                All Food
              </option>

              <option value="vegetarian">
                Vegetarian
              </option>

              <option value="non-vegetarian">
                Non-Vegetarian
              </option>

            </select>

          </div>

        </div>



        {/* FOOD CARDS */}

        <div className="food-cards">


          {filteredDonations.length === 0 ? (

            <div className="no-food">

              <FaUtensils />

              <h3>
                No food donations found
              </h3>

              <p>
                Try changing your search or filter.
              </p>

            </div>

          ) : (

            filteredDonations.map((item) => (

              <div
                className="food-card"
                key={item.id}
              >


                {/* FOOD IMAGE */}

                <div className="food-card-image">

                  <span>
                    {item.emoji}
                  </span>

                  <div className="distance-badge">

                    <FaMapMarkerAlt />

                    {item.distance}

                  </div>

                </div>



                {/* FOOD CONTENT */}

                <div className="food-card-content">


                  <div className="food-card-title">

                    <div>

                      <h3>
                        {item.food}
                      </h3>

                      <p>
                        {item.event}
                      </p>

                    </div>

                  </div>



                  {/* DETAILS */}

                  <div className="food-details">


                    <div>

                      <FaUsers />

                      <span>
                        {item.meals} meals
                      </span>

                    </div>


                    <div>

                      <FaUtensils />

                      <span>
                        {item.quantity}
                      </span>

                    </div>


                    <div>

                      <FaMapMarkerAlt />

                      <span>
                        {item.location}
                      </span>

                    </div>


                    <div>

                      <FaClock />

                      <span>
                        Safe until {item.safeUntil}
                      </span>

                    </div>

                  </div>



                  {/* FOOTER */}

                  <div className="food-card-footer">


                    <span className="posted-time">

                      {item.time}

                    </span>


                    <button
                      className="request-food-btn"
                      onClick={() =>
                        handleRequest(item)
                      }
                    >

                      Request Food

                    </button>

                  </div>


                </div>

              </div>

            ))

          )}

        </div>

      </div>



      {/* ================= IMPACT ================= */}

      <div className="ngo-impact">

        <div className="ngo-impact-icon">
          ❤️
        </div>

        <div>

          <h2>
            Your Impact
          </h2>

          <p>
            Together, we are helping reduce food waste
            and feed people in need.
          </p>

        </div>

        <div className="ngo-impact-number">

          340

          <span>
            People Helped
          </span>

        </div>

      </div>


    </div>

  );

}


export default NGODashboard;