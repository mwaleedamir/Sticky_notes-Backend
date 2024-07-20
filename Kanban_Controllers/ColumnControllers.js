import Column from "../Kanban_Models/ColumnSchema.js"


export const GetColumn = async(req,res) =>{
    try {
        const column = await Column.findById(req.params.id)
        if(!column) return res.status(404).json({message : "Column not found"})
        res.status(200).json(column)
    } catch (err) { 
        res.status(400).json({error : err.message},"From ColumnController")
    }
}
export const GetColumns = async(req,res) =>{
    try {
        const column = await Column.find()
        if(!column) return res.status(404).json({message : "Column not found"})
        res.status(200).json(column)
    } catch (err) { 
        res.status(400).json({error : err.message},"From ColumnController")
    }
}

export const PopulateColumns = async(req,res) =>{
    try {
        const column = await Column.find({_id:req.body.columnId}).populate('userId')
        if(!column) return res.status(404).json({message : "Column not found"})
        res.status(200).json(column)
        // res.send(column)
    } catch (err) {
        res.status(400).json({error : err.message},"From ColumnController")
    }
}
export const GetPopulateColumns = async(req,res) =>{
    try {
        const column = await Column.find({_id:req.body.columnId})
        if(!column) return res.status(404).json({message : "Column not found"})
        res.status(200).json(column)
        // res.send(column)
    } catch (err) {
        res.status(400).json({error : err.message},"From ColumnController")
    }
}


export const CreateColumn = async(req,res) =>{
    try {
        const {columnName,columnId,userId} = req.body
        const column = await Column.create({columnName,columnId,userId})
        await column.save()
        res.status(201).json(column)
    } catch (err) {
        res.status(400).json({error : err.message},"From ColumnController")
    }
} 


export const UpdateColumn = async(req,res) =>{
    try {
        const {columnName,columnId} = req.body
        const column = await Column.findByIdAndUpdate(req.params.id, {columnName,columnId} ,{new:true})
        res.status(200).json(column)
    } catch (err) {
        res.status(400).json({error : err.message},"From ColumnController")
    }
}


export const DeleteColumn = async(req,res) =>{
    try {
        await Column.findByIdAndDelete(req.params.id)
        res.status(204).send()
    } catch (err) {
        res.status(400).json({error : err.message},"From ColumnController")
    }
}