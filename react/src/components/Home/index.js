import React from "react";
import MainDataHome from "../../context";
// import MainHome from "../../context";

const Home = () => {
  
  return (
    <div className = "row row-cols-1">
      <div className="col-8">
        <MainDataHome />
        <MainSecondData/>
      </div> 
    </div>
  );
};


export default  Home;

