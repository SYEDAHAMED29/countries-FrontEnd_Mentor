import React from "react";

function CountryInfo(props) {
   return (
      <div
         className="bg-white shadow-md m-5 cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 "
         onClick={() => console.log(props.name)}
      >
         <img className="h-1/2 w-full" src={props.img} alt={props.name} />
         <h3 className="font-bold text-xl my-7 px-5">{props.name}</h3>

         <div className="space-y-1 px-5">
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
