import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    signupEmail: {
        type: String,
        required: true,
    },
    signupPassword: {
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