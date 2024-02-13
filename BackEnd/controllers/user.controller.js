import User from "../Models/user.model.js";
export const getUsersForsidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;

        const filterdUsers = await User.find({ _id: { $ne: loggedInUser } });   

        res.status(200).json(filterdUsers);
    } 
    catch (error) {
        console.error("Error in getUserForsidebar", error.message);
        res.status(500).json({error:"Internal server error"})
    }
}
