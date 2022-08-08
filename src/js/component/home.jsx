import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div id="home">
		<Navbar/>
		<Jumbotron/>
		<Card/>
		<Footer/>
		</div>
	);
};



export default Home;
