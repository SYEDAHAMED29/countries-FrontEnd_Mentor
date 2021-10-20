import React, {useEffect, useState} from "react";
import axios from "axios";
import CountryInfo from "./CountryInfo";
import Loader from "../Components/Loader";

const url = "https://restcountries.com/v3.1/all";

function Countries() {
   const [list, setList] = useState([]);
   const [load, setLoad] = useState(false);
   const [searchTerm, setSearchTerm] = useState("");
   const [region, setRegion] = useState("");

   useEffect(() => {
      async function loadData() {
         setLoad(true);
         const response = await axios.get(url);
         setList(response.data);
         setLoad(false);
      }
      loadData();
   }, []);

   console.log(region);

   return (
      <div>
         <div className="p-12 bg-gray-500 flex justify-between ">
            <input
               className="p-4 w-80 mx-4"
               type="text"
               value={searchTerm}
               placeholder="Search For a Country"
               onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select className="p-4" name="" id="" onChange={(e) => setRegion(e.target.value)}>
               <option value="All">Filter By Region</option>
               <option value="Africa">Africa</option>
               <option value="America">America</option>
               <option value="Asia">Asia</option>
               <option value="Europe">Europe</option>
               <option value="Oceania">Oceania</option>
            </select>
         </div>
         <div className="bg-gray-50  p-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {load && <Loader />}

            {list
               .filter((item) => {
                  //*Filtering the country
                  if (searchTerm === "") {
                     return item;
                  } else if (item.name.common.toLowerCase().includes(searchTerm)) {
                     return item;
                  }
                  return false; //? To remove the filter error in the console.
               })
               .filter((item) => {
                  //*Filtering the Region
                  if (region === "All") {
                     return item;
                  } else if (item.region.toLowerCase().includes(region.toLowerCase())) {
                     return item;
                  }
                  return false; //? To remove the filter error in the console.
               })
               .map((item, index) => (
                  <CountryInfo
                     key={index}
                     img={item.flags.png}
                     name={item.name.common}
                     population={item.population}
                     region={item.region}
                     capital={item.capital}
                  />
               ))}
         </div>
      </div>
   );
}

export default Countries;
