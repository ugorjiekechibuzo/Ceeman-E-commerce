import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloundinary from "./config/cloundinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 5000;

// Connect to database and other services
connectDB();
connectCloundinary();

// Middleware to log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Middleware to parse JSON
app.use(express.json());

app.use(cors());


// CORS configuration
app.use(
  cors({
    origin: process.env.NODE_ENV || "http://localhost:5173",
    //origin: ["http://localhost:5173", "https://nazycollection.vercel.app"], // Replace with your frontend's URL
    credentials: true, // Allow cookies and credentials
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Supported HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed request headers
  })
);

// Handle preflight OPTIONS requests explicitly
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://nazycollection.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(204); // No Content
});

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Root endpoint
app.get("/", (req, res) => res.status(200).send("Hello World"));
//app.get("/", (req, res) => res.status(200).send(process.env));

// Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({ success: false, message: err.message });
});

// Listener
app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
