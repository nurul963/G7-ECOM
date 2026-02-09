import { Category } from "../../modals/index.js"

export const addCategoryService=async(data)=>{
    let result;
    try {
        if(data.length > 1){
            result=await Category.bulkCreate(data);
        }else{
            result=await Category.create(data);
        }
        return {
            statusCode:201,
            result
        }
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}
export const getCategoryService=async()=>{
    try {
        const result=await Category.findAll();
        return {
            statusCode:200,
            result
        }
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}