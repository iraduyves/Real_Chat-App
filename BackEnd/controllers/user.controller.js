import User from "../Models/user.model.js";
export const getUsersForsidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;

        const allUsers = await User.find({ _id: { $ne: loggedInUser } });   
    } 
    catch (error) {
        console.error("Error in getUserForsidebar", error.message);
        res.status(500).json({error:"Internal server error"})
    }
}
