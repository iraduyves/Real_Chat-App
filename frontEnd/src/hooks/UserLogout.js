import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function UserLogout() {

    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
       const res =await fetch("api/auth/logout",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            }
        })
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }

        localStorage.removeItem("authUser");
        setAuthUser(null);
    } 
    catch (error) {
        toast.error("An error occurred in the logout process.");
    }
    finally{
        setLoading(false);
    }
  }

  return {loading,logout}
}

export default UserLogout