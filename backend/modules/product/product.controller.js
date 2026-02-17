import { productService } from "./product.service.js"

export const addProduct=async(req,resp)=>{
    const result=await productService.addProduct(req.files,req.body);
    return resp.status(result.statusCode).json(result);
}