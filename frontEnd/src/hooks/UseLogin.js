import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";


const UseLogin = () => {
 const [loading, setLoading] = useState(false);
 const {setAuthUser} = useAuthContext();


 const login =async({username,password})=>{

     setLoading(true);
    const success =handleInputErrors({username,password});
    if(!success){
        setLoading(false);
        return;
    }
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName: username, password: password }),
        });
        const data = await res.json();
        console.log(data.user);

        if (data.error) {
            throw new Error(data.error);
        }
    
        localStorage.setItem("authUser", JSON.stringify(data));
        setAuthUser(data);
    }
    catch (error) {
        toast.error("An error occurred in the login process.");
    }
    finally {
        setLoading(false);
    }

  }
  
  return {loading,login}

 }

export default UseLogin

function handleInputErrors({username, password }) {
    let hasError = false;

    if (!username || !password ) {
        toast.error("Please fill all fields.");
        hasError = true;
    }

    return !hasError;
}