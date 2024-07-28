import Items from "../Kanban_Models/itemSchema.js";
 

export const CreateItem  = async(req,res)=>{
    try {
        try {
            const {descriptions, columnsId} = req.body
            const newItems = await Items.create({ descriptions, columnsId});
            const newitem = await newItems.save();
            res.status(201).json(newitem);
            
        } catch (error) {
            res.status(400).json({ message: 'Error adding item' });
        }

    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

export const CreateItemsById = async(req, res) =>{
    try {
        
            const { ItemsId } = req.params;
            const { description } = req.body;
            const Items = await Items.findById(ItemsId);
            Items.items.push({ description });
            await Items.save();
            res.json(Items);
          
    } catch (error) {
        res.status(400).json({error : err.message})
    }
}

export const GetItems = async (req,res) =>{
    try { 
        const Item = await Items.find()
        res.status(200).json(Item)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}


export const GetItemsById = async (req,res) =>{
    try { 
        const Item = await Items.findById(req.params.id)
        res.status(200).json(Item)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

export const UpdateItems =async(req,res) =>{
try {
    const update = await Items.findByIdAndUpdate(req.params.id , req.body ,{new:true})
    res.status(201).json(update)
} catch (err) {
    res.status(400).json({error : err.message})}
}
 
export const DeleteItems = async(req,res)=>{
    try {
        const del = await Items.findByIdAndDelete(req.params.id)
        res.status(200).json(del)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}
