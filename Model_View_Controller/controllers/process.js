exports.form = (req,res)=>{
    res.render('form')
}


const product = []
exports.process = (req,res)=>{
    res.redirect('/users')
    product.push({title:req.body.title})
}

exports.output = (req,res)=>{
    res.render('user',{product})
}