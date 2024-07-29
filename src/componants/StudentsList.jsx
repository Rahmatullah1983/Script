
import React, { useState } from 'react';
import AddStudents from './AddStudents';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const addStudent = (student) => {
        setStudents([...students, { ...student, id: students.length + 1 }]);
        setShowForm(false); // Hide the form after adding a student
    };
    return (
        <div>

            <div className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-lg'>My School Students List</h1>
                <div className='overflow-x-auto min-w-[100%] relative'>
                    <table className='w-[100vh] bg-white'>
                        <thead>
                            <tr className='w-[200vh]'>
                                <th className='px-4 py-2 border border-black'>Sr#</th>
                                <th className='px-4 py-2 border border-black'>Name</th>
                                <th className='px-4 py-2 border border-black'>Age</th>
                                <th className='px-4 py-2 border border-black'>Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((data, index) => (
                                <tr key={index} className='px-2 py-2'>
                                    <td className='px-4 py-2 border border-black'>{index + 1}</td>
                                    <td className='px-4 py-2 border border-black'>{data.Name}</td>
                                    <td className='px-4 py-2 border border-black'>{data.Age}</td>
                                    <td className='px-4 py-2 border border-black'>{data.qualification}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button onClick={() => setShowForm(!showForm)} className='mt-4 p-2 bg-blue-500 text-white rounded'>
                    Add Student
                </button>
                {showForm && <AddStudents addStudent={addStudent} />}

            </div>

            <div className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-lg'>My School Students List</h1>
                <div className='overflow-x-auto min-w-[100%] relative'>
                    <table className='w-[100vh] bg-white'>
                        <thead>
                            <tr className='w-[200vh]'>
                                <th className='px-4 py-2 border border-black'>Sr#</th>
                                <th className='px-4 py-2 border border-black'>Name</th>
                                <th className='px-4 py-2 border border-black'>Age</th>
                                <th className='px-4 py-2 border border-black'>Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((data, index) => (
                                <tr key={index} className='px-2 py-2'>
                                    <td className='px-4 py-2 border border-black'>{index + 1}</td>
                                    <td className='px-4 py-2 border border-black'>{data.Name}</td>
                                    <td className='px-4 py-2 border border-black'>{data.Age}</td>
                                    <td className='px-4 py-2 border border-black'>{data.qualification}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button onClick={() => setShowForm(!showForm)} className='mt-4 p-2 bg-blue-500 text-white rounded'>
                    Add Student
                </button>
                {showForm && <AddStudents addStudent={addStudent} />}

            </div>
        </div>
    );
};

export default StudentsList;

