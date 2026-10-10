import React from "react";
import {
  FaUtensils,
  FaHandsHelping,
  FaTruck,
  FaBuilding,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaLeaf,
  FaUsers,
  FaCheckCircle
} from "react-icons/fa";

function Home() {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">

        <div className="container">

          <div className="hero-content">

            <div className="hero-text">

              <div className="hero-badge">
                <FaHeart />
                <span>Making Every Meal Matter</span>
              </div>

              <h1>
                Don't Waste Food.
                <br />
                <span>Rescue It. Share It. Serve It.</span>
              </h1>

              <p>
                Connect leftover food from events with nearby NGOs,
                orphanages and volunteers. Together, we can turn
                food waste into meaningful meals.
              </p>

              <div className="hero-buttons">

                <button className="primary-btn">
                  <FaUtensils />
                  Donate Food
                </button>

                <button className="secondary-btn">
                  Find Food
                  <FaArrowRight />
                </button>

              </div>

            </div>


            {/* Hero Card */}

            <div className="hero-card">

              <div className="hero-card-icon">
                🍛
              </div>

              <h3>Every Meal Counts</h3>

              <p>
                Your leftover food can become someone's
                next meal.
              </p>

              <div className="hero-card-stats">

                <div>
                  <strong>10K+</strong>
                  <span>Meals Saved</span>
                </div>

                <div>
                  <strong>150+</strong>
                  <span>Organizations</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATISTICS ================= */}

      <section className="stats-section">

        <div className="container">

          <div className="stats-container">

            <div className="stat-item">
              <FaUtensils className="stat-icon" />
              <h2>10,000+</h2>
              <p>Meals Rescued</p>
            </div>

            <div className="stat-item">
              <FaBuilding className="stat-icon" />
              <h2>150+</h2>
              <p>NGOs Connected</p>
            </div>

            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <h2>300+</h2>
              <p>Volunteers</p>
            </div>

            <div className="stat-item">
              <FaLeaf className="stat-icon" />
              <h2>5,000+</h2>
              <p>Kg Food Saved</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="how-section">

        <div className="container">

          <div className="section-heading">

            <span>HOW IT WORKS</span>

            <h2>
              From Event Leftovers
              <br />
              <span>To Someone's Next Meal</span>
            </h2>

            <p>
              Our platform makes food donation simple,
              fast and meaningful.
            </p>

          </div>


          <div className="steps-container">

            {/* Step 1 */}

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                🎉
              </div>

              <h3>Event Happens</h3>

              <p>
                An event ends and there is safe,
                quality food left over.
              </p>

            </div>


            {/* Step 2 */}

            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                🍛
              </div>

              <h3>Donate Food</h3>

              <p>
                The organizer adds the leftover food
                and pickup details.
              </p>

            </div>


            {/* Step 3 */}

            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                🏢
              </div>

              <h3>Organization Requests</h3>

              <p>
                Nearby NGOs or orphanages can request
                the available food.
              </p>

            </div>


            {/* Step 4 */}

            <div className="step-card">

              <div className="step-number">
                04
              </div>

              <div className="step-icon">
                🛵
              </div>

              <h3>Volunteer Delivers</h3>

              <p>
                A volunteer picks up the food and
                delivers it to the organization.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= NEARBY ORGANIZATIONS ================= */}

      <section className="organizations-section">

        <div className="container">

          <div className="section-heading">

            <span>NEAR YOU</span>

            <h2>
              Organizations Ready
              <br />
              <span>To Receive Food</span>
            </h2>

            <p>
              Connect with nearby NGOs and orphanages
              that accept food donations.
            </p>

          </div>


          <div className="organization-grid">

            {/* Organization 1 */}

            <div className="organization-card">

              <div className="organization-image">
                🏢
              </div>

              <div className="organization-content">

                <div className="verified">
                  <FaCheckCircle />
                  Verified Organization
                </div>

                <h3>Hope Foundation</h3>

                <p>
                  <FaMapMarkerAlt />
                  Ghatkesar
                </p>

                <div className="distance">
                  📍 2.4 km away
                </div>

                <button>
                  View Details
                  <FaArrowRight />
                </button>

              </div>

            </div>


            {/* Organization 2 */}

            <div className="organization-card">

              <div className="organization-image">
                🏠
              </div>

              <div className="organization-content">

                <div className="verified">
                  <FaCheckCircle />
                  Verified Organization
                </div>

                <h3>Little Angels Orphanage</h3>

                <p>
                  <FaMapMarkerAlt />
                  Medipally
                </p>

                <div className="distance">
                  📍 4.1 km away
                </div>

                <button>
                  View Details
                  <FaArrowRight />
                </button>

              </div>

            </div>


            {/* Organization 3 */}

            <div className="organization-card">

              <div className="organization-image">
                🤝
              </div>

              <div className="organization-content">

                <div className="verified">
                  <FaCheckCircle />
                  Verified Organization
                </div>

                <h3>Helping Hands NGO</h3>

                <p>
                  <FaMapMarkerAlt />
                  Uppal
                </p>

                <div className="distance">
                  📍 5.8 km away
                </div>

                <button>
                  View Details
                  <FaArrowRight />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CALL TO ACTION ================= */}

      <section className="cta-section">

        <div className="container text-center">

          <FaHandsHelping className="cta-icon" />

          <h2>
            Together, We Can Make
            <br />
            Every Meal Count.
          </h2>

          <p>
            Whether you're an event organizer, NGO,
            orphanage or volunteer — you can make a difference.
          </p>

          <button className="cta-button">
            Join FoodRescue
            <FaArrowRight />
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container">

          <div className="footer-content">

            <div>
              <h3>
                🍴 FoodRescue
              </h3>

              <p>
                Turning leftover food into
                meaningful meals.
              </p>
            </div>

            <div>
              <h4>Quick Links</h4>
              <p>Home</p>
              <p>How It Works</p>
              <p>Organizations</p>
            </div>

            <div>
              <h4>Get Involved</h4>
              <p>Donate Food</p>
              <p>Become a Volunteer</p>
              <p>Register NGO</p>
            </div>

          </div>

          <div className="footer-bottom">
            © 2026 FoodRescue. Together against food waste ❤️
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;