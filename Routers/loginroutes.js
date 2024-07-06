import {createSignup,getSignup} from "../Controllers/signupControllers.js"
import express from 'express'

const signuprouter = express.Router()

signuprouter.post('/login', createSignup)
signuprouter.get('/login',getSignup)

export default signuprouter