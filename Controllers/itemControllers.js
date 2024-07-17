import Item from "../Models/itemModels.js";


export const CreateItem  = async(req,res)=>{
    try {
       
        const {descriptionName, description,columnId, userId } = req.body;
        const newItem = await Item.create({descriptionName, description, columnId, userId });
        try {
            const savedItem = await newItem.save();
            res.status(201).json(savedItem);
        } catch (error) {
            res.status(400).json({ message: 'Error adding item' });
        }

    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

export const GetItems = async (req,res) =>{
    try {
        const Items = await Item.find(req.params.id)
        res.status(200).json(Items)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

export const UpdateItems =async(req,res) =>{
try {
    const update = await Item.findByIdAndUpdate(req.params.id , req.body ,{new:true})
    res.status(201).json(update)
} catch (err) {
    res.status(400).json({error : err.message})}
}

export const DeleteItems = async(req,res)=>{
    try {
        const del = await Item.findByIdAndDelete(req.params.id)
        res.status(200).json(del)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

