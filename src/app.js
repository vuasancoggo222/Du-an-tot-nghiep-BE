import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import 'dotenv/config'
import chalk from 'chalk'
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

const successLog = chalk.bold.green
const errorLog = chalk.bold.red


app.listen(process.env.PORT,()=>{
    console.log(successLog(`Server is running`));
})

mongoose.connect(process.env.MONGODB_URL).then(() => console.log(successLog("Connect DB Successfully")))
.catch(error => console.log(errorLog(error)))

