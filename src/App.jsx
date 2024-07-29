// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddStudents from './componants/AddStudents';
// const MyComponent = () => {
//   const [loading, setLoading] = useState(false);
//   const [apiResponse, setApiResponse] = useState([]);
//   const [groupedData, setGroupedData] = useState({});
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const API = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com",
//   })
//   const getApiCall = () => {
//     setLoading(true);
//     API.get("/todos")
//       .then(response => {
//         setApiResponse(response.data);
//         groupDataByUserId(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };
//   const groupDataByUserId = (data) => {
//     const grouped = data.reduce((acc, item) => {
//       if (!acc[item.userId]) {
//         acc[item.userId] = [];
//       }
//       acc[item.userId].push(item);
//       return acc;
//     }, {});
//     setGroupedData(grouped);
//   };

//   useEffect(() => {
//     getApiCall();
//   }, []);

//   return (
//     <div>
//       <div className='flex w-full space-x-10'>
//         {loading ? <p>Loading...</p> : (
//           <>
//             <div>
//               {Object.keys(groupedData).map(userId => (
//                 <button className='bg-sky-600 rounded-md px-4 py-2 text-white flex flex-col mb-4' key={userId} onClick={() => setSelectedUserId(userId)}>
//                   User {userId}
//                 </button>

//               ))}
//             </div>
//             {selectedUserId && (
//               <table>
//                 <thead className='border-4 border-sky-400'>
//                   <tr>
//                     <th className='border-4 border-sky-400'>Serial Number</th>

//                     <th className='border-4 border-sky-400'>Title</th>
//                     <th className='border-4 border-sky-400'>Completed</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {groupedData[selectedUserId].map((item, index) => (
//                     <tr key={item.id}>
//                       <td text className=' border-4 border-sky-400 text-center'>{index + 1}</td>
//                       <td className='border-4 border-sky-400 text-center'>{item.title}</td>
//                       <td className='border-4 border-sky-400  text-center'>{item.completed ? 'Yes' : 'No'}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </>
//         )}

//       </div>
//       <AddStudents/>

//     </div>
//   );
// };

// export default MyComponent;
import React, { useState, useEffect } from 'react';
import AddStudents from './componants/AddStudents'

const App = () => {

  useEffect(
    () => {
      console.log("componant is mounted")
    }, [])

  return (
    <div>
      <AddStudents Name="Carolla" color="Black" modal="2018" />
      <AddStudents Name="Civic" color="white" modal="2021" />
    </div>
  )
}

export default App

