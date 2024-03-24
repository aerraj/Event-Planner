import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import dotenv from "dotenv";
import cors from "cors";


const app = express();

dotenv.config({path:"./config/config.env"});
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to Lucknow"
    })
})

app.use('/api/v1/message',messageRouter);


dbConnection();

export default app;

