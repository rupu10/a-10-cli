import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {

    const [recipes, setRecipes] = useState([])
    const [reload, setReload] = useState(true)

    useEffect(()=>{
        fetch('https://a-10-server-flame.vercel.app/recipes')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    const reFetch =()=>{
        fetch("https://a-10-server-flame.vercel.app/recipes")
    .then(res => res.json())
    .then(data => setRecipes(data));
    }

    console.log(recipes);

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)

    const createUser = (email,password) => {
        setReload(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const createUserWithGmail = () => {
        setReload(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logInUser = (email,password) => {
        setReload(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {
        setReload(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = () => {
        setReload(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setReload(false)
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
        reload,
        reFetch
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;