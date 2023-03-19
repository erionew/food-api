import express from 'express'
const app = express()

app.use(express.json())

import foodsRouter from './routes/foods.js'
app.use('/foods', foodsRouter)

app.listen(3000, ()=> console.log('Server Started'))