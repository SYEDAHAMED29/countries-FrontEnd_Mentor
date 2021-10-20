import React from "react";

function CountryData(props) {
   return (
      <div className="w-80 m-auto space-y-2">
         <h1 className="font-extrabold text-7xl">{props.name}</h1>
         <img className="block" src={props.img} alt={props.name} />
         <div>
            <p>
               <span className="font-bold">Native Name: </span>
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

         <div>
            <p>
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
