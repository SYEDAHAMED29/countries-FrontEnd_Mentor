import React, {useState} from "react";
import Routes from "./Components/Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
   const [darkTheme, setDarkTheme] = useState(false);
   return (
      <div className={darkTheme ? "dark" : ""}>
         <div className="dark:bg-custom-darkblue bg-gray-50 dark:text-white min-h-screen">
            <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes />
            <Footer />
         </div>
      </div>
   );
}

export default App;
