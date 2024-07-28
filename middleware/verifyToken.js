import jwt  from "jsonwebtoken"
import AuthModel from "../Auth_Models/AuthSchema.js"

export const isAdmin = async(req, res, next) =>{
    try {
        const token = req.cookies.token
        if(!token){ 
            return(res.status(400).json({message :"token not found"}))
        }
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        const user = await AuthModel.findById(decoded._id)
        if(!user){
            return(res.status(400).json({message: "User not found"}))
        }  
  
        if(user.role !== 'admin'){
            return(res.status(400).json({message: " Unauthorized user!! You are not admin "}))
        }
        res.user = user
 
        next()

    } catch (error) {
        res.status(400).json({message : error.message})
    }
} 
export const Authenticate = async(req, res, next) =>{
    try {
        const token = req.cookies.token
        if(!token){
            return(res.status(400).json({message :"token not found"}))
        }
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        const user = await AuthModel.findById(decoded._id)
        if(!user){
            return(res.status(400).json({message: "User not found"}))
        }   
        next()
    } catch (error) {
        res.status(400).json({message : error.message})
    }  
}