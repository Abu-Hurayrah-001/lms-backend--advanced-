//imports
import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";

const globalRateLimiter: RateLimitRequestHandler = rateLimit({
    windowMs: 1000 * 60 * 15,
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Good sir!! too many requests detected from your end, please try again after 15 minutes.",
});

export default globalRateLimiter;