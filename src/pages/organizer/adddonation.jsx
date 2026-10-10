import React, { useState } from "react";
import {
  FaArrowLeft,
  FaUtensils,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaImage,
  FaLeaf
} from "react-icons/fa";
import { Link } from "react-router-dom";

function AddDonation() {

  const [foodType, setFoodType] = useState("");

  const [formData, setFormData] = useState({
    eventName: "",
    foodName: "",
    quantity: "",
    meals: "",
    preparationTime: "",
    safeUntil: "",
    location: "",
    description: ""
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Donation:", {
      ...formData,
      foodType
    });

    alert(
      "Food donation submitted successfully!"
    );

  };


  return (

    <div className="donation-page">

      {/* HEADER */}

      <div className="donation-header">

        <Link
          to="/organizer"
          className="back-dashboard"
        >
          <FaArrowLeft />
          Back to Dashboard
        </Link>

        <h1>
          Donate Leftover Food 🍛
        </h1>

        <p>
          Tell us about the food available
          after your event.
        </p>

      </div>


      <form
        className="donation-form"
        onSubmit={handleSubmit}
      >

        {/* ================= EVENT DETAILS ================= */}

        <div className="form-section">

          <div className="form-section-title">

            <span>
              01
            </span>

            <div>

              <h2>
                Event Details
              </h2>

              <p>
                Tell us where the food came from.
              </p>

            </div>

          </div>


          <div className="donation-field">

            <label>
              Event Name
            </label>

            <input
              type="text"
              name="eventName"
              placeholder="Example: Wedding Reception"
              value={formData.eventName}
              onChange={handleChange}
              required
            />

          </div>

        </div>


        {/* ================= FOOD DETAILS ================= */}

        <div className="form-section">

          <div className="form-section-title">

            <span>
              02
            </span>

            <div>

              <h2>
                Food Details
              </h2>

              <p>
                Tell us what food is available.
              </p>

            </div>

          </div>


          <div className="form-row">

            <div className="donation-field">

              <label>
                Food Name
              </label>

              <div className="donation-input">

                <FaUtensils />

                <input
                  type="text"
                  name="foodName"
                  placeholder="Example: Vegetable Biryani"
                  value={formData.foodName}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="donation-field">

              <label>
                Food Type
              </label>

              <select
                value={foodType}
                onChange={(e) =>
                  setFoodType(e.target.value)
                }
                required
              >

                <option value="">
                  Select food type
                </option>

                <option value="vegetarian">
                  Vegetarian
                </option>

                <option value="non-vegetarian">
                  Non-Vegetarian
                </option>

                <option value="vegan">
                  Vegan
                </option>

              </select>

            </div>

          </div>


          <div className="form-row">

            <div className="donation-field">

              <label>
                Quantity
              </label>

              <input
                type="text"
                name="quantity"
                placeholder="Example: 25 KG"
                value={formData.quantity}
                onChange={handleChange}
                required
              />

            </div>


            <div className="donation-field">

              <label>
                Approximate Meals
              </label>

              <div className="donation-input">

                <FaUsers />

                <input
                  type="number"
                  name="meals"
                  placeholder="Example: 100"
                  value={formData.meals}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>

        </div>


        {/* ================= FOOD SAFETY ================= */}

        <div className="form-section">

          <div className="form-section-title">

            <span>
              03
            </span>

            <div>

              <h2>
                Food Safety
              </h2>

              <p>
                Help us ensure the food is safe
                for distribution.
              </p>

            </div>

          </div>


          <div className="safety-note">

            <FaLeaf />

            <div>

              <strong>
                Food Safety is Important
              </strong>

              <p>
                Please only donate food that has been
                stored safely and is suitable for consumption.
              </p>

            </div>

          </div>


          <div className="form-row">

            <div className="donation-field">

              <label>
                Preparation Time
              </label>

              <div className="donation-input">

                <FaClock />

                <input
                  type="time"
                  name="preparationTime"
                  value={
                    formData.preparationTime
                  }
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="donation-field">

              <label>
                Safe Until
              </label>

              <div className="donation-input">

                <FaClock />

                <input
                  type="time"
                  name="safeUntil"
                  value={
                    formData.safeUntil
                  }
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>

        </div>


        {/* ================= LOCATION ================= */}

        <div className="form-section">

          <div className="form-section-title">

            <span>
              04
            </span>

            <div>

              <h2>
                Pickup Location
              </h2>

              <p>
                Tell volunteers where to collect the food.
              </p>

            </div>

          </div>


          <div className="donation-field">

            <label>
              Pickup Location
            </label>

            <div className="donation-input">

              <FaMapMarkerAlt />

              <input
                type="text"
                name="location"
                placeholder="Example: Anurag University, Ghatkesar"
                value={formData.location}
                onChange={handleChange}
                required
              />

            </div>

          </div>

        </div>


        {/* ================= IMAGE ================= */}

        <div className="form-section">

          <div className="form-section-title">

            <span>
              05
            </span>

            <div>

              <h2>
                Food Image
              </h2>

              <p>
                Upload a picture of the available food.
              </p>

            </div>

          </div>


          <div className="image-upload">

            <FaImage />

            <h3>
              Upload Food Image
            </h3>

            <p>
              JPG, PNG or JPEG
            </p>

            <input
              type="file"
              accept="image/*"
            />

          </div>

        </div>


        {/* ================= DESCRIPTION ================= */}

        <div className="form-section">

          <div className="form-section-title">

            <span>
              06
            </span>

            <div>

              <h2>
                Additional Information
              </h2>

              <p>
                Add any useful information.
              </p>

            </div>

          </div>


          <div className="donation-field">

            <label>
              Description
            </label>

            <textarea
              name="description"
              rows="5"
              placeholder="Example: Food is packed in containers and ready for pickup."
              value={formData.description}
              onChange={handleChange}
            />

          </div>

        </div>


        {/* SUBMIT */}

        <button
          type="submit"
          className="submit-donation"
        >
          Submit Food Donation
        </button>

      </form>

    </div>

  );
}

export default AddDonation;