import AuthModel from '../Models/Auth.js'

export const getuser = async(req,res) =>{
    try {
        res.send("Welcome to Admin")
    } catch (error) {
        
    }
}

export const deleteUser = async(req,res) =>{
    try {
        const UserId = req.params.id
        const del = await AuthModel.findByIdAndDelete(UserId)
        if(!del) return res.status(404).json({message: 'User not found'})
        res.status(200).json({message: "Delete user sucessfully"},del)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

