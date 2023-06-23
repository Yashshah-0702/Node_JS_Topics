const products = require('../model/models')

exports.form = (req,res)=>{
    res.render('form')
}


exports.process = (req,res)=>{
    res.redirect('/users')
    const Pro = new products(req.body.title,req.body.name)
    Pro.save()
}

exports.output = (req,res)=>{
    products.fetchAll((product)=>{res.render('user',{product})
    console.log(product)})
    
}