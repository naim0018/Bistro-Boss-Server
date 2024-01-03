const express =require('express')
const router = express.Router()
const UserReview = require('../models/userReviewData')

router.get('/',async(req,res)=>{
    try {
        const review = await UserReview.find({})
        res.status(200).send(review)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.get('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const review = await UserReview.findById(id)
        res.status(200).send(review)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.post('/',async(req,res)=>{
    try {
        const review = await UserReview.create(req.body)
        res.status(200).send(review)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.post('/all',async(req,res)=>{
    try {
        const review = await UserReview.insertMany(req.body)
        res.status(200).send(review)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;