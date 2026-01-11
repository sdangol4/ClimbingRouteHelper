
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {auth, googleProvider} from "../config/firebase";
import {createUserWithEmailAndPassword,signInWithPopup,signOut,signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const signUp = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            console.log("You have Signed in using Email and Password")
        }
        catch(err){ 
            console.error(err);
        }
    }

    const singIn = async() => {
        try{
            await signInWithEmailAndPassword(auth,email,password)
            console.log(`Signed In Using: ${email}`)
        }
        catch(err){
            console.error(err)
        }
    }

    const singInWithGoogle = async () =>{
        try{
            await signInWithPopup(auth, googleProvider);
            console.log("You have been Loggedin using Google Provider")
        }
        catch (err){
            console.error(err);

        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("You have been logged out ");
        }
        
        catch(err){
            console.error(err);

        }
    }

    return (
        <div className=" flex  justify-center gap-2">
            <div className="flex flex-col gap-4 pt-10">
                <Input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
                <Input type="Password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                <Button type="submit" variant="outline" onClick={singIn}>
                    SignIn
                </Button>
                   <Button type="submit" variant="outline" onClick={signUp}>
                    SignUp
                </Button>
            </div>

            <div className="flex flex-col gap-4 pt-10">
             
                <Button type="submit" variant="outline" onClick={singInWithGoogle}>
                    SingUp using Google
                </Button>
            </div>
                  <div className="flex flex-col gap-4 pt-10">
             
                <Button type="submit" variant="outline" onClick={logout}>
                    Logout
                </Button>
            </div>
        </div>


    )
}

export default LogIn
