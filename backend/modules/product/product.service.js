import { where } from 'sequelize';
import { uploadImage } from '../../config/cloudinary.js';
import {Category, Product, ProductImage} from '../../modals/index.js';
const addProduct=async(files,data)=>{
    try {
        const product=await Product.create(data);
        const uploadImgaes=[];
        for(let file of files){
            const result=await uploadImage(file);
            uploadImgaes.push({
                imageUrl:result.secure_url,
                publicId:result.public_id,
                productId:product.id
            });
            if(uploadImgaes.length === files.length)
                await ProductImage.bulkCreate(uploadImgaes);
        }
        return {
            statusCode:201,
            message:"Product added",
            product
        }
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}
const getAllProduct=async()=>{
    try {
        const product=await Product.findAll({
            include:{model:Category,model:ProductImage}
        });
        return {
            statusCode:200,
            message:"Product List Fetched",
            product
        }
    } catch (error) {
       return {
            statusCode:400,
            message:error.message
        } 
    }
}
const getProductByCategory=async(categoryId)=>{
    try {
        const product=await Product.findAll({
            where:{categoryId:parseInt(categoryId)}
        });
        return {
            statusCode:200,
            message:"Product Fetched By Category",
            product
        }
    } catch (error) {
       return {
            statusCode:400,
            message:error.message
        } 
    }
}
const getProductById=async(id)=>{
    try {
        const product=await Product.findOne({
            where:{id},
            include:ProductImage
        });
        return {
            statusCode:200,
            message:"Product Details",
            product
        }
    } catch (error) {
       return {
            statusCode:400,
            message:error.message
        } 
    }
}
export const productService={
    addProduct,
    getAllProduct,
    getProductByCategory,
    getProductById
}