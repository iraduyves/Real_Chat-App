import { useState } from "react";
import { Link } from "react-router-dom"
import UseLogin from "../../hooks/UseLogin";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading,login}= UseLogin()

    const HandleSubmit =async(e)=>{
        e.preventDefault();
        await login({username,password});
    }
  return (
   <>
     <div className="flex flex-col items-center justify-center min-w-96 max-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">login
            <span className="text-blue-500">ChatApp</span>
            </h1>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label htmlFor="" className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input 
                     type="text" 
                     placeholder="Enter Username" 
                     className="w-full input input-bodered h-10" 
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="" className="label ">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input 
                     type="password" 
                     placeholder="Enter password" 
                     className="w-full input input-bodered h-10" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Link to='/Signup' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    {"Don't"} have an account?
                </Link>
                <button 
                 className="btn btn-block btn-sm mt-2"
                 type="submit"
                 disabled={loading}
                >
                    {loading? <span className="loading loading-spinner"></span> : "Login"}
                </button>
            </form>
        </div>
     </div>
   </>
  )
}

export default Login