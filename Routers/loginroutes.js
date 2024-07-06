import {createSignup,getSignup} from "../Controllers/signupControllers.js"
import express from 'express'

const signuprouter = express.Router()

signuprouter.post('/signup', createSignup)
signuprouter.get('/signup',getSignup)

export default signuprouter