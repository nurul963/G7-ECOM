export const roleAccessMiddleware=(...roleAllowed)=>{
    return (req,res,next)=>{
        if(!req.user || !req.user.role){
            return res.status(400).json({
                statusCode:400,
                message:"User Does not have Access"
            })
        }
        const role=req.user.role;
        if(!roleAllowed.includes(role)){
            return res.status(400).json({
                statusCode:400,
                message:"Access Denied"
            })
        }
        next();
    }
}