const jwt = require("jsonwebtoken");
const User = require("../models/userModel")
// const Profile = require("../models/profileModel");


const authMiddleware = async (req,res,next)=>{
    const { authorization} = req.headers; 
    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token missing or invalid" });
    }
    
    const token = authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.SECRET_KEY);
  

    if(!user){
        res.status(401).json({
            message: "Unauthorized User"
        })
    }
    const  _id  = user.id;
    // console.log(_id)
    const userFind = await User.findById(_id);
    // console.log(userFind)

    
    if(!userFind){
        res.status(404).json({
            message: "User Not Found"
        })
    }
    
    req.user = userFind;
    
    next();
}


module.exports = { authMiddleware};
