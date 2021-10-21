import React from "react";

function CountryData(props) {
   return (
      <div className=" p-10 lg:p-20  space-y-2 flex lg:flex-row justify-around flex-col">
         <div className="lg:max-w-md max-w-none">
            <img className="w-screen" src={props.img} alt={props.name} />
         </div>

         <div className="space-y-2">
            <h1 className="font-extrabold text-3xl my-8">{props.name}</h1>
            <p>
               <span className="font-bold text-black">Native Name: </span>
               {props.native}
            </p>
            <p>
               <span className="font-bold">Population: </span>
               {props.population.toLocaleString("en-US")}
            </p>
            <p>
               <span className="font-bold">Region: </span>
               {props.region}
            </p>
            <p>
               <span className="font-bold">Sub Region: </span>
               {props.subregion}
            </p>
            <p>
               <span className="font-bold">Capital: </span>
               {props.capital}
            </p>
         </div>

         <div className="space-y-2 ">
            <p className="lg:mt-24 md:mt-24 mt-12">
               <span className="font-bold">Top Level Domain: </span>
               {props.domain.toString().split(" ")}
            </p>
            <p>
               <span className="font-bold">Currencies: </span>
               {props.currencies}
            </p>
            <p>
               <span className="font-bold">Languages: </span>
               {props.languages.toString().split(" ")}
            </p>
         </div>
      </div>
   );
}

export default CountryData;
