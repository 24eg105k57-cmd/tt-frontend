import React, { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";


function NearbyMap() {

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  const [userLocation, setUserLocation] = useState(null);

  const [locationLoading, setLocationLoading] = useState(false);


  // Sample NGO and Orphanage locations
  const organizations = [

    {
      id: 1,
      name: "Hope Foundation NGO",
      type: "NGO",
      location: "Ghatkesar",
      people: 100,
      latitude: 17.4065,
      longitude: 78.4772
    },

    {
      id: 2,
      name: "Helping Hands Orphanage",
      type: "Orphanage",
      location: "Medipally",
      people: 80,
      latitude: 17.4399,
      longitude: 78.4983
    },

    {
      id: 3,
      name: "Care & Share NGO",
      type: "NGO",
      location: "Uppal",
      people: 150,
      latitude: 17.3850,
      longitude: 78.4867
    },

    {
      id: 4,
      name: "Little Stars Orphanage",
      type: "Orphanage",
      location: "LB Nagar",
      people: 65,
      latitude: 17.3457,
      longitude: 78.5522
    }

  ];


  // Calculate distance between two coordinates
  const calculateDistance = (
    lat1,
    lon1,
    lat2,
    lon2
  ) => {

    const earthRadius = 6371;

    const latDifference =
      (lat2 - lat1) *
      Math.PI /
      180;

    const lonDifference =
      (lon2 - lon1) *
      Math.PI /
      180;


    const a =
      Math.sin(latDifference / 2) *
      Math.sin(latDifference / 2) +

      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *

      Math.sin(lonDifference / 2) *
      Math.sin(lonDifference / 2);


    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );


    return earthRadius * c;

  };


  // Find user's current location
  const findNearMe = () => {

    if (!navigator.geolocation) {

      alert(
        "Geolocation is not supported by your browser."
      );

      return;

    }


    setLocationLoading(true);


    navigator.geolocation.getCurrentPosition(

      (position) => {

        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;


        setUserLocation({
          latitude,
          longitude
        });


        setLocationLoading(false);

      },

      () => {

        alert(
          "Location permission was denied. Please allow location access."
        );

        setLocationLoading(false);

      }

    );

  };


  // Add calculated distance to organizations
  const organizationsWithDistance =
    organizations.map((org) => {

      let distance = null;


      if (userLocation) {

        distance = calculateDistance(

          userLocation.latitude,
          userLocation.longitude,

          org.latitude,
          org.longitude

        );

      }


      return {
        ...org,
        distance
      };

    });


  // Search and filter
  const filteredOrganizations =
    organizationsWithDistance

      .filter((org) => {

        const matchesSearch =

          org.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||

          org.location
            .toLowerCase()
            .includes(search.toLowerCase());


        const matchesFilter =
          filter === "all" ||
          org.type === filter;


        return (
          matchesSearch &&
          matchesFilter
        );

      })

      // Sort nearest first
      .sort((a, b) => {

        if (
          a.distance === null ||
          b.distance === null
        ) {
          return 0;
        }

        return a.distance - b.distance;

      });


  const requestFood = (organization) => {

    alert(
      `Food request sent to ${organization.name}!`
    );

  };


  return (

    <div className="nearby-map-section">


      {/* HEADER */}

      <div className="nearby-map-header">

        <h2>
          📍 Nearby NGOs & Orphanages
        </h2>

        <p>
          Find organizations near the food donation location.
        </p>

      </div>


      {/* CONTROLS */}

      <div className="nearby-controls">


        {/* SEARCH */}

        <div className="nearby-search">

          🔎

          <input
            type="text"
            placeholder="Search NGO, orphanage or location..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        {/* FILTER */}

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >

          <option value="all">
            All Organizations
          </option>

          <option value="NGO">
            NGOs
          </option>

          <option value="Orphanage">
            Orphanages
          </option>

        </select>


        {/* LOCATION */}

        <button
          className="location-button"
          onClick={findNearMe}
          disabled={locationLoading}
        >

          {locationLoading
            ? "Finding..."
            : "📍 Find Near Me"}

        </button>

      </div>


      {/* LOCATION MESSAGE */}

      {userLocation && (

        <div
          style={{
            background: "#eaf8ef",
            padding: "12px 15px",
            borderRadius: "8px",
            marginBottom: "15px",
            color: "#198754"
          }}
        >

          ✅ Location detected!

          <br />

          Showing organizations
          from nearest to farthest.

        </div>

      )}


      {/* MAP */}

      <MapContainer

        center={
          userLocation
            ? [
                userLocation.latitude,
                userLocation.longitude
              ]
            : [17.4065, 78.4772]
        }

        zoom={11}

        style={{
          height: "450px",
          width: "100%",
          borderRadius: "15px"
        }}

      >

        <TileLayer

          attribution="&copy; OpenStreetMap contributors"

          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />


        {/* USER LOCATION */}

        {userLocation && (

          <Marker
            position={[
              userLocation.latitude,
              userLocation.longitude
            ]}
          >

            <Popup>

              <strong>
                📍 You are here
              </strong>

              <br />

              Your current location.

            </Popup>

          </Marker>

        )}


        {/* ORGANIZATION MARKERS */}

        {filteredOrganizations.map((org) => (

          <Marker

            key={org.id}

            position={[
              org.latitude,
              org.longitude
            ]}

          >

            <Popup>

              <strong>
                {org.type === "NGO"
                  ? "🏢"
                  : "🏠"}{" "}
                {org.name}
              </strong>

              <br />

              📍 {org.location}

              <br />

              👥 Supports {org.people} people

              <br />

              {org.distance !== null && (

                <>
                  📏{" "}
                  {org.distance.toFixed(2)}
                  {" "}km away

                  <br />
                </>

              )}

              <br />

              <button
                onClick={() =>
                  requestFood(org)
                }
              >

                🍛 Request Food

              </button>

            </Popup>

          </Marker>

        ))}

      </MapContainer>


      {/* ORGANIZATION LIST */}

      <div className="nearby-organization-list">

        <h3>
          Nearby Organizations
        </h3>


        {filteredOrganizations.length === 0 ? (

          <p>
            No organizations found.
          </p>

        ) : (

          filteredOrganizations.map(
            (org, index) => (

              <div
                className="organization-card"
                key={org.id}
              >


                {/* ICON */}

                <div className="organization-icon">

                  {org.type === "NGO"
                    ? "🏢"
                    : "🏠"}

                </div>


                {/* DETAILS */}

                <div className="organization-info">

                  <h4>
                    {index === 0 &&
                    userLocation
                      ? "⭐ "
                      : ""}

                    {org.name}
                  </h4>

                  <p>
                    📍 {org.location}
                  </p>

                  <span>

                    {org.distance !== null
                      ? `📏 ${org.distance.toFixed(2)} km away`
                      : "📍 Location available"}

                  </span>

                </div>


                {/* BUTTON */}

                <button
                  onClick={() =>
                    requestFood(org)
                  }
                >

                  🍛 Request Food

                </button>


              </div>

            )
          )

        )}

      </div>


    </div>

  );

}


export default NearbyMap;