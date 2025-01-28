import "reflect-metadata";
import connectDB from "./config/db";
import * as dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import { Container } from "typedi";
import cors from "cors";
import { createExpressServer, useContainer } from "routing-controllers";
import { AuthController } from "./api/controllers/auth.controller";
import morgan from 'morgan';
import { Logger } from "./utils/logger"; // Import your custom Logger service

useContainer(Container);

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Exit if required environment variables are missing
if (!process.env.PORT) {
  process.exit(1);
}

// Get the port from environment variables
const PORT: number = parseInt(process.env.PORT, 10);

// Instantiate the custom logger
const logger = Container.get(Logger); // Get the logger instance from TypeDI container

const app = express();

// CORS configuration
app.use(cors({
  origin: [process.env.ORIGIN_LOCAL!, process.env.ORIGIN_DEV!],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// Express server with routing-controllers
const routingApp = createExpressServer({
  classTransformer: true,
  controllers: [AuthController],  // Add your controllers here
  middlewares: [], // Add custom middlewares if needed
});

// Add routing-controllers to the app
app.use(routingApp);

// Morgan configuration to log HTTP requests to winston
const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject)); // Log the request using winston
      },
    },
  })
);

// Middleware to parse incoming requests with large payloads
app.use(express.json({ limit: "1024mb" }));

// Error handler middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  // Log error with winston
  logger.error("Error occurred: " + err.message);

  // Send a generic error response to the client
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
