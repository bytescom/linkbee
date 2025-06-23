import express from "express";
const app= express();
const port = 3000;
import { nanoid } from 'nanoid'
import dotenv from 'dotenv'

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/api/create", (req, res)=>{
    const {url} = req.body
    console.log(url)
    res.send(nanoid(7))
})

app.listen(port, ()=>{
    console.log(`the app listening on port ${port}`)
});

