const PROFILE = require("../models/profileModel.js");

const addProfileDetails = async (req, res) => {
  const {profileImg, experience, githubProfile, linkedinProfile, codingPlatform, skills, location, achievements } = req.body;
  
  // validate data
  if(!profileImg || !experience || !githubProfile || !linkedinProfile || !codingPlatform || !skills || !location || !achievements) {
    return res.status(500).json({message: "All fields are required!"});
  }
  const userId = req.user.id;
  const userProfile = await PROFILE.findOne({user:userId})
  if(userProfile) return res.status(500).json({message:"profile already exist"});
  try{
    const newProfile = await  PROFILE.create({
      user:userId,
      profileImg,
      experience,
      githubProfile,
      linkedinProfile,
      codingPlatform,
      skills,
      location,
      achievements
    })
    return res.status(201).json({profile: newProfile});
  }
  catch(err) {
    return res.status(500).json({message : "Profile not created"});
  }
}

const getProfileDetails = async(req, res) => {
  try {
    const userId =  req.user.id;
    const data = await PROFILE.findOne({ user: userId });
    return res.status(200).json({data});
  } catch (error) {
    return res.status(500).json({message:"profile not found"});
  }  
}

const updateProfileDetails = async (req, res) => {
  try {
    const  user_id  = req.user.id;
    const existingProfile = await PROFILE.findOne({ user: user_id });
    if(!existingProfile) return res.status(500).json({message:"profile already exist"});
    const updatedProfile = await PROFILE.findOneAndUpdate(
      {user: user_id},
      { $set: req.body },
      { new: true }
    )
    return res.status(200).json({message:"profile updated", data: updatedProfile});
  } catch (error) {
    res.status(500).json({message:"got error"});
  }
}

module.exports = {getProfileDetails, addProfileDetails, updateProfileDetails};
