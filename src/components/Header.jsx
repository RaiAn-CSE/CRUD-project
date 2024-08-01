import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link >
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-900 dark:text-white hover:underline">About</Link>
                        </li>
                        <li>
                            <Link to="/feedback" className="text-gray-900 dark:text-white hover:underline">Feedback</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;