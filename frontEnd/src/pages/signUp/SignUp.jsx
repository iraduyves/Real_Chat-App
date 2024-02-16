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

    const { loading, signup } = UseSignup(); // Corrected import statement

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender: gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };
m,jhvgcfxdzjjl
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500">ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Input fields */}
                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have an Account?
                    </Link>
                    <button type="submit" className="btn btn-block btn-sm mt-2">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
