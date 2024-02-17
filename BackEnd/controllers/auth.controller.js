import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from '../utils/generateToken.js';



export const signUp = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;
       console.log({ fullName, userName, password, confirmPassword, gender });
        // Check if passwords  meet minimum length requirement
        if ( password.length < 6) {
            return res.status(400).json({ error: "Passwords must have a minimum length of 6 characters" });
        }
        // Check if passwords match 
        if (password !== confirmPassword ) {
            return res.status(400).json({ error: "Passwords must match " });
        }

        // Check if username already exists
        const existingUser = await User.findOne({ userName });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // create Hashpassword 
        const salt = await bcrypt.genSalt(10);
        const Hashedpassword= await bcrypt.hash(password, salt);

        // Define default profile pictures based on gender
        const boyProfilePic = `https://lh3.googleusercontent.com/a/ACg8ocJVQGI3yuE90Bne6DPOWU9OESNjcaZu7Q4msW3ySQo0wtA=s324-c-no`;
        const girlProfilePic = `https://thumbs.dreamstime.com/b/animation-portrait-young-beautiful-african-woman-dreadlocks-animation-portrait-young-beautiful-african-woman-129803228.jpg`;

        // Create a new user instance
        const newUser = new User({
            fullName,
            userName,
            password:Hashedpassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if(newUser){

            //Generate JWT token 
             generateTokenAndSetCookies(newUser._id, res);

            // Save the new user to the database
            await newUser.save();
    
            // Send success response
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                gender: newUser.gender,
                profilePic: newUser.profilePic,
                createdAt: newUser.createdAt,
                message: "User created successfully"
            });
        }
        else{
            res.status(400).json({ error: "Invalid User data" });   
        }
    } catch (error) {
        // Handle server error
        console.error("Error in Signup:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const loginUser = async (req, res) => {
   try {
    const {userName, password} = req.body;
    const user = await  User.findOne({ userName });
    const isPasswordCorrect =await bcrypt.compareSync(password, user?.password || "");

    // Check if user exists and password is correct
    if(!user ||!isPasswordCorrect)
    {
        return res.status(400).json({ error: "Invalid Username or Password" });
    }
     
    const token = generateTokenAndSetCookies(user._id, res);

    // Send success response
    res.status(200).json({ 
        token: token,
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        gender: user.gender,
        profilePic: user.profilePic,
        createdAt: user.createdAt,
        message: "User logged in successfully"
    });
   } 
  catch (error) {
        // Handle server error
        console.error("Error in Loggin:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const logout = (req, res) => {
   try {
    // Delete the token from the cookies
    res.cookie("jwt", "", { maxAge: -1, httpOnly: true });
    res.status(200).json({ message: "User logged out successfully" });
   } 
    catch (error) {
        // Handle server error
        console.error("Error in LoggingOut:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

