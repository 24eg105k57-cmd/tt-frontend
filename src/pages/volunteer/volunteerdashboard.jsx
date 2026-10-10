import React, { useState } from "react";

import {
  FaBell,
  FaUserCircle,
  FaMapMarkerAlt,
  FaClock,
  FaRoute,
  FaBox,
  FaCheckCircle,
  FaTruck,
  FaPhone,
  FaSearch
} from "react-icons/fa";


function VolunteerDashboard() {

  const [search, setSearch] = useState("");

  const [activeTab, setActiveTab] = useState("available");


  const tasks = [

    {
      id: 1,

      food: "Vegetable Biryani",

      quantity: "25 KG",

      meals: 100,

      event: "Wedding Reception",

      pickup: "Ghatkesar",

      delivery: "Hope Foundation NGO",

      distance: "2.4 km",

      pickupTime: "Before 9:00 PM",

      status: "available",

      organizer: "Rahul Events",

      phone: "+91 98765 43210"

    },


    {
      id: 2,

      food: "Rice & Dal",

      quantity: "18 KG",

      meals: 75,

      event: "College Event",

      pickup: "Medipally",

      delivery: "Helping Hands Orphanage",

      distance: "4.1 km",

      pickupTime: "Before 8:30 PM",

      status: "available",

      organizer: "ABC College",

      phone: "+91 98765 12345"

    },


    {
      id: 3,

      food: "Chapati & Curry",

      quantity: "30 KG",

      meals: 120,

      event: "Corporate Event",

      pickup: "Uppal",

      delivery: "Care & Share NGO",

      distance: "6.2 km",

      pickupTime: "Before 10:00 PM",

      status: "available",

      organizer: "Tech Events",

      phone: "+91 91234 56789"

    }

  ];


  const filteredTasks = tasks.filter((task) => {

    return (
      task.food
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      task.pickup
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      task.delivery
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  });


  const acceptTask = (task) => {

    alert(
      `Pickup task accepted for ${task.food}!`
    );

  };


  return (

    <div className="volunteer-dashboard">


      {/* ================= HEADER ================= */}

      <div className="volunteer-header">

        <div>

          <h1>
            Welcome, Volunteer! 🚴
          </h1>

          <p>
            Help deliver surplus food to people in need.
          </p>

        </div>


        <div className="volunteer-actions">

          <button className="volunteer-notification">

            <FaBell />

            <span>
              3
            </span>

          </button>


          <FaUserCircle className="volunteer-profile" />

        </div>

      </div>



      {/* ================= VOLUNTEER STATUS ================= */}

      <div className="volunteer-status-card">

        <div className="status-left">

          <div className="status-icon">

            🚴

          </div>


          <div>

            <h2>
              You are Available
            </h2>

            <p>
              You can receive food pickup requests.
            </p>

          </div>

        </div>


        <button
          className="status-button"
          onClick={() =>
            alert("Availability status updated!")
          }
        >

          Available

        </button>

      </div>



      {/* ================= STATS ================= */}

      <div className="volunteer-stats">


        <div className="volunteer-stat">

          <div className="volunteer-stat-icon">
            📦
          </div>

          <div>

            <h3>
              12
            </h3>

            <p>
              Deliveries
            </p>

          </div>

        </div>


        <div className="volunteer-stat">

          <div className="volunteer-stat-icon">
            🍛
          </div>

          <div>

            <h3>
              850
            </h3>

            <p>
              Meals Delivered
            </p>

          </div>

        </div>


        <div className="volunteer-stat">

          <div className="volunteer-stat-icon">
            📍
          </div>

          <div>

            <h3>
              42 KM
            </h3>

            <p>
              Distance Covered
            </p>

          </div>

        </div>


        <div className="volunteer-stat">

          <div className="volunteer-stat-icon">
            ❤️
          </div>

          <div>

            <h3>
              125
            </h3>

            <p>
              People Helped
            </p>

          </div>

        </div>

      </div>



      {/* ================= TASK SECTION ================= */}

      <div className="task-section">


        <div className="task-heading">

          <div>

            <h2>
              📍 Nearby Delivery Tasks
            </h2>

            <p>
              Pick up food from events and deliver it to NGOs.
            </p>

          </div>

        </div>



        {/* SEARCH */}

        <div className="volunteer-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search food, pickup location or NGO..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>



        {/* TABS */}

        <div className="task-tabs">

          <button
            className={
              activeTab === "available"
                ? "active-tab"
                : ""
            }
            onClick={() =>
              setActiveTab("available")
            }
          >

            Available Tasks

          </button>


          <button
            className={
              activeTab === "accepted"
                ? "active-tab"
                : ""
            }
            onClick={() =>
              setActiveTab("accepted")
            }
          >

            My Deliveries

          </button>

        </div>



        {/* TASK CARDS */}

        {activeTab === "available" && (

          <div className="task-cards">

            {filteredTasks.map((task) => (

              <div
                className="task-card"
                key={task.id}
              >


                {/* TOP */}

                <div className="task-card-top">

                  <div>

                    <h3>
                      🍛 {task.food}
                    </h3>

                    <p>
                      {task.event}
                    </p>

                  </div>


                  <span className="task-distance">

                    📍 {task.distance}

                  </span>

                </div>



                {/* FOOD INFO */}

                <div className="task-food-info">

                  <div>

                    <strong>
                      {task.quantity}
                    </strong>

                    <span>
                      Food Quantity
                    </span>

                  </div>


                  <div>

                    <strong>
                      {task.meals}
                    </strong>

                    <span>
                      Meals
                    </span>

                  </div>


                  <div>

                    <strong>
                      {task.pickupTime}
                    </strong>

                    <span>
                      Pickup Deadline
                    </span>

                  </div>

                </div>



                {/* ROUTE */}

                <div className="delivery-route">


                  <div className="route-point">

                    <div className="route-icon pickup">

                      <FaMapMarkerAlt />

                    </div>


                    <div>

                      <span>
                        PICKUP
                      </span>

                      <strong>
                        {task.pickup}
                      </strong>

                      <small>
                        {task.organizer}
                      </small>

                    </div>

                  </div>



                  <div className="route-line"></div>



                  <div className="route-point">

                    <div className="route-icon delivery">

                      <FaMapMarkerAlt />

                    </div>


                    <div>

                      <span>
                        DELIVERY
                      </span>

                      <strong>
                        {task.delivery}
                      </strong>

                    </div>

                  </div>


                </div>



                {/* FOOTER */}

                <div className="task-card-footer">


                  <button
                    className="contact-button"
                    onClick={() =>
                      alert(
                        `Organizer phone: ${task.phone}`
                      )
                    }
                  >

                    <FaPhone />

                    Contact Organizer

                  </button>


                  <button
                    className="accept-task-button"
                    onClick={() =>
                      acceptTask(task)
                    }
                  >

                    <FaTruck />

                    Accept Pickup

                  </button>


                </div>


              </div>

            ))}

          </div>

        )}



        {/* MY DELIVERIES */}

        {activeTab === "accepted" && (

          <div className="my-deliveries">

            <div className="empty-deliveries">

              <FaBox />

              <h3>
                No Active Deliveries
              </h3>

              <p>
                Accept a nearby task to see it here.
              </p>

            </div>

          </div>

        )}

      </div>



      {/* ================= HOW IT WORKS ================= */}

      <div className="how-volunteering-works">

        <h2>
          How Volunteering Works
        </h2>


        <div className="volunteer-steps">


          <div className="volunteer-step">

            <div>
              1
            </div>

            <h3>
              Accept
            </h3>

            <p>
              Choose a nearby food pickup task.
            </p>

          </div>


          <div className="volunteer-step">

            <div>
              2
            </div>

            <h3>
              Pickup
            </h3>

            <p>
              Collect the food from the event organizer.
            </p>

          </div>


          <div className="volunteer-step">

            <div>
              3
            </div>

            <h3>
              Deliver
            </h3>

            <p>
              Deliver the food safely to the NGO.
            </p>

          </div>


          <div className="volunteer-step">

            <div>
              4
            </div>

            <h3>
              Complete</h3>

            <p>
              Confirm the delivery and help people in need.
            </p>

          </div>


        </div>

      </div>


    </div>

  );

}


export default VolunteerDashboard;