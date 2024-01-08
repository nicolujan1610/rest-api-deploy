import express from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.disable('x-powered-by')

app.use(express.json())
app.use(corsMiddleware())

// RUTAS:
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:1234`)
})