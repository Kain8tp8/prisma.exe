import express from "express";
import cors from "cors"
import pupilRouter from './routes/pupil.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/pupils', pupilRouter)

app.listen(process.env.PORT || 4563, () => {
  console.log('Server is running port ::4563');

})