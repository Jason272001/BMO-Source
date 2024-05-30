// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";
import Locations from "../components/Locations/Locations";
import Franchise from "../components/Franchise/Franchise";
import Footer from "../components/Footer/Footer";
import Job from "../components/Job/Job";

import { Routes, Route, Navigate } from "react-router-dom";
import {
  sandwichQuery,
  drinkQuery,
  dessertQuery,
  appetizerQuery,
  soupQuery,
} from "../data";
// import Login from "../Auth/Login/Login";

import { client } from "../client";

// import Inventory from "../Auth/Inventroy/Inventory";
const ProtectedRoute = ({ children }) => {
  const usernumber = localStorage.getItem("number");
  return usernumber ? children : <Navigate to="/team-login" replace />;
};

export const Combine = () => {
  const [sandwich, setSandwich] = useState([]);
  const [drink, setDrink] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [appetizer, setAppetizer] = useState([]);
  const [soup, setSoup] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sandwichData = await sandwichQuery();
        client.fetch(sandwichData).then((data) => {
          setSandwich(data);
        });

        const drinkData = await drinkQuery();
        client.fetch(drinkData).then((data) => {
          setDrink(data);
        });

        const dessertData = await dessertQuery();
        client.fetch(dessertData).then((data) => {
          setDessert(data);
        });
        const appetizerData = await appetizerQuery();
        client.fetch(appetizerData).then((data) => {
          setAppetizer(data);
        });

        const soupData = await soupQuery();
        client.fetch(soupData).then((data) => {
          setSoup(data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          {/* <div id="best">
            <Menu title="Best Seller" products={} />
          </div> */}
          <div id="banhmi">
            <Menu title="Banh Mi" products={sandwich} />
          </div>
          <div id="drink">
            <Menu title="Drinks" products={drink} />
          </div>
          <div id="dessert">
            <Menu title="Desserts" products={dessert} />
          </div>
          <div id="appetizer">
            <Menu title="Appetizers" products={appetizer} />
          </div>
          <div id="soup">
            <Menu title="Soup" products={soup} />
          </div>
        </div>

        <div id="about">
          <About />
        </div>
        <div id="location">
          <Locations />
        </div>

        <div id="franchise">
          <Franchise />
        </div>

        <div id="job">
          <Job />
        </div>

        <div id="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Combine />} />
      {/* <Route path="/team-login" element={<Login />} />
      <Route
        path="/team-inventory"
        element={
          <ProtectedRoute>
            <Inventory />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
};

export default App;
