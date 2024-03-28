import React, { useState } from 'react';
import Nav from '../components/Nav';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const ListedBooks = () => {

    const books = useLoaderData();
    

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='container mx-auto'>
            <h2 className="max-w-fit justify-center items-center mx-auto text-6xl font-bold my-5 mb-10">Books</h2>

            {/* Tabs */}
            <div role="tablist" className="tabs tabs-lifted justify-start">
                <Link
                    to='/ListedBooks/Readd'
                    // onClick={() => setTabIndex(0)}
                    onClick={() => setTabIndex(0)}
                    role="tab" className={` ${tabIndex === 0 ? 'tab tab-active' : 'tab'}`}>Read Books</Link>
                <Link
                    to={`/ListedBooks/wishlist`}
                    onClick={() => setTabIndex(1)}
                    role="tab" className={`tab ${tabIndex === 1 ? 'tab tab-active' : 'tab'}`}>Wishlist Books</Link>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;