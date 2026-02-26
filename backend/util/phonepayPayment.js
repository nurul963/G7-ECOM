import { CreateSdkOrderRequest, MetaInfo } from "pg-sdk-node";
import { API_URL } from "./constant.js";
import { client } from "../config/phonepay.js";

const paymentInitiate=async(userId,orderId,amount,merchantOrderId)=>{
  const metaInfo = MetaInfo.builder()
    .udf1(userId)
    .udf2(orderId)
    .build();

    const orderRequest = CreateSdkOrderRequest.StandardCheckoutBuilder()
        .merchantOrderId(merchantOrderId)
        .amount(amount)
        .metaInfo(metaInfo)
        .redirectUrl(`${API_URL}/payment/verify?merchantOrderId=${merchantOrderId}`)
        .expireAfter(3600)
        .message("Message that will be shown for UPI collect transaction")
        .build();

    const response=await client.pay(orderRequest);
    return response.redirectUrl;  
}
export const PG={paymentInitiate}