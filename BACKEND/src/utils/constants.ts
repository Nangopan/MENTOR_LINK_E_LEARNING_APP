import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../.env') })

export const PORT = process.env.PORT || 8002

export const MONGODB_URI: string = String(process.env.MONGODB_URI)
export const FRONTEND_URL: string = String(process.env.FRONTEND_URL)