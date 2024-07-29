
// import React, { useState } from 'react';

// const Name = () => {
//     const [index, setIndex] = useState(0);
//     const names = [
//         { Name: 'Rahmatullah', Age: 30, Button: "Change Name To Ahmed", color: "bg-red-400" },
//         { Name: 'Ahmed', Age: 25, Button: "Change Name To Ahsan ", color: "bg-blue-400" },
//         { Name: 'Ahsan', Age: 40, Button: "Change Name To Rahmatullah", color: "bg-slate-400" }
//     ];

//     const toggleName = () => {
//         setIndex(prevIndex => (prevIndex + 1) % names.length);
//     };

//     return (
//         <div>
//             <h1>{names[index].Name}</h1>
//             <p>Age: {names[index].Age}</p>
//             <button className={names[index].color} onClick={toggleName}>{names[index].Button}</button>
//         </div>
//     );
// }

// export default Name;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';

const Ali = () => {
    const [loading, setLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState([]);


    const API = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
        timeout: 30000,
    });
    const getApiCall = () => {
        setLoading(true);
        API.get("/todos/1")
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
    const auther = {
        Name: "Rahmatullah",
        Caste: "Bugti",
        Nic: 4502493021497,
        Mobile: 923072260256,

    }
    const makePostApiCall = () => {
        setLoading(true);
        API.post('/posts', auther)
            .then(response => {
                setApiResponse(response.data)
            }).catch((err) => {

                setApiResponse(err);
            }).finally(() => {
                setLoading(false);
            })
    }




    return (
        <div className='w-[100%] {color}'>
            <button className='bg-blue-500 rounded-sm px-4 py-2' onClick={getApiCall}>GetApiCall </button>
            <button className='bg-blue-500 rounded-sm px-4 py-2' onClick={makePostApiCall}>PostApiCall</button>

            {loading ? "Loading..." : JSON.stringify(apiResponse)}


        </div>

    );
};

export default Ali;
