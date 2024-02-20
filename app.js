import express from 'express'
import cors from 'cors'
import mainRoute from './srcs/Routes/mainRoute.js'

const app = express()
app.use(express.json())
app.use(cors())
app.listen(8080)
app.use(mainRoute)