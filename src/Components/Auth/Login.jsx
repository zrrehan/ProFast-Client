import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

function Login() {
    const { googleSignIn } = useContext(AuthContext);
    function googleFunction() {
        googleSignIn().then(userInfo => {
            // after google sign In
        })
    }
    return(
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input rounded-2xl" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input rounded-2xl" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn bg-[#CAEB66] mt-4 rounded-3xl">Login</button>
                </fieldset>

                {/* Google */}
                <button onClick={googleFunction} className="btn rounded-3xl bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
                <p>Dont have any Account? <Link to = "/registration" className="font-semibold text-[#CAEB66]">Register Now</Link></p>
            </div>
        </div>
    )
}

export default Login;