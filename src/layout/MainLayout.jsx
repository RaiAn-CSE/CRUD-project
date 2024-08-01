import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className="h-screen mx-[5%] my-[20px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;