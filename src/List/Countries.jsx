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

   return (
      <div>
         <div className="p-12  lg:flex-row lg:justify-between flex flex-col ">
            <input
               className=" p-4 text-lg lg:w-80 w-full md:w-80 lg:mx-4 border-2 border-blue-400 shadow-lg dark:bg-custom-blue dark:border-custom-blue "
               type="search"
               value={searchTerm}
               placeholder="Search For a Country"
               onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
               className="w-40 lg:mt-0  mt-10 py-4 px-3 shadow-lg border-2 border-blue-400 dark:bg-custom-blue dark:border-custom-blue cursor-pointer"
               onChange={(e) => setRegion(e.target.value)}
            >
               <option value="All">Filter By Region</option>
               <option value="Africa">Africa</option>
               <option value="America">America</option>
               <option value="Asia">Asia</option>
               <option value="Europe">Europe</option>
               <option value="Oceania">Oceania</option>
            </select>
         </div>
         <div className=" p-8 lg:p-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
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
