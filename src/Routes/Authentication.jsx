import { Link, Outlet } from "react-router";
import logo from "../Assets/Profast-Logo.png";
import authImage from "../Assets/authImage.png";
import Login from "../Components/Auth/Login";

function Authentication() {
    return(
        <div>
            <div className="navbar bg-base-100 shadow-sm rounded-2xl mt">
                <div className="navbar-start">
                    <Link to="/">
                        <a className="h-13 w-[120px] text-xl flex">
                            <img className="h-full w-full" src={logo} alt="" />
                        </a>
                    </Link>
                </div>
            </div>

            <div>
                <div className="bg-white min-h-[95vh] flex justify-center">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <img
                            src= {authImage}
                            className="w-[90%] rounded-lg"
                        />
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Authentication;