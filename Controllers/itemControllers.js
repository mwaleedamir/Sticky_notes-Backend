import Item from "../Models/itemModels.js";


export const CreateItem  = async(req,res)=>{
    try {
        console.log(req.body)
        const { name, des } = req.body;
        if (!des || !name){
            res.status(400).json({error : "des and name are empty"})
        }
        const newItems  = await Item.create({ name, des })
        const savedItems = await newItems.save()
        res.status(201).json(newItems);
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}
// export const CreateItem  = async(req,res)=>{
// try {
//     const { name, des } = req.body;

//     // Your logic here, e.g., save to database
//     if (!name || !des) {
//         return res.status(400).json({ error: 'Name and description are required' });
//     }

//     // Simulate database save with a promise
//     saveToDatabase({ name, des })
//         .then(result => {
//             if (!res.headersSent) {
//                 return res.status(201).json({ message: 'Created successfully', data: result });
//             }
//         })
//         .catch(err => {
//             if (!res.headersSent) {
//                 return res.status(500).json({ error: 'Internal Server Error' });
//             }
//         });

// } catch (error) {
//     // Catch any unexpected errors
//     if (!res.headersSent) {
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }
// };

// function saveToDatabase(data) {
// // Simulate an asynchronous database save with a promise
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(data); // Simulate successful save
//         // reject(new Error('Database error')); // Uncomment to simulate an error
//     }, 1000);
// });
// }

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

export const Getting = async(req,res)=>{
    try {
        res.status(200).send("I am working")
        console.log("I am working")
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}