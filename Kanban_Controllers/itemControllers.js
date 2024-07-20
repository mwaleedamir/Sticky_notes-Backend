import Item from "../Kanban_Models/itemModels.js";


export const CreateItem  = async(req,res)=>{
    try {
        // const newItem = await Item.create({descriptionName, userId, items:[] });
        try {
            const {descriptionName, userId, items:[] } = req.body;

            const newBoard = new Board({ descriptionName, userId, items: [] });
            await newBoard.save();
            res.json(newBoard);
        } catch (error) {
            res.status(400).json({ message: 'Error adding item' });
        }

    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

export const CreateItemsById = async(req, res) =>{
    try {
        
            const { boardId } = req.params;
            const { description } = req.body;
            const board = await Item.findById(boardId);
            board.items.push({ description });
            await board.save();
            res.json(board);
          
    } catch (error) {
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


export const UpdatetBoard = async (req, res) => {
    try {
        const { boardId } = req.params;
        const { itemId, newColumnId, newIndex } = req.body;
        const board = await Item.findById(boardId);
        const item = board.items.id(itemId);
        board.items.pull(itemId);
        await board.save();
        const newBoard = await Item.findById(newColumnId);
        newBoard.items.splice(newIndex, 0, item);
        await newBoard.save();
        res.json(newBoard);
        
    } catch (error) {
        res.status(400).json({error : err.message})
    }
  }

