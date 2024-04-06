const bcryptjs = require('bcryptjs')
const User = require('../models/userModel')
const errorHandler = require('../utils/error')


const signup = async (req, res, next) => {

    const { username, email, password } = req.body

    const hashedPassword = bcryptjs.hashSync(password, 10) // encrypt password using bcryptjs

    const newUser = await new User({ username, email, password: hashedPassword })

    try {
        await newUser.save();
        res.status(201).json("new user created")
    } catch (error) {
        next(error);
        // next(errorHandler(201,"everything is fine"))
    }

}

module.exports = signup