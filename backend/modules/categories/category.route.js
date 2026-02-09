import express from 'express';
import { addCategory, getCategory } from './category.controller.js';
const router=express.Router();
router.post("/",addCategory);
router.get("/",getCategory);
export default router;