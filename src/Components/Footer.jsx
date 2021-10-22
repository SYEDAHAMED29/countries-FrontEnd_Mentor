import React from "react";

function Footer() {
   const date = new Date();
   return (
      <footer className="dark:bg-custom-darkblue p-4 ">
         <p className="text-center dark:text-gray-200">
            <span className="text-black  text-lg dark:text-white">Syed Ahamed </span> @
            {date.getFullYear()}
         </p>
      </footer>
   );
}

export default Footer;
