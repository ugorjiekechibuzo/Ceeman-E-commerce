import express from 'express';
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus,verifyStripe, verifyRazorpay  } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

//Admin panel order routes features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);


//payment order routes features
//end point for COD
orderRouter.post('/place',authUser, placeOrder);
//end point for Stripe
orderRouter.post('/stripe',authUser, placeOrderStripe);
//end point for Razorpay
orderRouter.post('/razorpay',authUser, placeOrderRazorpay);


//User order routes features
orderRouter.post('/userorders',authUser, userOrders);

//Verify payment

orderRouter.post("/verifyStripe", authUser, verifyStripe)
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay)

export default orderRouter;
