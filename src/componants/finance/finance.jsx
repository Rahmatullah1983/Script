import React from 'react'
import Navbar from '../Navbar/Navbar'
import ArrowImg from '../../Assets/Logo/SideBar/arrow.png'

const Finance = () => {
    return (
        <div className='flex w-full flex-auto'>
            <Navbar />
            <div className=' bg-gray-200 w-[35px] h-[35px] flex justify-center items-center mt-6 ml-[-20px] rounded-[50px]'>
                <img src={ArrowImg} alt="Left Arrow" /></div>
            <div className='bg-gray-600 w-full ml-5 h-full'>
                <div className=''></div>
            </div>
        </div>
    )
}

export default Finance
