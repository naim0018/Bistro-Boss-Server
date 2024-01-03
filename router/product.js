const express = require('express')
const router =  express.Router()
const Product = require('../models/productSchema')
router.get('/', async(req,res)=>{
    try {
        const product= await Product.find({})
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.get('/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const product= await Product.findById(id)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.post('/', async(req,res)=>{
    try {
        const product= await Product.create(req.body)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.post('/all', async(req,res)=>{
    try {
        const product= await Product.insertMany(req.body)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;