import Login from "../Models/loginschema.js"
import bcryptjs from "bcryptjs"
export const CreateLogin = async(req,res) =>{
    try {
        const {email, password} = req.body
        if (!email ||!password){
            res.status(400).json({error : "email and password are empty"})
        }
        const user = await Login.findOne({email})
        if (user){
            res.status(400).json({secess : false ,message : "user already exists"})
        }
        const checkValidation = await bcryptjs.compare(password , user.password)
        if(!checkValidation){
            return(res.status(400).json({sucess: false , message:"Invalid password"}))
        }
        res.status(200).json({sucess: true, message : "Logged in successfully"})
        
        const hashPassword = await bcryptjs.hashSync(password,10)
        const login = await Login.create({email, password:hashPassword})
        const newlogin = login.save()
        res.status(200).json(newlogin)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

export const GetLogin = async(req,res) =>{
    try {
        const login = await Login.find()
        res.status(200).json(login)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}