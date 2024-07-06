import Signup from "../Models/Signupschema.js";

export const createSignup = async (req, res) => {
    try {
        const {name,signuPemail,signupPassword,confirmPassword} = req.body;
        const newuser = await Signup.create({name,signuPemail,signupPassword,confirmPassword});
        newuser =  newuser.save();
        res.status(201).Signup(newuser);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

export const getSignup = async (req,res) =>{
    try {
        const signup = await Signup.find()
        res.status(200).json(signup)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}