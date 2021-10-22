import React from "react";
import {Link} from "react-router-dom";

function Notfound() {
   return (
      <div className=" bg-white dark:bg-custom-darkblue max-h-full flex flex-col justify-center items-center space-y-4">
         <h1 className="mt-4 text-3xl font-bold ">Uh!! Looks like you got lost...</h1>
         <button className="py-4 px-8 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
            <Link to="/">Take me Home</Link>
         </button>
         <img
            src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
            className="lg:max-w-md md:max-w-md max-w-xs text-center "
            alt="404 Error page"
         />
      </div>
   );
}

export default Notfound;
