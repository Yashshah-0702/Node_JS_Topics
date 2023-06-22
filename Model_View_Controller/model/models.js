const fs = require('fs')
const path = require('path')

module.exports=class Product{

    constructor(t){
        this.title = t
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

    static fetchAll(){
        const p = path.join(path.dirname(process.mainModule.filename),'data','products.json')
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                return []
            }
            return JSON.parse(fileContent)
        })
        return product
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
