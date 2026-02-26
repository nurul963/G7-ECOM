import { Order, Payment } from "../../modals/index.js";
import {randomUUID} from 'crypto';
import { PG } from "../../util/phonepayPayment.js";
const initiatePayment=async(userId,orderId)=>{
    try {
        const order=await Order.findOne({where:{id:orderId}});
        const randomValue=randomUUID();
        const merchantOrderId=`TXN_${randomValue}`;
        const amount=parseInt(order.totalAmount)*100;
        const url=await PG.paymentInitiate(userId,orderId,amount,merchantOrderId);
        await Payment.create({
            orderId,
            userId,
            transactionId:merchantOrderId,
            method:"UPI"
        })
        return {
            statusCode:200,
            url
        }
    } catch (error) {
       return {
        statusCode:400,
        message:error.message
       } 
    }
}
const checkPaymentStatus=async(merchantOrderId)=>{
    return {
        statusCode:200,
        message:"Status Checked"
    }
}
export const paymentService={initiatePayment,checkPaymentStatus};