import express from 'express';
import userRoute from '../modules/user/user.route.js';
import categoryRoute from '../modules/categories/category.route.js';
import productRoute from '../modules/product/product.route.js';
const router=express.Router();
router.use("/user",userRoute);
router.use("/category",categoryRoute);
router.use("/product",productRoute);
export default router;