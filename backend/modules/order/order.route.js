import express from 'express';
import { orderController } from './order.controller.js';
import { isAuthenticated } from '../auth/isAuthenticated.js';
const router=express.Router();
router.post("/",isAuthenticated, orderController.createOrder);
export default router;