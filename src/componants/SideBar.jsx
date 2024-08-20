// import React from 'react'
// import LogoImg from '../Assets/Logo/Logo.png'
// import HomeImg from '../Assets/Logo/SideBar/clarity_home-solid.png'
// import inventoryImg from '../Assets/Logo/SideBar/inventory.png'
// import orderImg from '../Assets/Logo/SideBar/orders.png'
// import CompanyImg from '../Assets/Logo/SideBar/companies.png'
// import custumerImg from '../Assets/Logo/SideBar/custumers.png'
// import expencesImg from '../Assets/Logo/SideBar/expences.png'
// import financeImg from '../Assets/Logo/SideBar/finance.png'
// import legerImg from '../Assets/Logo/SideBar/Leger.png'
// import productImg from '../Assets/Logo/SideBar/products.png'
// import reportImg from '../Assets/Logo/SideBar/report.png'
// import settingImg from '../Assets/Logo/SideBar/settings.png'

// const SideBar = () => {
//     return (
//         <div className='flex flex-col space-y-5 


//         bg-bgSideBar w-[350px] h-[937px] ml-[52px] shadow-sm'>

//             <div className='w-[px] h-[100px] mt-[-10px] ml-[85px]'>
//                 <img src={LogoImg} alt="Logo" />

//             </div>
//             <div className='flex ml-[117px] space-x-5'>
//                 <div className='w-[18px] h-[18px] '> <img src={HomeImg} alt="Home" /></div>
//                 <h1>Home</h1>
//             </div>
//             <div className='flex ml-[119px] space-x-5'>
//                 <div className='w-[18px] h-[17px] '> <img src={inventoryImg} alt="Inventory" /></div>
//                 <h1>Inventory</h1>
//             </div>
//             <div className='flex ml-[117px] space-x-5'>
//                 <div className='w-[18px] h-[18px] '> <img src={financeImg} alt="Finance" /></div>
//                 <h1>Finance</h1>
//             </div>
//             <div className='flex ml-[117px] space-x-5'>
//                 <div className='w-[18px] h-[18px] '> <img src={productImg} alt="Products" /></div>
//                 <h1>Products</h1>
//             </div>
//             <div className='flex ml-[117px] space-x-5'>
//                 <div className='w-[18px] h-[18px] '> <img src={custumerImg} alt="Customers" /></div>
//                 <h1>Customers</h1>
//             </div>
//             <div className='flex ml-[117px] space-x-5'>
//                 <div className='w-[18px] h-[18px] '> <img src={orderImg} alt="Orders" /></div>
//                 <h1>Orders</h1>
//             </div>
//             <div className='flex ml-[117px] space-x-5'>
//                 <div className='w-[18px] h-[18px] '> <img src={legerImg} alt="ledger" /></div>
//                 <h1>Ledger</h1>
//             </div>
//             <div className='flex ml-[117px] space-x-5'>
//                 <div className='w-[18px] h-[18px] '> <img src={expencesImg} alt="Expences" /></div>
//                 <h1>Expences</h1>
//             </div>
//             <div className='flex ml-[117px] space-x-5'>
//                 <div className='w-[18px] h-[18px] '> <img src={CompanyImg} alt="Companies" /></div>
//                 <h1>Companies</h1>
//             </div>
//             <div className='flex ml-[117px] space-x-5'>
//                 <div className='w-[18px] h-[18px] '> <img src={settingImg} alt="Settings" /></div>
//                 <h1>Settings</h1>
//             </div>
//             <div className='flex ml-[117px] space-x-5'>
//                 <div className='w-[18px] h-[18px] '> <img src={reportImg} alt="Reports" /></div>
//                 <h1>Reports</h1>
//             </div>
//         </div>
//     )
// }

// export default SideBar
import React from 'react';
import LogoImg from '../Assets/Logo/Logo.png';
import HomeImg from '../Assets/Logo/SideBar/clarity_home-solid.png';
import inventoryImg from '../Assets/Logo/SideBar/inventory.png';
import orderImg from '../Assets/Logo/SideBar/orders.png';
import CompanyImg from '../Assets/Logo/SideBar/companies.png';
import custumerImg from '../Assets/Logo/SideBar/custumers.png';
import expencesImg from '../Assets/Logo/SideBar/expences.png';
import financeImg from '../Assets/Logo/SideBar/finance.png';
import legerImg from '../Assets/Logo/SideBar/Leger.png';
import productImg from '../Assets/Logo/SideBar/products.png';
import reportImg from '../Assets/Logo/SideBar/report.png';
import settingImg from '../Assets/Logo/SideBar/settings.png';

const SideBar = () => {
    // Array to store sidebar items
    const sidebarItems = [
        { img: HomeImg, label: 'Home' },
        { img: inventoryImg, label: 'Inventory' },
        { img: financeImg, label: 'Finance' },
        { img: productImg, label: 'Products' },
        { img: custumerImg, label: 'Customers' },
        { img: orderImg, label: 'Orders' },
        { img: legerImg, label: 'Ledger' },
        { img: expencesImg, label: 'Expenses' },
        { img: CompanyImg, label: 'Companies' },
        { img: settingImg, label: 'Settings' },
        { img: reportImg, label: 'Reports' },
    ];

    return (
        <div className="flex flex-col space-y-5 bg-bgSideBar w-[350px] h-[937px] ml-[52px] shadow-sm">
            <div className="w-[200px] h-[100px] mt-[-10px] ml-[85px]">
                <img src={LogoImg} alt="Logo" />
            </div>
            {sidebarItems.map((item, index) => (
                <div key={index} className="flex ml-[117px] space-x-5">
                    <div className="w-[18px] h-[18px]">
                        <img src={item.img} alt={item.label} />
                    </div>
                    <h1>{item.label}</h1>
                </div>
            ))}
        </div>
    );
};

export default SideBar;

