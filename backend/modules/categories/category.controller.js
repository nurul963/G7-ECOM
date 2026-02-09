import { addCategoryService, getCategoryService } from "./category.service.js"

export const addCategory=async(req,resp)=>{
    const result=await addCategoryService(req.body);
    return resp.status(result.statusCode).json({
        result
    })
}
export const getCategory=async(req,resp)=>{
    const result=await getCategoryService();
    return resp.status(result.statusCode).json({
        result
    })
}