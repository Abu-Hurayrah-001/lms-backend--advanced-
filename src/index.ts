import express from "express";
import dotenv from 'dotenv';
import connectPrimaryDB from "./utils/connectPrimaryDB";
import backendHomepageRouter from "./routes/backendHomepage.route";

//Storing express instance in app
const app = express();

//Loading environment variables into "process.env"
dotenv.config();

//Creating port no.
const port = process.env.PORT || 8000;

//Listening to the server
app.listen(port, () => {
    console.log(`YAY!!, SERVER IS CONNECTED TO PORT: ${port}`);
});

//connecting to MongoDB
connectPrimaryDB();

//Middlewares
app.use(express.json());

//Routes
app.use("/", backendHomepageRouter);