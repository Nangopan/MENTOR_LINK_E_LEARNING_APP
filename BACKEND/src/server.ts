import express from 'express'
import { FRONTEND_URL, PORT } from './utils/constants'
import { connectDB } from './config/database'
import cors from 'cors'
// import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()

connectDB()

const origin =  'http://localhost:3000'
const corsOptions = {
    // origin: FRONTEND_URL() || "*",
    // origin: origin || "*",
    origin: [
        "http://localhost:3000",
        "http://localhost:8001",
      ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
// app.use("/api/user-service", userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})