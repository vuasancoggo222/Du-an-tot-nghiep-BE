import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'

const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})


