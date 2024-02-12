import  Jwt  from "jsonwebtoken";
import User from "../Models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        const decoded = Jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }

        const user = await User.findById(decoded.userId);
    } 
    catch (error) {
        console.log("Error in protectRoute:", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}

export default protectRoute;