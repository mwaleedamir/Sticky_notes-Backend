import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
})

export default Login = mongoose.model('Login', LoginSchema)
