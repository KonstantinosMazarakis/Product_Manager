const { modelName } = require("../models/product.model")
const Products = require("../models/product.model")

module.exports.findAllProducts = (req,res) =>{
    Products.find()
        .then(allProducts =>{
            res.json({results: allProducts})
        })
        .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
}


module.exports.createProduct = (req,res) =>{
    Products.create(req.body)
        .then(newProduct =>{
            res.json({results: newProduct})
        })
        .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
}


module.exports.findOneProduct = (req,res) =>{
    Products.findOne({_id: req.params.id})
        .then(foundProduct =>{
            res.json({results: foundProduct})
        })
        .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))

}

module.exports.updateOneProduct = (req,res)=>{
    Products.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
            .then(updatedProduct=>{
                res.json({results: updatedProduct})
            })
            .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
    }


    module.exports.deleteProduct = (req,res)=>{
        Products.deleteOne({_id: req.params.id})
            .then(deletedProduct =>{
                res.json({results: deletedProduct})
            })
            .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
    }