const jwt=require("jsonwebtoken")


module.exports.auth=(req,res,next)=>{
    const token=req.header('token');
    jwt.verify(token,'Nabil', function(err, decoded) {

        if(err){
            res.json({message:'inavalid token'},err);
        }else{
            req.id=decoded.userid
            next()
        }
    });
}