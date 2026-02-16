import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './util/constant.js';
import bodyParser from 'body-parser';
import sequelize, { connectDB } from './config/database.js';
import mainRoute from './routes/index.js';
import './modals/index.js';
const app=express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.use("/api",mainRoute)
app.listen(PORT,async()=>{
    console.log(`Server run http://localhost:${PORT}`);
    connectDB();
    sequelize.sync({alter:true});
})