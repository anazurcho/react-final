import React, {
    useEffect, useState
} from "react";
import StrapiService from "../services/strapiService";
import Table from "./Table"

const MainDataHome = () => {
   const [ data, setData ] = useState([]);
   const strapiService = new StrapiService();

   useEffect( () => {
       strapiService.getData() 
         .then( response => {
           setData(response.competitions);
           console.log( response );
           console.log(data)
         });
     },[]);
   
  return (
    <div>
      <h1> this is react final project</h1>
      <Table data={data}/>
      
    </div>
   
  );
};

export default MainDataHome;