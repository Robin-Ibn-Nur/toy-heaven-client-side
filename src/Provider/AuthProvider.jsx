import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'


export const AuthContext = createContext()


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState("light");

    const lightThemeStyles = {
        backgroundColor: "#FFFFFF", color: "#000000"
    };

    const darkThemeStyles = {
        backgroundColor: "#000000", color: "#FFFFFF"
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)

            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        logIn,
        signInWithGoogle,
        logOut,
        updateUserProfile,
        theme,
        toggleTheme,
        lightThemeStyles,
        darkThemeStyles
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;