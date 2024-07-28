import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }, 
    role: {
        type: String,
        enum: ['admin', "user"], 
        default: "user"
    },
    password: {
        type: String,
        required: true,
    }, 
    confirmPassword: {
        type: String,
        required: true
    }
});

const Signup = mongoose.model('Signup', SignupSchema);
export default Signup;