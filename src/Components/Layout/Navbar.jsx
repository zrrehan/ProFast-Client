import { Link, NavLink } from "react-router"
import logo from "../../Assets/Profast-Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
function Navbar() {
    const { user } = useContext(AuthContext);
    console.log(user?.photoURL);
    const links = <>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/coverage">Coverage</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/send-item">Send Item</NavLink>
        <NavLink to="/be-a-rider">Be a Rider</NavLink>
    </>
    return(
        <div className="navbar bg-base-100 shadow-sm rounded-2xl mt-8 px-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
                        {links}
                    </ul>
                </div>
                <a className="h-12 w-[120px] text-xl hidden lg:flex">
                    <img className="h-full w-full" src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-7">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-5">
                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="DP"
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <Link to="/dashboard" className="justify-between">
                                            Dashboard
                                            <span className="badge">New</span>                                      
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </>
                        : <>
                            <a className="btn rounded-xl px-5 bg-[##eaeced]">Login</a>
                            <Link to="/login"><a className="btn rounded-xl px-5 bg-[#CAEB66]">Be a rider</a></Link>
                        </>
                }
            </div>
        </div>
    )
}

export default Navbar