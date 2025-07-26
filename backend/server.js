import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import ConnectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
//App Config
const app=express()
const port=process.env.PORT || 4000
ConnectDB()
connectCloudinary()
//middlewares
app.use(express.json())
app.use(cors())

//api endpoints

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

//api
app.get('/', (req, res) => {
  res.send("API working")
})

app.listen(port,()=>console.log('server started on PORT:'+port))