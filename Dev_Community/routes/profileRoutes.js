const {addProfileDetails, updateProfileDetails, getProfileDetails} = require("../controllers/profileController.js"); 
const {authMiddleware} = require("../middlewares/authMiddleware.js");
const express = require("express");
const router = express.Router();

router.post("/profile", authMiddleware, addProfileDetails);
router.get("/get/profile", authMiddleware, getProfileDetails);
router.post("/update/profile", authMiddleware, updateProfileDetails);

module.exports = router;
