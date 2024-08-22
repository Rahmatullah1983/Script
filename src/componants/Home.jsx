
import React from 'react';
import Finance from './finance/finance';
import SideBar from './finance/SideBar';
import Inventory from './inventory/Inventory';
import Ledger from './ledger/Ledger';
import Orders from './orders/Orders';
import Products from './products/Products';
import Reports from './reports/Reports';
import Settings from './settings/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
    return (
        <Router>
            <SideBar />
            <Routes>
                <Route path='/' element={<div>Welcome to the Home Page</div>} />
                <Route path='/finance' element={<Finance />} />
                <Route path='/inventory' element={<Inventory />} />
                <Route path='/ledger' element={<Ledger />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/products' element={<Products />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </Router>
    );
};

export default Home;

