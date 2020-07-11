import React, {
    useEffect, useState
} from "react";
import StrapiService from "../services/strapiService";
import Table from "./Table"

const MainDataHome = () => {
   const [ data, setData ] = useState([]);
   const [ data2, setData2 ] = useState([]);
   const strapiService = new StrapiService();

   useEffect( () => {
       strapiService.getData() 
         .then( response => {
           setData(response.competitions);
           console.log( response );
           console.log(data)
         });
        strapiService.getData2() 
         .then( response => {
           setData2(response.areas);
           console.log( response );
         });
     },[]);
   
  return (
    <div>
      <h1> this is react final project</h1>
      <Table data={data} data2={data2}/>
    </div>
   
  );
};

export default MainDataHome;