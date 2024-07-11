import Item from "../Models/itemModels.js";
import AuthModel from "../Models/Auth.js"
import JWT from 'jsonwebtoken'

export const CreateItem  = async(req,res)=>{
    try {
        console.log(req.body)
        const {descriptionName, description, userId} = req.body;
        if (!description || !descriptionName){
            res.status(400).json({error : "description is empty"})
        }
        const token = req.cookies.token

        if (!token){
            return res.status(401).json({error : "No token"})
        }
        const decoded = JWT.verify(token,process.env.TOKEN_SECRET)
        const user = await AuthModel.findById(decoded._id)
        if(user){
            const newItems  = await Item.create({descriptionName, description ,userId})
            const savedItems = await newItems.save()
            res.status(201).json(savedItems);
        }
        else{
            res.status(401).json({error : "Not authenticated"})
        }
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

export const GetItems = async (req,res) =>{
    try {
        const Items = await Item.find()
        res.status(200).json(Items)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

export const UpdateItems =async(req,res) =>{
try {
    const update = await Item.findByIdAndUpdate(req.param.id , req.body ,{new:true})
    res.status(201).json(update)
} catch (err) {
    res.status(400).json({error : err.message})}
}

export const DeleteItems = async(req,res)=>{
    try {
        const del = await Item.findByIdAndDelete(req.param.id)
        res.status(200).json(del)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

// export const Getting = async(req,res)=>{
//     try {
//         res.status(200).send("I am working")
//         console.log("I am working")
//     } catch (error) {
//         res.status(400).json({message : error.message})
//     }
// }