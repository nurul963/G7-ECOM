import express from 'express';
import { addProduct } from './product.controller.js';
import { upload } from '../../middleware/upload.js';
const router=express.Router();
router.post("/",upload.array("image",5), addProduct);
export default router;