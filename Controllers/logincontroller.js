import Login from "../Models/loginschema"

export const CreateLogin = async(req,res) =>{
    try {
        const {email, password} = req.body
        const login = await Login.create({email, password})
        res.status(200).json(login)
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