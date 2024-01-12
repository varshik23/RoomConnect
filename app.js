require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const User = require('./models/userModel')

const app = express();

// Connect Database
connectDB();

//JSON middleware
app.use(express.json())

// POST user data
app.post('/user', async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//GET all users
app.get('/getallusers', async(req, res)=> {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));