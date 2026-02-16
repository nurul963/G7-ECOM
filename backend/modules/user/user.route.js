import express from 'express';
import { addUser, deleteUser, getUser, loginUser, logoutUser, updateUser } from './user.controller.js';
import { isAuthenticated } from '../auth/isAuthenticated.js';
import { roleAccessMiddleware } from '../../middleware/roleMiddleware.js';
const router=express.Router();
router.post("/add", addUser);
router.get("/",isAuthenticated,roleAccessMiddleware('ADMIN'),getUser);
router.put("/update/:id",isAuthenticated,updateUser);
router.delete("/delete/:id",isAuthenticated,roleAccessMiddleware('ADMIN'),deleteUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser)
export default router;