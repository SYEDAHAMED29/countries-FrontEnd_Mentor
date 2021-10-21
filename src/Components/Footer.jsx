import React from "react";

function Footer() {
   const date = new Date();
   return (
      <footer>
         <p className="text-center">
            <span className="text-black font-bold">Syed Ahamed </span> @{date.getFullYear()}
         </p>
      </footer>
   );
}

export default Footer;
