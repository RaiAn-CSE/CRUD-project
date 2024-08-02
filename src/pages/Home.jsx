import { useEffect, useState } from "react";
import useTittle from "../hooks/useTittle";
import axios from "axios";

const Home = () => {
    useTittle("Home")

    const [feedback, setFeedback] = useState([]);
    console.log(feedback);
    // const { firstName, lastName, password, city, state, zip } = feedback;

    useEffect(() => {
        axios.get('http://localhost:5000/feedback')
            .then(res => {
                const feedbackData = res.data;
                setFeedback(feedbackData)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    const handleDelete = (id) => {
        // Add delete functionality
        console.log(`Deleting feedback with id: ${id}`);
    };

    const handleUpdate = (id) => {
        // Add update functionality
        console.log(`Updating feedback with id: ${id}`);
    };

    return (
        <div className="flex justify-center items-center min-h-screen py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl">
                {feedback.length === 0 ? (
                    <p className="text-lg col-span-full text-center">Loading...</p>
                ) : (
                    feedback.map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:transform hover:-translate-y-1">
                            <h2 className="text-xl font-semibold mb-4">{item.firstName} {item.lastName}</h2>
                            <p><span className="font-bold">Password:</span> {item.password}</p>
                            <p><span className="font-bold">City:</span> {item.city}</p>
                            <p><span className="font-bold">State:</span> {item.state}</p>
                            <p><span className="font-bold">ZIP Code:</span> {item.zip}</p>

                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => handleUpdate(item._id)}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                                >
                                    Delete
                                </button>
                            </div>

                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;