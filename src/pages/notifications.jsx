import React, { useState } from "react";

function Notifications() {

  const [notifications, setNotifications] = useState([

    {
      id: 1,
      type: "donation",
      icon: "🍛",
      title: "New Food Donation Available",
      message:
        "25 KG of Vegetable Biryani is available for pickup in Ghatkesar.",
      time: "5 minutes ago",
      read: false
    },

    {
      id: 2,
      type: "pickup",
      icon: "🚴",
      title: "Pickup Accepted",
      message:
        "Priya Sharma accepted the Vegetable Biryani pickup task.",
      time: "15 minutes ago",
      read: false
    },

    {
      id: 3,
      type: "delivery",
      icon: "🚚",
      title: "Food Is On The Way",
      message:
        "Rice & Dal is currently being delivered to Helping Hands Orphanage.",
      time: "30 minutes ago",
      read: true
    },

    {
      id: 4,
      type: "success",
      icon: "❤️",
      title: "Food Successfully Delivered",
      message:
        "Vegetable Biryani was successfully delivered to Hope Foundation NGO.",
      time: "1 hour ago",
      read: true
    },

    {
      id: 5,
      type: "ngo",
      icon: "🏢",
      title: "NGO Accepted Donation",
      message:
        "Hope Foundation NGO accepted your food donation request.",
      time: "2 hours ago",
      read: true
    },

    {
      id: 6,
      type: "warning",
      icon: "⚠️",
      title: "Pickup Deadline Approaching",
      message:
        "The Rice & Dal pickup must be completed before 8:30 PM.",
      time: "3 hours ago",
      read: true
    }

  ]);


  const [filter, setFilter] = useState("all");


  // MARK ONE AS READ

  const markAsRead = (id) => {

    setNotifications(

      notifications.map((notification) => {

        if (notification.id === id) {

          return {
            ...notification,
            read: true
          };

        }

        return notification;

      })

    );

  };


  // MARK ALL AS READ

  const markAllAsRead = () => {

    setNotifications(

      notifications.map((notification) => ({
        ...notification,
        read: true
      }))

    );

  };


  // DELETE NOTIFICATION

  const deleteNotification = (id) => {

    setNotifications(

      notifications.filter(
        notification =>
          notification.id !== id
      )

    );

  };


  // FILTER

  const filteredNotifications =
    notifications.filter((notification) => {

      if (filter === "unread") {

        return !notification.read;

      }

      return true;

    });


  const unreadCount =
    notifications.filter(
      notification =>
        !notification.read
    ).length;


  return (

    <div className="notifications-page">

      {/* HEADER */}

      <div className="notifications-header">

        <div>

          <h1>
            🔔 Notifications
          </h1>

          <p>
            Stay updated about your food rescue activities.
          </p>

        </div>


        {unreadCount > 0 && (

          <div className="notification-count">

            {unreadCount} Unread

          </div>

        )}

      </div>


      {/* CONTROLS */}

      <div className="notification-controls">

        <div className="notification-tabs">

          <button
            className={
              filter === "all"
                ? "active-notification-tab"
                : ""
            }
            onClick={() =>
              setFilter("all")
            }
          >

            All

          </button>


          <button
            className={
              filter === "unread"
                ? "active-notification-tab"
                : ""
            }
            onClick={() =>
              setFilter("unread")
            }
          >

            Unread

          </button>

        </div>


        {unreadCount > 0 && (

          <button
            className="mark-all-button"
            onClick={markAllAsRead}
          >

            ✓ Mark All as Read

          </button>

        )}

      </div>


      {/* NOTIFICATIONS */}

      <div className="notification-list">

        {filteredNotifications.length === 0 ? (

          <div className="no-notifications">

            <div>
              🎉
            </div>

            <h2>
              You're all caught up!
            </h2>

            <p>
              There are no unread notifications.
            </p>

          </div>

        ) : (

          filteredNotifications.map(
            (notification) => (

              <div
                key={notification.id}
                className={
                  notification.read
                    ? "notification-card"
                    : "notification-card unread-notification"
                }
              >

                {/* ICON */}

                <div className="notification-icon">

                  {notification.icon}

                </div>


                {/* CONTENT */}

                <div className="notification-content">

                  <div className="notification-title-row">

                    <h3>
                      {notification.title}
                    </h3>

                    {!notification.read && (

                      <span className="new-notification">
                        NEW
                      </span>

                    )}

                  </div>


                  <p>
                    {notification.message}
                  </p>


                  <small>
                    🕐 {notification.time}
                  </small>

                </div>


                {/* ACTIONS */}

                <div className="notification-actions">

                  {!notification.read && (

                    <button
                      onClick={() =>
                        markAsRead(
                          notification.id
                        )
                      }
                    >

                      ✓

                    </button>

                  )}


                  <button
                    onClick={() =>
                      deleteNotification(
                        notification.id
                      )
                    }
                  >

                    🗑️

                  </button>

                </div>

              </div>

            )
          )

        )}

      </div>

    </div>

  );

}

export default Notifications;