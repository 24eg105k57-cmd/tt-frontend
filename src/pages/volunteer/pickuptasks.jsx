import React, { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function PickupTasks() {

  const [activeTab, setActiveTab] = useState("available");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      foodName: "Vegetable Biryani",
      quantity: "25 KG",
      meals: 100,
      event: "Wedding Reception",

      pickupLocation: "Ghatkesar",
      pickupLat: 17.4500,
      pickupLng: 78.6800,

      deliveryLocation: "Hope Foundation NGO",
      deliveryArea: "Medipally",
      deliveryLat: 17.4100,
      deliveryLng: 78.5900,

      distance: "2.4 km",
      pickupTime: "Before 9:00 PM",
      organizer: "Rahul Events",
      ngo: "Hope Foundation NGO",
      status: "Available"
    },

    {
      id: 2,
      foodName: "Rice & Dal",
      quantity: "18 KG",
      meals: 75,
      event: "College Event",

      pickupLocation: "Medipally",
      pickupLat: 17.4100,
      pickupLng: 78.5900,

      deliveryLocation: "Helping Hands Orphanage",
      deliveryArea: "Uppal",
      deliveryLat: 17.3900,
      deliveryLng: 78.5600,

      distance: "4.1 km",
      pickupTime: "Before 8:30 PM",
      organizer: "ABC College",
      ngo: "Helping Hands Orphanage",
      status: "Available"
    },

    {
      id: 3,
      foodName: "Chapati & Curry",
      quantity: "30 KG",
      meals: 120,
      event: "Corporate Event",

      pickupLocation: "Uppal",
      pickupLat: 17.4000,
      pickupLng: 78.5700,

      deliveryLocation: "Care & Share NGO",
      deliveryArea: "LB Nagar",
      deliveryLat: 17.3500,
      deliveryLng: 78.5500,

      distance: "6.2 km",
      pickupTime: "Before 10:00 PM",
      organizer: "Tech Events",
      ngo: "Care & Share NGO",
      status: "Picked Up"
    }
  ]);


  // ACCEPT TASK

  const acceptTask = (id) => {

    setTasks(
      tasks.map((task) => {

        if (task.id === id) {

          return {
            ...task,
            status: "Accepted"
          };

        }

        return task;

      })
    );

    setActiveTab("mytasks");

  };


  // UPDATE DELIVERY STATUS

  const updateStatus = (id, newStatus) => {

    setTasks(
      tasks.map((task) => {

        if (task.id === id) {

          return {
            ...task,
            status: newStatus
          };

        }

        return task;

      })
    );

  };


  // STATUS CSS CLASS

  const getStatusClass = (status) => {

    return status
      .toLowerCase()
      .replace(" ", "-");

  };


  // AVAILABLE TASKS

  const availableTasks =
    tasks.filter(
      (task) =>
        task.status === "Available"
    );


  // MY TASKS

  const myTasks =
    tasks.filter(
      (task) =>
        task.status !== "Available"
    );


  return (

    <div className="pickup-tasks-page">

      {/* HEADER */}

      <div className="pickup-header">

        <div>

          <h1>
            🚴 Pickup & Delivery
          </h1>

          <p>
            Help rescue surplus food by
            collecting and delivering it.
          </p>

        </div>

      </div>


      {/* SUMMARY */}

      <div className="volunteer-summary">

        <div className="volunteer-summary-card">

          <span>📦</span>

          <div>

            <h2>
              {availableTasks.length}
            </h2>

            <p>
              Available Tasks
            </p>

          </div>

        </div>


        <div className="volunteer-summary-card">

          <span>🚴</span>

          <div>

            <h2>
              {
                tasks.filter(
                  (task) =>
                    task.status === "Accepted"
                ).length
              }
            </h2>

            <p>
              My Tasks
            </p>

          </div>

        </div>


        <div className="volunteer-summary-card">

          <span>📦</span>

          <div>

            <h2>
              {
                tasks.filter(
                  (task) =>
                    task.status === "Picked Up"
                ).length
              }
            </h2>

            <p>
              Picked Up
            </p>

          </div>

        </div>


        <div className="volunteer-summary-card">

          <span>❤️</span>

          <div>

            <h2>
              {
                tasks.filter(
                  (task) =>
                    task.status === "Delivered"
                ).length
              }
            </h2>

            <p>
              Delivered
            </p>

          </div>

        </div>

      </div>


      {/* TABS */}

      <div className="pickup-tabs">

        <button
          className={
            activeTab === "available"
              ? "active-pickup-tab"
              : ""
          }
          onClick={() =>
            setActiveTab("available")
          }
        >
          📦 Available Tasks
        </button>


        <button
          className={
            activeTab === "mytasks"
              ? "active-pickup-tab"
              : ""
          }
          onClick={() =>
            setActiveTab("mytasks")
          }
        >
          🚴 My Tasks
        </button>

      </div>


      {/* AVAILABLE TASKS */}

      {activeTab === "available" && (

        <div>

          {availableTasks.length === 0 ? (

            <div className="no-tasks">

              <div>🎉</div>

              <h2>
                No Available Tasks
              </h2>

              <p>
                Check again later for new
                food pickup requests.
              </p>

            </div>

          ) : (

            availableTasks.map((task) => (

              <div
                className="pickup-task-card"
                key={task.id}
              >

                <div className="pickup-card-top">

                  <div>

                    <h2>
                      🍛 {task.foodName}
                    </h2>

                    <p>
                      🎉 {task.event}
                    </p>

                  </div>


                  <span className="available-task-badge">

                    🟢 Available

                  </span>

                </div>


                {/* FOOD DETAILS */}

                <div className="pickup-details">

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
                      📏 {task.distance}
                    </strong>

                    <span>
                      Distance
                    </span>

                  </div>


                  <div>

                    <strong>
                      ⏰ {task.pickupTime}
                    </strong>

                    <span>
                      Deadline
                    </span>

                  </div>

                </div>


                {/* ROUTE */}

                <div className="pickup-route">

                  <div className="route-point">

                    <span className="route-icon">
                      📍
                    </span>

                    <div>

                      <strong>
                        Pickup
                      </strong>

                      <p>
                        {task.pickupLocation}
                      </p>

                      <small>
                        Organizer: {task.organizer}
                      </small>

                    </div>

                  </div>


                  <div className="route-line">
                    ↓
                  </div>


                  <div className="route-point">

                    <span className="route-icon">
                      🏢
                    </span>

                    <div>

                      <strong>
                        Deliver To
                      </strong>

                      <p>
                        {task.deliveryLocation}
                      </p>

                      <small>
                        {task.deliveryArea}
                      </small>

                    </div>

                  </div>

                </div>


                {/* ACTION */}

                <div className="pickup-card-actions">

                  <button
                    className="accept-task-button"
                    onClick={() =>
                      acceptTask(task.id)
                    }
                  >

                    🚴 Accept Pickup

                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      )}


      {/* MY TASKS */}

      {activeTab === "mytasks" && (

        <div>

          {myTasks.length === 0 ? (

            <div className="no-tasks">

              <div>🚴</div>

              <h2>
                No Active Tasks
              </h2>

              <p>
                Accept a pickup task to see
                it here.
              </p>

            </div>

          ) : (

            myTasks.map((task) => (

              <div
                className="pickup-task-card"
                key={task.id}
              >

                {/* TOP */}

                <div className="pickup-card-top">

                  <div>

                    <h2>
                      🍛 {task.foodName}
                    </h2>

                    <p>
                      {task.event}
                    </p>

                  </div>


                  <span
                    className={`task-status ${getStatusClass(
                      task.status
                    )}`}
                  >

                    {task.status}

                  </span>

                </div>


                {/* ROUTE */}

                <div className="pickup-route">

                  <div className="route-point">

                    <span className="route-icon">
                      📍
                    </span>

                    <div>

                      <strong>
                        Pickup
                      </strong>

                      <p>
                        {task.pickupLocation}
                      </p>

                      <small>
                        {task.organizer}
                      </small>

                    </div>

                  </div>


                  <div className="route-line">
                    ↓
                  </div>


                  <div className="route-point">

                    <span className="route-icon">
                      🏢
                    </span>

                    <div>

                      <strong>
                        Delivery
                      </strong>

                      <p>
                        {task.deliveryLocation}
                      </p>

                      <small>
                        {task.deliveryArea}
                      </small>

                    </div>

                  </div>

                </div>


                {/* MAP */}

                <div className="volunteer-map">

                  <MapContainer
                    center={[
                      task.pickupLat,
                      task.pickupLng
                    ]}
                    zoom={12}
                    style={{
                      height: "350px",
                      width: "100%"
                    }}
                  >

                    <TileLayer
                      attribution="&copy; OpenStreetMap contributors"
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />


                    {/* PICKUP MARKER */}

                    <Marker
                      position={[
                        task.pickupLat,
                        task.pickupLng
                      ]}
                    >

                      <Popup>

                        📍 <strong>
                          Pickup Location
                        </strong>

                        <br />

                        {task.pickupLocation}

                      </Popup>

                    </Marker>


                    {/* NGO MARKER */}

                    <Marker
                      position={[
                        task.deliveryLat,
                        task.deliveryLng
                      ]}
                    >

                      <Popup>

                        🏢 <strong>
                          Delivery Location
                        </strong>

                        <br />

                        {task.deliveryLocation}

                      </Popup>

                    </Marker>


                    {/* ROUTE LINE */}

                    <Polyline
                      positions={[
                        [
                          task.pickupLat,
                          task.pickupLng
                        ],

                        [
                          task.deliveryLat,
                          task.deliveryLng
                        ]
                      ]}
                    />

                  </MapContainer>

                </div>


                {/* STATUS PROGRESS */}

                <div className="delivery-progress">

                  <div
                    className={
                      task.status === "Accepted" ||
                      task.status === "Picked Up" ||
                      task.status === "On The Way" ||
                      task.status === "Delivered"
                        ? "progress-step completed"
                        : "progress-step"
                    }
                  >

                    <span>✓</span>

                    <p>
                      Accepted
                    </p>

                  </div>


                  <div
                    className={
                      task.status === "Picked Up" ||
                      task.status === "On The Way" ||
                      task.status === "Delivered"
                        ? "progress-step completed"
                        : "progress-step"
                    }
                  >

                    <span>✓</span>

                    <p>
                      Picked Up
                    </p>

                  </div>


                  <div
                    className={
                      task.status === "On The Way" ||
                      task.status === "Delivered"
                        ? "progress-step completed"
                        : "progress-step"
                    }
                  >

                    <span>✓</span>

                    <p>
                      On The Way
                    </p>

                  </div>


                  <div
                    className={
                      task.status === "Delivered"
                        ? "progress-step completed"
                        : "progress-step"
                    }
                  >

                    <span>✓</span>

                    <p>
                      Delivered
                    </p>

                  </div>

                </div>


                {/* BUTTONS */}

                <div className="pickup-card-actions">


                  {task.status === "Accepted" && (

                    <button
                      className="accept-task-button"
                      onClick={() =>
                        updateStatus(
                          task.id,
                          "Picked Up"
                        )
                      }
                    >

                      📦 Mark Food Picked Up

                    </button>

                  )}


                  {task.status === "Picked Up" && (

                    <button
                      className="accept-task-button"
                      onClick={() =>
                        updateStatus(
                          task.id,
                          "On The Way"
                        )
                      }
                    >

                      🚚 Start Delivery

                    </button>

                  )}


                  {task.status === "On The Way" && (

                    <button
                      className="accept-task-button"
                      onClick={() =>
                        updateStatus(
                          task.id,
                          "Delivered"
                        )
                      }
                    >

                      ❤️ Mark as Delivered

                    </button>

                  )}


                  {task.status === "Delivered" && (

                    <div className="delivered-message">

                      🎉 Food Successfully Delivered!

                    </div>

                  )}

                </div>

              </div>

            ))

          )}

        </div>

      )}

    </div>

  );

}

export default PickupTasks;