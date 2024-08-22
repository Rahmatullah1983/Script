import React from 'react'

const SideBarItem = ({ icon, label, isActive, onClick }) => {
    return (
        <div
            className={`flex items-center space-x-5 cursor-pointer px-5 py-2 rounded-[50px] ml-[117px] ${isActive ? 'bg-primary' : ''
                }`}
            onClick={onClick}
        >
            <div className='w-[18px] h-[18px]'>
                <img src={icon} alt={label} />
            </div>
            <h1>{label}</h1>
        </div>


    )
}

export default SideBarItem



