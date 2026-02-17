import { uploadImage } from '../../config/cloudinary.js';
import {Product, ProductImage} from '../../modals/index.js';
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
export const productService={
    addProduct
}