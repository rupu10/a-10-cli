import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {

    const [recipes, setRecipes] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:7500/recipes')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[reload])

    // console.log(recipes);

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const createUserWithGmail = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe
        }
    },[])

    const userInfo = {
        createUser,
        createUserWithGmail,
        logInUser,
        googleSignIn,
        signOutUser,
        user,
        setUser,
        recipes,
        setRecipes,
        setReload,
        reload
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;