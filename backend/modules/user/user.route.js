import express from 'express';
import { addUser, deleteUser, getUser, loginUser, updateUser } from './user.controller.js';
const router=express.Router();
router.post("/add",addUser);
router.get("/",getUser);
router.put("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);
router.post("/login",loginUser);
export default router;