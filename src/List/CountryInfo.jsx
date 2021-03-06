import React from "react";
import {useHistory} from "react-router";

function CountryInfo(props) {
   const history = useHistory();
   return (
      <div
         className="pb-8 max-h-full bg-white dark:bg-custom-blue rounded-xl shadow-md m-5 cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 "
         onClick={() => history.push(`/${props.name}`)}
      >
         <img className="h-1/2 w-full " src={props.img} alt={props.name} loading="lazy" />
         <h3 className="font-bold text-xl my-7 px-5">{props.name}</h3>

         <div className="space-y-1 px-5  ">
            <p>
               <span className="text-base font-semibold">Population : </span>
               {props.population.toLocaleString("en-US")}
            </p>
            <p>
               <span className="text-base font-semibold">Region : </span> {props.region}
            </p>
            <p>
               <span className="text-base font-semibold">Capital : </span> {props.capital}
            </p>
         </div>
      </div>
   );
}

export default CountryInfo;
