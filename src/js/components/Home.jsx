import React from "react";
import Navbar from "./Navbar"; 
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar /> 
	  <Jumbotron /> 
      <Cards />
	  <Footer />
    </div>
  );
};


export default Home;