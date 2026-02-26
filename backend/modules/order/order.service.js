import { Order, OrderItem, Product } from '../../modals/index.js';
import {cartService} from '../cart/cart.service.js';
const createOrder=async(userId)=>{
    try {
        const cart=await cartService.getCartByUser(userId);
        if(!cart.cart)throw new Error("Cart is empty");
        const cartItem=cart.cart;
        const order=await Order.create({
            totalAmount:0,
            userId
        });
        let totalAmount=0;
        for(let cartValue of cartItem){
            const product=cartValue.product;
            if(!product)throw new Error("some Product not found");
            if(product.stock<cartValue.quantity)
                throw new Error("Some product is out of stock");
            totalAmount+=(parseInt(product.price)* parseInt(cartValue.quantity));
            await OrderItem.create({
                quantity:parseInt(cartValue.quantity),
                productId:parseInt(product.id),
                orderId:parseInt(order.id),
                priceAtPurchase:parseInt(product.price)
            })
        }
        order.totalAmount=totalAmount;
        await order.save();
        const cartInfo=await cartService.deleteCartByUser(userId);
        return {
            statusCode:200,
            message:"Order created",
            order,
            cartInfo
        }
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}
export const orderService={createOrder}