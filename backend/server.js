import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import User from "./User.js"

const app = express()
app.use(cors())
app.use(express.json());

const conn = mongoose.connect("mongodb://localhost:27017/clipPath").then(()=>{
    console.log("mongodb server connected")
})

// For parsing URL-encoded data (if needed)
app.use(express.urlencoded({ extended: true }));

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.post('/signup', (req, res) => {
    let data = req.body
    const user = new User({username:data.username,password:data.password,dateCreated:data.dateCreated})
    user.save()
    let response= {"response":"succesfull"}
    res.json(response);
  });

app.post("/checkUser",(req,res) =>{
    let data = req.body
    User.exists({username:data.username}).then(exists => {
        if (exists) {
            let response= {"response":"unsuccesfull"}
            res.json(response);
        } else {
            let response= {"response":"succesfull"}
            res.json(response);
        }
      })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})