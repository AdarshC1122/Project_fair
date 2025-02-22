const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')




exports.userRegister = async (req, res) => {
    const { username, password, email } = req.body
    console.log(username, password, email)
    console.log("inside register function!!!")
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(401).json("user registration successfull")
        } else {
            const newUser = new users({
                username, password, email, profile: "", github: "", linkdin: ""
            })
            await newUser.save()
            res.status(201).json(newUser)
        }
    } catch (err) {
        res.status(404).json(err)
    }
}


exports.userLogin = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body);
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ email: existingUser.email, username: existingUser.username, userId: existingUser._id }, process.env.secret_key)
            const rest = { token, user: existingUser.username, userDetails: existingUser }
            console.log(existingUser)
            console.log(token)
            res.status(200).json(rest)

        }
        else {
            res.status(406).json("Invalied Username/Password!!!")
        }
    }
    catch (err) {
        console.log(err)
        res.status(401).json(err)

    }
}

exports.userUpdateProfile = async (req, res) => {
    const userId = req.payload
    const {username, password, email, github, linkdin} = req.body
    const profileimage = req.file ? req.file.filename : profile
    try {
        const updateUser = await users.findByIdAndUpdate({ _id: userId }, { username, password, email, github, linkdin, profileimage }, { new: true })
        await updateUser.save()
        res.status(200).json(updateUser)
    }
    catch (err) {
        console.log(err);
        res.status(406).json(err)
    }

}