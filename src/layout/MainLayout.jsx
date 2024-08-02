import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Header />
            </div>
            <div className="min-h-screen mx-[5%] my-[20px] overflow-y-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;