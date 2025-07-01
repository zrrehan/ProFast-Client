import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.init";

const provider = new GoogleAuthProvider();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function googleSignIn() {
        return signInWithPopup(auth, provider);
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (userInfo) => {
            setUser(userInfo);
        })

        return(() => {
            unSubscribe();
        })
    })

    const value = {
        googleSignIn, user, setUser
    }
    return(
        <AuthContext value = {value}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;