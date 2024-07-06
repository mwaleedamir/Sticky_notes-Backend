import Signup from "../Models/Signupschema.js";
import bcryptjs from "bcryptjs";

export const createSignup = async (req, res) => {
    try {
        const {name,email, password, confirmPassword} = req.body;
        const existUser = await Signup.findOne({email})

        if(existUser){
            return(res.status(400).json({success : false , message : "User already exists"}))
        }
        if(password !== confirmPassword){
            return(res.status(400).json({success : false, message : "Passwords do not match"}))
        }
        const hashpassword = await bcryptjs.hashSync(password,10)

        const newuser = await Signup.create({name,email, password:hashpassword, confirmPassword:hashpassword });
        const newUser =  newuser.save();

        res.status(201).json(newUser);
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