import bcryptjs from "bcryptjs"
import AuthModel from "../Auth_Models/AuthSchema.js"
import JWT from 'jsonwebtoken'


export const Signup = async (req, res) => {
    try {
        const {name,email, password, confirmPassword} = req.body;
        const existUser = await AuthModel.findOne({email}) 

        if(existUser){
            return(res.status(400).json({success : false , message : "User already exists"}))
        } 
        if(password !== confirmPassword){
            return(res.status(400).json({success : false, message : "Passwords do not match"}))
        }
        const hashpassword = await bcryptjs.hashSync(password,10)

        const newuser = await AuthModel.create({name,email, password:hashpassword, confirmPassword:hashpassword });
        const newUser =  newuser.save();

        res.status(200).json({message: "account created sucessfully" ,newUser});
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}


export const Login = async(req,res) =>{
    try {
        const {email, password} = req.body
        if (!email ||!password){
            res.status(400).json({error : "email and password are empty"})
        }
        const user = await AuthModel.findOne({email})

        if (!user){
            res.status(400).json({success : false ,message : "Invalid creadientials"})
        }

        if(!user.password){
            return(res.status(400).json({error : "user password is empty"}))
        }
        const checkValidation = await bcryptjs.compare(password , user.password)
          
   
        if(!checkValidation){
            return(res.status(400).json({success: false , message:"Invalid password"}))
        }
            
        const token =  JWT.sign({_id : user._id}, process.env.TOKEN_SECRET)
        
        res.cookie('token',token,{
            expires : new Date(Date.now() + 3600000),
            httpOnly : true,
            secure : false,
        })
        res.status(200).json({sucess: true, message : "Logged in successfully",user,token})

    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

export const Logout = async(req,res) =>{
    try {
        res.clearCookie('token')
        res.status(200).json({sucess : true, message : "Logged out successfully"})
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

export const getUser = async(req, res) =>{
    try {
        const user = await AuthModel.find()
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}