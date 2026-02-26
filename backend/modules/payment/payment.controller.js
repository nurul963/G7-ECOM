import { paymentService } from "./payment.service.js";

const initiatePayment=async(req,resp)=>{
    const userId=req.user.id;
    const {orderId}=req.body;
    const result=await paymentService.initiatePayment(userId,orderId);
    return resp.status(result.statusCode).json(result);
}
const checkPaymentStatus=async(req,resp)=>{
    const merchantOrderId=req.query.merchantOrderId;
    const result=await paymentService.checkPaymentStatus(merchantOrderId);
    return resp.status(result.statusCode).json(result);
}
export const paymentController={initiatePayment,checkPaymentStatus};