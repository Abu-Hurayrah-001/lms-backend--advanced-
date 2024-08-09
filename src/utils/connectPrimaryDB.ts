import mongoose from "mongoose";
import dotenv from 'dotenv';

//Loading environment variables into "process.env"
dotenv.config();

//connecting to Mongo DB database
const connectPrimaryDB = async () => {
    const mongoURI = process.env.MONGO_URI as string;
    
    if (!mongoURI) {
        console.error("'Mongo_URI' environment variable in not defined.");
        process.exit(1);
    }

    try {
        const connectionObject = await mongoose.connect(mongoURI);
        console.log(
            `YAY!! YAY!! Mongo DB is connected to: ${connectionObject.connection.host}`
        );
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error connecting to the primary database: ${error.message}`);
        } else {
            console.error("An unknown error has occurred when connecting to the primary database.")
        }

        process.exit(1);
    };
};

export default connectPrimaryDB;