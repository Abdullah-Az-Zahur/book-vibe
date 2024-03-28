import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import { BarChart } from 'recharts';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <div className='h-16'>
                <Nav></Nav>
            </div>
            <div className='min-h-[calc(100vh-64px)]'>
                <Outlet></Outlet>
            </div>
            <BarChart></BarChart>
        </div>
    );
};

export default MainLayout;