import { Outlet } from "react-router-dom";
import NavBar from './../components/NavBar';
import Footer from "../components/Footer";

const MainLayout = () => {

    return (
        <div className="container mx-auto">
            {/* the website name will be Edutrack */}
            <NavBar></NavBar>
            <div className="min-h-screen">
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;