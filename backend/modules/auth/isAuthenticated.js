import jwt from 'jsonwebtoken';
import { SECERATE_KEY } from '../../util/constant.js';
export const isAuthenticated=async(req,resp,next)=>{
    const token=req.cookies?.token || null;
    if(!token){
        return resp.status(401).json({
            statusCode:401,
            message:"Unauthorized User"
        })
    }
    try {
        const decode=jwt.verify(token,SECERATE_KEY);
        req.user={
            id:decode.id.toString(),
            role:decode.role,
            email:decode.email
        }
        next();
    } catch (error) {
       console.error(error); 
    }
}