// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";
import Locations from "../components/Locations/Locations";
import Franchise from "../components/Franchise/Franchise";
import Footer from "../components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
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

        <div id="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
