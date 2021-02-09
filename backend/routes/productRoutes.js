import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

//fecth all products
//route GET /api/products
//public
router.get('/',asyncHandler(async(req,res)=>{
   const products = await Product.find({})

    res.json(products)
}))


//fecth single product
//route GET /api/products/:id
//public
router.get('/:id',asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(product){
    res.json(product)
    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
}))

export default router