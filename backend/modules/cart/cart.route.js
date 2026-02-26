import express from 'express';
import { isAuthenticated } from '../auth/isAuthenticated.js';
import { addToCart, getCartByUser } from './cart.controller.js';
const router=express.Router();
router.post("/",isAuthenticated,addToCart);
router.get("/",isAuthenticated,getCartByUser);
export default router;