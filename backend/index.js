import express from 'express'
import collection from './mongo.js'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', async(req, res)=>{
    const doc = await collection.find()
    res.send(doc)
})


app.delete('/', async (req, res)=>{
    console.log(req.body)
    await collection.deleteOne({_id: req.body._id});
    res.send("Deleted")
})

app.post('/', async (req, res)=>{
    // console.log(req.body)
    await collection.insertMany({name: req.body.name, password: req.body.password});
    res.send("Inserted")
})


app.listen(3000, ()=>{
    console.log("listening")
})