import React from "react";
import {Link} from "react-router-dom";

function Notfound() {
   return (
      <div className="text-center bg-white ">
         <h1 className="text-red-600 font-bold text-2xl "> Looks like you got lost!!</h1>
         <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
            <Link to="/">Take me Home</Link>
         </button>
      </div>
   );
}

export default Notfound;
