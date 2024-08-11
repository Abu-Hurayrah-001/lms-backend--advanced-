//imports
import express from "express";
import dotenv from 'dotenv';
import connectPrimaryDB from "./utils/connectPrimaryDB";
import backendHomepageRouter from "./routes/backendHomepage.route";
import cors from "cors";
import corsOptions from "./utils/corsOption";

//Loading environment variables into "process.env"
dotenv.config();

//Storing express instance in app
const app = express();

//Creating port no.
const port: number = parseInt(process.env.PORT || "8000", 10);

//Routes
app.use("/", backendHomepageRouter);

//Middlewares
app.use(cors(corsOptions));
app.use(express.json());

//Listening to the server
app.listen(port, () => {
    console.log(`YAY!!, SERVER IS CONNECTED TO PORT: ${port}`);
});

//connecting to MongoDB
connectPrimaryDB();