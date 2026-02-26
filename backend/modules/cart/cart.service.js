import { Cart, Product } from "../../modals/index.js";

const addToCart=async(userId,data)=>{
    try {
        const {productId,quantity}=data;
        const product=await Product.findOne({where:{id:productId}});
        if(!product)throw new Error("Product not found");
        if(product.stock<parseInt(quantity))throw new Error("Insufficiant stock");
        const exsisting=await Cart.findOne({where:{userId,productId}});
        if(!exsisting){
            const cart=await Cart.create({
                quantity,
                userId,
                productId
            });
            return {
                statusCode:201,
                cart
            }
        }
        exsisting.quantity+=quantity;
        await exsisting.save();
        return {
            statusCode:200,
            cart:exsisting
        }
    } catch (error) {
       return {
        statusCode:400,
        message:error.message
       } 
    }
}
const getCartByUser=async(userId)=>{
    try {
       const cart=await Cart.findAll(
        {
            where:{userId},
            include:[Product]
        });
       return {
        statusCode:200,
        cart
       } 
    } catch (error) {
       return {
        statusCode:400,
        message:error.message
       } 
    }
}
export const deleteCartByUser=async(userId)=>{
    try {
        await Cart.destroy({
            where:{
                userId
            }
        });
        return {
            statusCode:400,
            message:"Cart deleted successfully"
        }
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}
export const cartService={addToCart,getCartByUser,deleteCartByUser}