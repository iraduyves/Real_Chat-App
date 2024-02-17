import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import UseSignup from "../../hooks/UseSignup";

function SignUp() {
    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading,signup } = UseSignup(); 

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender: gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500">ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="" className="label p-2"> 
                        <span className="text-base label-text">Full Name</span>
                      </label> 
                      <input type="text" placeholder="Jhon Doe*" className="w-full input input-bodered h-10" 
                         value={inputs.fullname}
                        onChange={(e) => setInputs({...inputs, fullname: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="label p-2"> 
                        <span className="text-base label-text">User Name</span>
                      </label> 
                      <input type="text" placeholder="JhonDoe*" className="w-full input input-bodered h-10" 
                         value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="label p-2"> 
                        <span className="text-base label-text">Password</span>
                      </label> 
                      <input type="password" placeholder="Your password*" className="w-full input input-bodered h-10" 
                         value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="label p-2"> 
                        <span className="text-base label-text">Confirm Password</span>
                      </label> 
                      <input type="password" placeholder="Re-type Your password*" className="w-full input input-bodered h-10" 
                         value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                      />
                    </div>
                   
                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have an Account?
                    </Link>
                    <button type="submit" className="btn btn-block btn-sm mt-2" disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span> : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
