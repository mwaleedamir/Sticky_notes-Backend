import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
    },
    role :{
        type: String,
        enum: ['admin', "user"],
        default: "user"
    },
    password: {
        type: String,
        required: true,
        unique: true
    },

})

const Login = mongoose.model('Login', LoginSchema)
export default Login
