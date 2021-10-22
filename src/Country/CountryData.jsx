import React from "react";

function CountryData(props) {
   return (
      <div className=" p-10 lg:p-20  space-y-2 flex lg:flex-row lg:justify-between flex-col">
         <div className="lg:max-w-md max-w-none">
            <img className="w-screen" src={props.img} alt={props.name} />
         </div>

         <div className="space-y-2">
            <h1 className="font-extrabold text-3xl my-8">{props.name}</h1>
            <p className="dark:text-gray-300">
               <span className="font-bold text-black dark:text-white">Native Name: </span>
               {props.native}
            </p>
            <p className="dark:text-gray-300">
               <span className="font-bold dark:text-white">Population: </span>
               {props.population.toLocaleString("en-US")}
            </p>
            <p className="dark:text-gray-300">
               <span className="font-bold dark:text-white">Region: </span>
               {props.region}
            </p>
            <p className="dark:text-gray-300">
               <span className="font-bold dark:text-white">Sub Region: </span>
               {props.subregion}
            </p>
            <p className="dark:text-gray-300">
               <span className="font-bold dark:text-white">Capital: </span>
               {props.capital}
            </p>
         </div>

         <div className="space-y-2 ">
            <p className="lg:mt-24 md:mt-12 mt-12 dark:text-gray-300">
               <span className="font-bold dark:text-white">Top Level Domain: </span>
               {props.domain.toString().split(" ")}
            </p>
            <p className="dark:text-gray-300">
               <span className="font-bold dark:text-white">Currencies: </span>
               {props.currencies}
            </p>
            <p className="dark:text-gray-300">
               <span className="font-bold dark:text-white">Languages: </span>
               {props.languages.toString().split(" ")}
            </p>
         </div>
      </div>
   );
}

export default CountryData;
