import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import ConnectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

//App Config
const app=express()
const port=process.env.PORT || 4000
ConnectDB()
connectCloudinary()
//middlewares
app.use(express.json())
app.use(cors())

//api
app.get('/', (req, res) => {
  res.send("API working")
})

app.listen(port,()=>console.log('server started on PORT:'+port))