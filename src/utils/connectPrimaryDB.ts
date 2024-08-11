//imports
import mongoose from "mongoose";
import dotenv from 'dotenv';

//Loading environment variables into "process.env"
dotenv.config();

//connecting to Mongo DB database
const connectPrimaryDB = async () => {
    const mongoURI = process.env.MONGO_URI ;
    
    if (!mongoURI) {
        console.error("'Oopsies!! Mongo_URI' environment variable in not defined.");
        process.exit(1);
    }

    try {
        const connectionObject = await mongoose.connect(mongoURI);
        console.log(
            `YAY!! YAY!! Mongo DB is connected to: ${connectionObject.connection.host}`
        );
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Uh Oh!! Error connecting to the primary database: ${error.message}`);
        } else {
            console.error("An unknown error has occurred when connecting to the primary database. Enjoy debugging it :)");
        }

        process.exit(1);
    };
};

export default connectPrimaryDB;