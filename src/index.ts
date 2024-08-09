import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import connectPrimaryDB from "./utils/connectPrimaryDB";

//Storing express instance in app
const app = express();

//Loading environment variables into "process.env"
dotenv.config();

const port = process.env.PORT || 8000;

//connecting to MongoDB
connectPrimaryDB();

//Middleware
app.use(express.json());

//Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Umm, Excuse Me!! What are you doing here");
});

//Listening to the server
app.listen(port, () => {
    console.log(`YAY!!, SERVER IS CONNECTED TO PORT: ${port}`);
});