import { orderService } from "./order.service.js";
const createOrder=async(req,resp)=>{
    const userId=req.user.id;
    const result=await orderService.createOrder(userId);
    return resp.status(result.statusCode).json(result);
}
export const orderController={createOrder};