import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <div className='h-16'>
                <Nav></Nav>
            </div>
            <div className='min-h-[calc(100vh-64px)]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;