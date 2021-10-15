import React from "react";

function Footer() {
   const date = new Date();
   return (
      <p className="text-center">
         <span className="text-black font-bold">Syed Ahamed </span> @{date.getFullYear()}
      </p>
   );
}

export default Footer;
