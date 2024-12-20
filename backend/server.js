import express from 'express';
import cors from 'cors';
import "dotenv/config"
import connectDB from './config/mongodb.js';
import connectCloundinary from './config/cloundinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


// App Config

const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloundinary();

// Middlewares
app.use(express.json()); // allows us to parse json

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://nazycollection.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(cors({
  origin: "https://nazycollection.vercel.app",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // allows us to make requests from the frontend to the backend
  allowedHeaders: ['Content-Type', 'Authorization'],
}));  // allows us to make requests from the frontend to the backend

// app.use(cors());

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter )


app.get('/', (req, res) => res.status(200).send('Hello World'));

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
