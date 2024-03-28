
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 h-16 z-10 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/'
                                className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500 rounded-lg ' : 'font-bold'} ><a>Home</a></NavLink>
                            <NavLink to='/ListedBooks'
                                className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500 rounded-lg ' : 'font-bold'}><a>Listed Books</a></NavLink>
                            <NavLink to='/PageToRead'
                                className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500 rounded-lg ' : 'font-bold'}><a>Page to Read</a></NavLink>
                            <NavLink to='/contact'
                                className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500 rounded-lg ' : 'font-bold'}><a>Contact</a></NavLink>
                            <NavLink to='/frk'
                                className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500 rounded-lg ' : 'font-bold'}><a>Frequently Asked Questions</a></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 p-5 items-center justify-center">
                        <NavLink to='/'
                            className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500 rounded-lg p-2' : 'font-bold'} ><a>Home</a></NavLink>
                        <NavLink to='/ListedBooks'
                            className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500 rounded-lg p-2' : 'font-bold'}><a>Listed Books</a></NavLink>
                        <NavLink to='/PageToRead'
                            className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500 rounded-lg p-2' : 'font-bold'}><a>Page to Read</a></NavLink>
                        <NavLink to='/contact'
                            className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500 rounded-lg p-2' : 'font-bold'}><a>Contact</a></NavLink>
                        <NavLink to='/frk'
                            className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500 rounded-lg p-2' : 'font-bold'}><a>Frequently Asked Questions</a></NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <a className="btn bg-green-600 text-white">Sing in</a>
                    <a className="btn bg-cyan-400 text-white">Sing Up</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;