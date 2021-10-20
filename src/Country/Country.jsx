import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router";
import CountryData from "./CountryData";
import {Link} from "react-router-dom";
import Loader from "../Components/Loader";

const url = "https://restcountries.com/v3.1/name/";

function Country() {
   const {country} = useParams();
   const history = useHistory();

   const [info, setInfo] = useState([]);
   const [load, setLoad] = useState(false);

   useEffect(() => {
      async function loadData() {
         try {
            setLoad(true);
            const response = await axios.get(url + country);
            console.log(response.data[0]);
            setInfo((prev) => {
               return [...prev, response.data[0]];
            });

            setLoad(false);
            //  setInfo([...info, response.data[0]]);
         } catch (error) {
            history.push("/404");
         }
      }

      loadData();
   }, [country, history]);

   return (
      <div>
         <Link to="/">
            <button className="text-black bg-indigo-50 px-7 py-3 border-2 shadow-md ml-16 mt-5">
               Back
            </button>
         </Link>

         {load && <Loader />}

         {info.map((data, index) => (
            <CountryData
               key={index}
               name={data?.name?.common}
               img={data?.flags?.png}
               native={Object.entries(data?.name?.nativeName)[0][1]?.official}
               population={data?.population}
               region={data?.region}
               subregion={data?.subregion}
               capital={data?.capital}
               domain={data?.tld}
               currencies={Object.entries(data?.currencies)[0][1]?.name}
               languages={Object.values(data?.languages)}
            />
         ))}
      </div>
   );
}

export default Country;
