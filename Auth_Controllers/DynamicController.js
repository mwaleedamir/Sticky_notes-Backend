import DynamicPage from '../Auth_Models/DynamicSchema.js'


export const CreatePage = async(req,res) =>{
    try {
        const { path, title, content } = req.body;
        const newPage = new DynamicPage({ path, title, content });
        await newPage.save();
        res.status(201).json(newPage);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

export const GetPage = async (req, res) => {
    try {
      const pages = await DynamicPage.find();
      res.status(200).json(pages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


export const GetPageById = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    res.send(page);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const EditPage = async (req, res) => {
  try {
    const { title, content } = req.body;
    const page = await Page.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.send(page);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const DeletePage =  async (req, res) => {
  try {
    await Page.findByIdAndDelete(req.params.id);
  res.send({ message: 'Page deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}