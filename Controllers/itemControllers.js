import Item from "../Models/itemModels.js";


export const CreateItem  = async(req,res)=>{
    try {
        console.log(req.body)
        const { description } = req.body;
        if (!des){
            res.status(400).json({error : "description is empty"})
        }
        const newItems  = await Item.create({ description })
        const savedItems = await newItems.save()
        res.status(201).json(savedItems);
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
        await Item.findByIdAndDelete(req.param.id)
        res.status(204).send()
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