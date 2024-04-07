const bcryptjs = require('bcryptjs')
const User = require('../models/userModel')
const errorHandler = require('../utils/error')
const  jwt = require('jsonwebtoken')


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


const signin = async (req,res,next) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user) return next(errorHandler(404,"User not found!"))

        const validPassword = bcryptjs.compareSync(password, user.password)
        if(!validPassword) return next(errorHandler(401,'Invalid Credientials!'))

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        
        // removing the password from the user data while sending back to the client
        const {password:pass, ...restData} = user._doc

        res.cookie('access_token',token,{httpOnly:true}).status(200).json(restData)

    } catch (error) {
        next(error)
    }
}

module.exports = {signup, signin}