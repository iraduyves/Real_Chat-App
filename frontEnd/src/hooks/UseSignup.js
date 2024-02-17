import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const UseSignup = () => {
    const [loading, setLoading] = useState(false);

    const {setAuthUser} = useAuthContext();

    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName: fullname, username: username, password: password, confirmPassword: confirmPassword, gender: gender });
    if (!success) {
        setLoading(false); // Ensure loading state is updated even if validation fails
        return;
    }

    setLoading(true);
    try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullName: fullname, userName: username, password: password, confirmPassword: confirmPassword, gender: gender }),
        });

        if (!res.ok) {
            throw new Error("Failed to sign up.");
        }

        const data = await res.json();

        if (data.error){
            throw new Error(data.error);
        }

        //local storage
         localStorage.setItem('AuthUser', JSON.stringify(data.user));
         setAuthUser(data);


        toast.success("Signup successful.");
    } catch (error) {
        toast.error("An error occurred in the signup process.");
    } finally {
        setLoading(false);
    }
};

    // Return loading and signup functions from the component
    return { loading, signup };
};

export default UseSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    let hasError = false;

    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill all fields.");
        hasError = true;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        hasError = true;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters.");
        hasError = true;
    }

    return !hasError;
}
