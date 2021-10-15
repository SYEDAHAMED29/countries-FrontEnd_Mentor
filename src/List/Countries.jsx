import React, {useEffect, useState} from "react";
import axios from "axios";
import CountryInfo from "./CountryInfo";

const url = "https://restcountries.com/v3.1/all";

function Countries() {
   const [list, setList] = useState([]);

   useEffect(() => {
      async function loadData() {
         const response = await axios.get(url);
         setList(response.data);
      }
      loadData();
   }, []);

   return (
      <div className="bg-gray-50  p-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
         {list.map((item, index) => (
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
   );
}

export default Countries;
