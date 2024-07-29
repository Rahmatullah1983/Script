// // // import React, { useState } from "react";
// // // import classNames from 'classnames';

// // // const AddStudents = () => {
// // //     const [style, setStyle] = useState({
// // //         colorClass: "bg-red-400",
// // //         widthClass: "w-40",
// // //         heightClass: "h-40",
// // //         btnName: "Set Color to green"
// // //     });

// // //     const upDateStyle = () => {
// // //         setStyle({
// // //             colorClass: "bg-green-400",
// // //             widthClass: "w-20",
// // //             heightClass: "h-20",
// // //             btnName: "Set Color to red"
// // //         });
// // //     };

// // //     return (
// // //         <div className={classNames("w-[50%] h-[50vh]", style.colorClass, style.widthClass, style.heightClass)}>
// // //             <button className="bg-blue-500 rounded-sm px-4 py-2" onClick={upDateStyle}>{style.btnName}</button>
// // //         </div>
// // //     );
// // // };

import React, { useState } from "react";
import axios from "axios";

const AddStudents = () => {
    const [loading, setLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState([]);

    const API = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
        timeout: 30000,
    });

    const getApiCall = () => {
        setLoading(true);
        API.get("/todos")
            .then(response => {
                setApiResponse(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const colors = ["bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-green-100", "bg-green-200",
        "bg-green-300", "bg-green-400", "bg-blue-100", "bg-yellow-100", "bg-purple-100"];

    return (
        <div>
            <button
                className="bg-blue-500 hover:bg-yellow-900 delay-200 hover:scale-125 rounded-lg mt-5 px-4 py-2"
                onClick={getApiCall}
            >
                Make API Call
            </button>
            {loading && <p>Loading...</p>}
            <ul>
                {apiResponse.map((todo, index) => (
                    <div key={todo.id}
                        className={`flex w-[100%] flex-wrap wrap sm:flex-wrap no-wrap ${colors[index % colors.length]}`}>
                        <h1 className="w-[1/10]"><span className="text-red-600">Sr No:</span> <span className="pr-10"> {todo.id}</span></h1>
                        <p className="w-[50%]"><span className="text-blue-600">Title:</span> <span className="pr-10"> {todo.title}</span></p>
                        <h1 className="w-[1/10]"><span className="text-green-600">Completed:</span> <span className="pr-10"> {todo.completed ? "Yes" : "No"}</span></h1>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default AddStudents;
