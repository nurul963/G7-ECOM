import { cartService } from "./cart.service.js";

export const addToCart=async(req,resp)=>{
    const userId=req.user.id;
    const result=await cartService.addToCart(userId,req.body);
    return resp.status(result.statusCode).json(result);
}
export const getCartByUser=async(req,resp)=>{
    const userId=req.user.id;
    const result=await cartService.getCartByUser(userId);
    return resp.status(result.statusCode).json(result);
}