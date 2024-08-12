//creating cors-options
import { CorsOptions as corsOptionsSchema } from "cors";

const corsOptions: corsOptionsSchema = {
    origin: ["http://localhost:3000"],
    credentials: true,
};

export default corsOptions;