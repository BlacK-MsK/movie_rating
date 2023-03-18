const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Users = require('../models/Users');

const loginRequestHandler = async ( req, res, next ) => {
    const {Email, Password} = req.body;

    const loginRequest = await Users.findOne({Email});
    if(!loginRequest){
        return res.status(401).json({message: "Invalid Email or Password."});
    }

    const encryptedPassword = loginRequest.Password;
    const passwordMatch = await bcrypt.compare(encryptedPassword, Password);
    if(!passwordMatch){
        return res.status(401).json({message: "Invalid Email or Password."});
    }

    const token = jwt.sign({userID: loginRequest._id}, process.env.JWT_SECRET);
    res.send({token});

    res.send(loginRequest);
};
router.get('/',loginRequestHandler);

module.exports = router;