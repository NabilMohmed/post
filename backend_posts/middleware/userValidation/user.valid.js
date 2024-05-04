const joi=require('joi') //علشان اعمل validation

const validArray=['body','params'] ;

const schema={
    body:joi.object({
        name:joi.string().required().min(3).max(30),
        email:joi.string().required().email({maxDomainSegments:2,tlds:{allow:['com','net']}}),
        password:joi.string().required().pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/),
        repassword:joi.ref('password'),
        age:joi.number().required()
      }),


    params:joi.object({
        id:joi.string().required().min(4).max(4)
      })  
}




  module.exports.userValidation=(req,res,next)=>{
    let errorArray=[]
    validArray.map((key)=>{
        let{error} = schema[key].validate(req[key],{abortEarly:false})
        console.log(error);
        if(error){
            error.details.map((msg)=>{
                errorArray.push(msg.message )
            })            
        }
    })

    if(errorArray.length>0){
        res.json(errorArray)
    }else{
        next()
    }

  }


//   module.exports.paramValidation=(req,res,next)=>{
//     let errorArray=[]
//     let{error}= paramSchema.validate(req.params,{abortEarly:false})
//     if(error){
//         error.details.map((msg)=>{
//             errorArray.push(msg.message)
//         })
//         res.json(errorArray)
//     }else{
//         next()
//     }
//   }
  