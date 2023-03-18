const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Users = require('../models/Users');

const signupRequestHandler = async ( req, res, next ) => {
    const {Name, Email, Password} = req.body;

    if(!Email || !Password) {
        return res.status(400).json({message:"Email and Password must be provided"});
    }

    const signUpRequest = await Users.findOne({Email});
    if(signUpRequest){
        return res.status(409).json({message: "User already exists"});
    }
    const encryptedPassword = await bcrypt.hash(Password, 10);
    const Users = new Users({Name, Email, encryptedPassword});

    await signUpRequest.save();

    const token = jwt.sign({userID: signupRequest._id}, process.env.JWT_SECRET);
    res.send({token});

    res.send(loginRequest);
};
router.get('/', signupRequestHandler);

module.exports = router;