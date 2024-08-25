import React from 'react'
import Navbar from '../Navbar/Navbar'
import searchIconImg from '../../Assets/Logo/SideBar/search-icon.png';
import NotificationImg from '../../Assets/Logo/SideBar/clarity_notification-line (1).png';
import downArrowImg from '../../Assets/Logo/SideBar/downArrow.png';
import strangeArrImg from '../../Assets/Logo/SideBar/Component 17.png'
import refreshImg from '../../Assets/Logo/SideBar/refresh.png'
import downloadImg from '../../Assets/Logo/SideBar/download.png'
const Finance = () => {
    return (
        <div className='flex  w-full flex-auto'>
            <Navbar />

            <div className='w-full ml-5 h-full p-2 flex flex-col '>

                <div className=' flex justify-between '>
                    <h1 className='font-bold'>Financce/payments</h1>
                    <div className='flex w-[1/5] space-x-10 '>
                        <div className="relative flex items-center px-6 py-1 border border-gray-300 rounded-full shadow-lg">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-8 pr-2 py-1 w-full  rounded-full outline-none"
                            />
                            <img
                                className="absolute right-4 w-4 h-4"
                                src={searchIconImg}
                                alt="Search icon"
                            />
                        </div>

                        <div className='  w-[35px] h-[35px] flex justify-center
             items-center  rounded-[50px] shadow-md border border-gray-100'  >
                            <img src={NotificationImg} alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-md p-5 rounded-md'>
                    <div className='flex w-[85%] justify-between mt-10 '>
                        <div className='flex'>
                            <div className="flex flex-col">
                                <label For="customer" className="mb-2">Customer</label>
                                <div className='flex relative items-center'>
                                    <input
                                        type="text"
                                        id="customer"
                                        placeholder="Select a customer"
                                        className=" h-10 border border-gray-300 rounded-md px-2 bg-slate-100"
                                    />
                                    <img className='w-2 h-2 absolute right-4 ' src={downArrowImg} alt="Down Arrow" />
                                </div>

                            </div>

                        </div>
                        <div className='flex'>
                            <div className="flex flex-col">
                                <label For="customer" className="mb-2">Amount</label>
                                <div className='flex relative items-center'>
                                    <input
                                        type="text"
                                        id="customer"
                                        placeholder="Amount"
                                        className="h-10 border border-gray-300 rounded-md px-2 bg-slate-100"
                                    />

                                </div>

                            </div>

                        </div>
                        <div className="flex flex-col">
                            <label For="customer" className="mb-2">Company</label>
                            <div className='flex relative items-center'>
                                <input
                                    type="text"
                                    id="customer"
                                    placeholder="Amount"
                                    className="h-10 border border-gray-300 rounded-md px-2 bg-slate-100"
                                />

                            </div>
                        </div>

                    </div>
                    <div className='flex relative w-full justify-between mt-6'>
                        <div className='flex w-[85%] justify-between'>
                            <div className='flex'>
                                <div className="flex flex-col">
                                    <label For="customer" className="mb-2">Customer</label>
                                    <div className='flex relative items-center'>
                                        <input
                                            type="text"
                                            id="customer"
                                            placeholder="Select a customer"
                                            className="h-10 border border-gray-300 rounded-md px-2 bg-slate-100"
                                        />
                                        <img className='w-2 h-2 absolute right-4 ' src={downArrowImg} alt="Down Arrow" />
                                    </div>

                                </div>

                            </div>
                            <div className='flex'>
                                <div className="flex flex-col">
                                    <label For="customer" className="mb-2">Amount</label>
                                    <div className='flex relative items-center'>
                                        <input
                                            type="text"
                                            id="customer"
                                            placeholder="Amount"
                                            className=" h-10 border border-gray-300 rounded-md px-2 bg-slate-100"
                                        />

                                    </div>

                                </div>

                            </div>
                            <div className="flex flex-col">
                                <label For="customer" className="mb-2">Company</label>
                                <div className='flex relative items-center'>
                                    <input
                                        type="text"
                                        id="customer"
                                        placeholder="Amount"
                                        className=" h-10 border border-gray-300 rounded-md px-2 bg-slate-100"
                                    />

                                </div>
                            </div>

                        </div>
                        <div className='absolute right-0 bottom-0 flex items-center justify-center rounded-sm shadow-sm
                    h-10 w-[100px] text-white bg-primary'>
                            <button >Add</button>
                        </div>


                    </div>
                </div>
                <div className='shadow-md p-5 mt-5'>
                    <div className=' flex items-center justify-between'>
                        <div className='flex space-x-5 shadow-lg'>
                            <div className='rounded-lg p-2 border border-slate-300'> <img src={strangeArrImg} alt="" /></div>
                            <div className='flex items-center border border-slate-300 px-4 space-x-5 rounded-md'>
                                <img className='w-4 h-4' src={searchIconImg} alt="" />
                                <input type="text" placeholder='Aspen Waste' />
                            </div>
                        </div>
                        <div className='flex shadow-lg space-x-5'>
                            <div className='flex items-center px-3 py-1 space-x-3
                             border border-slate-300 rounded-md'>
                                <img className='h-3 w-3' src={refreshImg} alt="" />
                                <h1>Refresh</h1>
                            </div>
                            <div className='flex items-center px-3 py-1 space-x-3
                             border border-slate-300 rounded-md'>
                                <img className='h-3 w-3' src={downloadImg} alt="" />
                                <h1>Download</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Finance
