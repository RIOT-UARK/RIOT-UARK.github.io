import React, {useState, useEffect} from "react";
import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";


function ResponsiveNavBar() {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    return isMobile ? ( <MobileNavBar /> ) : ( <NavBar /> );
}

export default ResponsiveNavBar;