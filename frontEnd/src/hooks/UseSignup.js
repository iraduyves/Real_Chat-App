import { useState } from "react"


const UseSignup = () => {
    const [loading, setLoading] = useState(false)

    const signup = async({fullName,username,passeord,confirmPassword,gender}) => {
        const sucess = handleInputErrors({fullName,username,passeord,confirmPassword,gender})
        if(sucess) return;
    }

}
export default UseSignup

function handleInputErrors({fullName,username,passeord,confirmPassword,gender}) {
    if(!fullName || !username ||!passeord ||!confirmPassword ||!gender) {
        alert("All fields are required")
        return true
    }
}