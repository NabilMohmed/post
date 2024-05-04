const newsModel = require("../models/news.model")




module.exports.addnews=async(req,res)=>{
    const{title,desc}=req.body

    await newsModel.insertMany({title,desc,createdby:req.id})
    res.json({message:"Success"})
        
}

module.exports.allnews=async(req,res)=>{
    let news=await newsModel.find({}).populate('createdby','name ')
    res.json({message:"success",news})
}


module.exports.userNews=async(req,res)=>{
    let createdby=req.header('id')
    console.log(createdby);
    let news=await newsModel.find({createdby})
    res.json({mussage:"success",news})
}

module.exports.Update=async(req,res)=>{
    const{_id,title,desc}=req.body
    await newsModel.findByIdAndUpdate({_id},{title,desc})
    res.json({message:"success"})
}

module.exports.deleteNews=async(req,res)=>{
    const{_id}=req.body
    await newsModel.deleteOne({_id})
    res.json({mussage:"success"})
}