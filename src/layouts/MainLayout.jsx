import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-220px)] bg-gray-100 my-6'>
                <Outlet></Outlet>
            </div>
            <div className=' bg-black'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;