import { productService } from "./product.service.js"

export const addProduct=async(req,resp)=>{
    const result=await productService.addProduct(req.files,req.body);
    return resp.status(result.statusCode).json(result);
}
export const getAllProduct=async(req,resp)=>{
    const result=await productService.getAllProduct();
    return resp.status(result.statusCode).json(result);
}
export const getProductByCategory=async(req,resp)=>{
    // console.log(req.query);
    const { categoryId } = req.query || null;
    if(!categoryId){
        return resp.status(400).json({
            statusCode:400,
            message:"Query parameter is empty"
        })
    }
    const result=await productService.getProductByCategory(categoryId);
    return resp.status(result.statusCode).json(result);
}
export const getProductById=async(req,resp)=>{
    const id=req.params.id;
    const result=await productService.getProductById(id);
    return resp.status(result.statusCode).json(result);
}