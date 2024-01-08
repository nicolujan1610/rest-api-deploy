import cors from "cors"

const ACCEPTED_ORIGINS = [
  'https://localhost:8080',
  'https://localhost:1234',
  'https://movies.com',
  'https://nicolujan1610.github.io',
  'https://rest-api-deploy-dev-jzfx.1.us-1.fl0.io'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})