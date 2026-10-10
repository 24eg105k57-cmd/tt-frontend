import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Navbar
import Navbar from "./components/navbar.jsx";

// Main Pages
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

// Organizer Pages
import OrganizerDashboard from "./pages/organizer/organizerdashboard.jsx";
import AddDonation from "./pages/organizer/adddonation.jsx";

// NGO Pages
import NGODashboard from "./pages/ngo/ngodashboard.jsx";

// Volunteer Pages
import VolunteerDashboard from "./pages/volunteer/volunteerdashboard.jsx";

import MyDonations from "./pages/organizer/mydonations.jsx";
import AvailableFood from "./pages/ngo/availablefood.jsx";

import PickupTasks from "./pages/volunteer/pickuptasks.jsx";
import AdminDashboard from "./pages/admin/admindashboard.jsx";
import ManageUsers from "./pages/admin/manageusers.jsx";
import ManageNGOs from "./pages/admin/managengos.jsx";

import ManageOrganizers from "./pages/admin/manageorganizers.jsx";
import ManageVolunteers from "./pages/admin/managevolunteers.jsx";
import ManageDonations from "./pages/admin/managedonations.jsx";
import ManageDeliveries from "./pages/admin/managedeliveries.jsx";
import Notifications from "./pages/notifications.jsx";
import FoodRescueHistory from "./pages/foodrescuehistory.jsx";
import Profile from "./pages/profile.jsx";

function App() {

  return (

    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar />

      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= AUTHENTICATION ================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* ================= ORGANIZER ================= */}

        <Route
          path="/organizer"
          element={<OrganizerDashboard />}
        />

        <Route
          path="/organizer/add-donation"
          element={<AddDonation />}
        />

        <Route
  path="/organizer/my-donations"
  element={<MyDonations />}
/>


        {/* ================= NGO / ORPHANAGE ================= */}

        <Route
          path="/ngo"
          element={<NGODashboard />}
        />


        {/* ================= VOLUNTEER ================= */}

        <Route
          path="/volunteer"
          element={<VolunteerDashboard />}
        />

        <Route
  path="/ngo/available-food"
  element={<AvailableFood />}
/>


<Route
  path="/volunteer/pickup-tasks"
  element={<PickupTasks />}
/>


<Route
  path="/admin"
  element={<AdminDashboard />}
/>

<Route
  path="/admin/users"
  element={<ManageUsers />}
/>
<Route
  path="/admin/ngos"
  element={<ManageNGOs />}
/>
<Route
  path="/admin/organizers"
  element={<ManageOrganizers />}
/>
<Route
  path="/admin/volunteers"
  element={<ManageVolunteers />}
/>
<Route
  path="/admin/donations"
  element={<ManageDonations />}
/>
<Route
  path="/admin/deliveries"
  element={<ManageDeliveries />}
/>
<Route
  path="/notifications"
  element={<Notifications />}
/>
<Route
  path="/food-rescue-history"
  element={<FoodRescueHistory />}
/>
<Route
  path="/profile"
  element={<Profile />}
/>

      </Routes>

    </BrowserRouter>

  );

}


export default App;