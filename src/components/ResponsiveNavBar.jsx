import React, {useState, useEffect} from "react";
import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";


const ResponsiveNavBar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

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