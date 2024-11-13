import 'dotenv/config'
import cors from 'cors'
import express, { json } from "express"
import { errorHandler } from './middlewares/error-handler-middleware'
import { routes } from "./routes"

const app = express()

app.use(json())
app.use(
    cors({
      origin: process.env.FRONT_URL,
    }),
  )

app.use(routes)
app.use(errorHandler)



app.listen(3333, () => console.log("Servidor Rodando!"))

