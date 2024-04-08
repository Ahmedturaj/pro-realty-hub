import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLink = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-black text-xl'}>Home</NavLink></li>
        <li><NavLink to={'/update'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-black text-xl'}>Update Profile</NavLink></li>
        <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-black text-xl'}>Contact</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl gap-0"><span className="text-2xl  text-[hsl(112,43%,55%)] p-0">P</span>ro<span className="text-2xl  text-[hsl(112,43%,55%)] p-0">R</span>ealty<span className="text-2xl  text-[hsl(112,43%,55%)] p-0">Hub</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end mr-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <a className="btn text-base md:text-xl bg-[hsl(112,43%,55%)]">Login</a>
            </div>
        </div>
    );
};

export default Navbar;