import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdRealEstateAgent } from "react-icons/md";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLink = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-white text-xl'}>Home</NavLink></li>
        <li><NavLink to={'/update'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-white text-xl'}>Update Profile</NavLink></li>
        {
            user && <li><NavLink to={'/careers'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-white text-xl'}>Career</NavLink></li>
        }

    </>
    return (
        <div className="navbar bg-gray-900 mb-0  border-gray-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-gray-400 rounded-box w-52 z-20">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-white md:text-xl text-xs gap-0"><span className="md:text-4xl text-xl text-[hsl(112,43%,55%)]"><MdRealEstateAgent /></span><span className="text-xl md:text-2xl  text-[hsl(112,43%,55%)] p-0">
                    P</span>ro<span className="text-xl md:text-2xl  text-[hsl(112,43%,55%)] p-0">R</span>ealty<span className="text-base md:text-2xl  text-[hsl(112,43%,55%)] p-0">Hub</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user &&
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-5">
                        <div className="w-10 rounded-full">
                            <img alt={`picture of ${user.displayName}`} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Y36ZBDD/blank-avatar-photo-place-holder-600nw-1095249842.jpg'} title={user.displayName} />
                        </div>
                    </div>
                }
                {
                    user ? <>
                        <button onClick={logOut} className="btn text-[#f2f2f2f2] text-base md:text-xl bg-[hsl(112,43%,55%)] hover:bg-[hsl(112,43%,55%)]">LogOut</button>
                    </> :
                        <Link to={'/signIn'}>  <button className="btn text-[#f2f2f2f2] text-base md:text-xl bg-[hsl(112,43%,55%)] hover:bg-[hsl(112,43%,55%)]">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;