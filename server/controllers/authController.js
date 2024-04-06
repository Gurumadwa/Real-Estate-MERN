const bcryptjs = require('bcryptjs')
const User = require('../models/userModel')


const signup = async (req,res) => {
    
    const {username,email,password} = req.body

    const hashedPassword =  bcryptjs.hashSync(password,10) // encrypt password using bcryptjs

    const newUser = await new User({username,email,password:hashedPassword})

    try {
        await newUser.save();
        res.status(201).json("new user created")
    } catch (error) {
        res.status(500).json(error.message)
    }

}

module.exports = signup