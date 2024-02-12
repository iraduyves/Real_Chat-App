import jwt from 'jsonwebtoken';

const generateTokenAndSetCookies = (userId, res) => { 
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
         expiresIn: '1h' 
        });

   res.cookie('token', token, {
      maxAge:60*60*1000,
      httponly:true, // prevent cross site scripting attacks
      samesite:"strict", // prevent CSRF attacks
      secure:process.env.NODE_ENV !== 'development' // only send cookies over https
   })
}

export default generateTokenAndSetCookies;