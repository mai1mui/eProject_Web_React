//1.Install react-router-dom
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <div className="location-1-1">
                <Navbar />
            </div>
            <div className="location-1-2">
               
            </div>
            <div className="location-2-1">
                <Outlet />
            </div>
            <div className="location-2-2">
                <Footer/>
            </div>
        </>
    );
}

export default Layout;