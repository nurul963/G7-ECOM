import express from 'express';
import { addProduct, getAllProduct, getProductByCategory, getProductById } from './product.controller.js';
import { upload } from '../../middleware/upload.js';
const router=express.Router();
router.post("/",upload.array("image",5), addProduct);
router.get("/",getAllProduct);
router.get("/category",getProductByCategory);
router.get("/:id",getProductById);
export default router;