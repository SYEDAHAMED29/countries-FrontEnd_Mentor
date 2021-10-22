import React from "react";

function Header({darkTheme, setDarkTheme}) {
   return (
      <header className="bg-white dark:bg-custom-blue shadow-lg lg:p-2 sm:px-1 flex lg:justify-between md:justify-between">
         <h3 className="lg:ml-12 p-5 font-bold text-xl ">Where are you from??</h3>
         <button
            className="lg:mr-20 md:mr-20 lg:px-6 px-2 text-xl rounded-xl text-black dark:text-white  hover:shadow-lg"
            onClick={() => setDarkTheme(!darkTheme)}
         >
            {darkTheme ? (
               <p className="">
                  <i className="fas fa-lightbulb text-yellow-400 mr-4"></i>Light Mode
               </p>
            ) : (
               <p>
                  <i className="fas fa-moon text-gray-800 mr-4"></i>Dark mode
               </p>
            )}
         </button>
      </header>
   );
}

export default Header;
