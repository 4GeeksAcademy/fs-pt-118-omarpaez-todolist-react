import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Inputtodolist from "./Inputtodolist";



//create your first component
const Home = () => {
	return (
		<>
		<div className="text-center">
            <h1 className="text-center mt-5 bg-primary bg-gradient p-2 text-white">To do List</h1>
		<Inputtodolist/>
		</div>
	
		</>
	);
};

export default Home;