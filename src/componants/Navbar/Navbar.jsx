
import React from 'react'
import LogoImg from '../../Assets/Logo/Logo.png'
import HomeImg from '../../Assets/Logo/SideBar/clarity_home-solid.png'
import inventoryImg from '../../Assets/Logo/SideBar/inventory.png'
import orderImg from '../../Assets/Logo/SideBar/orders.png'
import CompanyImg from '../../Assets/Logo/SideBar/companies.png'
import custumerImg from '../../Assets/Logo/SideBar/custumers.png'
import expencesImg from '../../Assets/Logo/SideBar/expences.png'
import financeImg from '../../Assets/Logo/SideBar/finance.png'
import legerImg from '../../Assets/Logo/SideBar/Leger.png'
import productImg from '../../Assets/Logo/SideBar/products.png'
import reportImg from '../../Assets/Logo/SideBar/report.png'
import settingImg from '../../Assets/Logo/SideBar/settings.png'
import downArrImg from '../../Assets/Logo/SideBar/downArrow.png'
import authorImg from '../../Assets/Logo/SideBar/pic.png'
import RightArrImg from '../../Assets/Logo/SideBar/rightArrow.png'
import ArrowImg from '../../Assets/Logo/SideBar/arrow.png'
const Navbar = () => {
    return (
        <div className='flex flex-col space-y-5 relative
        bg-bgSideBar w-[350px] h-[937px] ml-[52px] shadow-lg'>

            <div className='w-[px] h-[100px] mt-[-10px] ml-[85px]'>
                <img src={LogoImg} alt="Logo" />

            </div>

            <ul className='space-y-8'>
                <li>
                    <a href="/">
                        <div className='flex ml-[117px] space-x-5 active:bg-primary active:rounded-[50px] active:px-5 active:py-2'>
                            <div className='w-[18px] h-[18px]'>
                                <img src={HomeImg} alt="Home" />
                            </div>
                            <h1>Home</h1>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/inventory">
                        <div className='flex ml-[119px] space-x-5  active:bg-primary active:rounded-[50px] active:px-5 active:py-2'>
                            <div className='w-[18px] h-[17px] '> <img src={inventoryImg} alt="Inventory" /></div>
                            <h1>Inventory</h1>
                        </div>
                    </a>


                </li>
                <li>
                    <a href="/finance">
                        <div className='flex items-center justify-around  active:bg-primary active:rounded-[50px] active:px-5 active:py-2'>
                            <div className='flex ml-[72px] space-x-5 '>


                                <div className='w-[18px] h-[18px] '> <img src={financeImg} alt="Finance" /></div>
                                <h1>Finance</h1>
                            </div>
                            <div>
                                <img src={downArrImg} alt="Down Arrow" />
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/products">
                        <div className='flex ml-[117px] space-x-5  active:bg-primary active:rounded-[50px] active:px-5 active:py-2'>
                            <div className='w-[18px] h-[18px] '> <img src={productImg} alt="Products" /></div>
                            <h1>Products</h1>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/customers">

                        <div className='flex ml-[117px] space-x-5  active:bg-primary active:rounded-[50px] active:px-5 active:py-2'>
                            <div className='w-[18px] h-[18px] '> <img src={custumerImg} alt="Customers" /></div>
                            <h1>Customers</h1>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="orders">
                        <div className='flex ml-[117px] space-x-5  active:bg-primary active:rounded-[50px] active:px-5 active:py-2'>
                            <div className='w-[18px] h-[18px] '> <img src={orderImg} alt="Orders" /></div>
                            <h1>Orders</h1>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="ledger">
                        <div className='flex ml-[117px] space-x-5  active:bg-primary active:rounded-[50px] active:px-5 active:py-2'>
                            <div className='w-[18px] h-[18px] '> <img src={legerImg} alt="ledger" /></div>
                            <h1>Ledger</h1>
                        </div>

                    </a>
                </li>
                <li>
                    <a href="expences">
                        <div className='flex ml-[117px] space-x-5  active:bg-primary active:rounded-[50px] active:px-5 active:py-2'>
                            <div className='w-[18px] h-[18px] '> <img src={expencesImg} alt="Expences" /></div>
                            <h1>Expences</h1>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/companies">
                        <div className='flex ml-[117px] space-x-5  active:bg-primary active:rounded-[50px] active:px-5 active:py-2'>
                            <div className='w-[18px] h-[18px] '> <img src={CompanyImg} alt="Companies" /></div>
                            <h1>Companies</h1>
                        </div>

                    </a>
                </li>
                <li>
                    <a href="settings">
                        <div className='flex items-center justify-around  active:bg-primary active:rounded-[50px] active:px-5 active:py-2'>
                            <div className='flex ml-[72px] space-x-5 '>


                                <div className='w-[18px] h-[18px] '> <img src={settingImg} alt="Settings" /></div>
                                <h1>Settings</h1>
                            </div>
                            <div>
                                <img src={downArrImg} alt="Down Arrow" />
                            </div>
                        </div>

                    </a>
                </li>
                <li>
                    <a href="/reports">

                        <div className='flex items-center justify-around  active:bg-primary active:rounded-[50px]
                active:px-5 active:py-2'>
                            <div className='flex ml-[72px] space-x-5 '>


                                <div className='w-[18px] h-[18px] '> <img src={reportImg} alt="Report" /></div>
                                <h1>Reports</h1>
                            </div>
                            <div>
                                <img src={downArrImg} alt="Down Arrow" />
                            </div>
                        </div>

                    </a>
                </li>
            </ul>

            <div className='flex items-center w-[260px] h-[109px] ml-[90px] space-x-5   shadow-md -mt-1'>
                <div> <img src={authorImg} alt="Auther Image" /></div>
                <div >
                    <h1>Richard</h1>
                    <p className='text-xs font-normal leading-[18px] text-left
'>Richard@gmai.com</p>
                </div>
                <div> <img className='pl-5' src={RightArrImg} alt="Rigth Arrow" /></div>
            </div>

            <div className=' bg-gray-200 w-[35px] h-[35px] flex justify-center
            absolute top-3 right-[-15px] items-center mt-6 ml-[-20px] rounded-[50px]'>
                <img src={ArrowImg} alt="Left Arrow" /></div>





        </div>
    )
}

export default Navbar

