import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function PrivateRoute({children}) {
    const {loading, user} = useContext(AuthContext);
    console.log(loading);
    if(loading) {
        return <p>Hello world it is loading....</p>
    }
    return(
        <div>
            {children}
        </div>
    )
}

export default PrivateRoute;