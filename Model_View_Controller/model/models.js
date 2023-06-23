const fs = require('fs')
const path = require('path')

module.exports=class Product{

    constructor(t,n){
        this.title = t
        this.name = n
    }

    save(){
        let product=[]
        const p = path.join(path.dirname(process.mainModule.filename),'data','products.json')
        fs.readFile(p,(err,fileContent)=>{
            if(!err){
                product=JSON.parse(fileContent)
            }
            product.push(this)
        fs.writeFile(p,JSON.stringify(product),(err)=>{console.log(err)})
        })
        // product.push(this)
    }

    static fetchAll(cb){
        const p = path.join(path.dirname(process.mainModule.filename),'data','products.json')
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([])
            }
            cb(JSON.parse(fileContent)) 
        })
        // return product
    }
}


// let product = []
        // const p = path.join(path.dirname(process.mainModule.filename),'data','product.json')
        // fs.readFile(p,(err,fileContent)=>{
        //     if(!err){
        //         product = JSON.parse(fileContent)
        //     }
        //     product.push(this)
        //     fs.writeFile(p,JSON.stringify(product),(err)=>{
        //         console.log(err)
        //     })
        // })
