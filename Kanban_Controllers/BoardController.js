import BoardSchema from '../Kanban_Models/BoardSchema.js'


export const CreateBoardSchema = async(req,res) =>{
    try {
        const {title,userId} = req.body;
        const newBoardSchema = await BoardSchema.create({ title,userId });
        await newBoardSchema.save();
        res.status(201).json(newBoardSchema);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

export const GetBoardSchema = async (req, res) => {
    try {
      const BoardSchemas = await BoardSchema.find();
      res.status(200).json(BoardSchemas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


export const GetBoardSchemaById = async (req, res) => {
  try {
    const BoardSchema = await BoardSchema.findById(req.params.id);
    res.send(BoardSchema);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const EditBoardSchema = async (req, res) => {
  try {
    const { title, content } = req.body;
    const boardSchema = await BoardSchema.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.send(boardSchema);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const DeleteBoardSchema =  async (req, res) => {
  try {
    await BoardSchema.findByIdAndDelete(req.params.id);
  res.send({ message: 'BoardSchema deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}