const mongoose = require('mongoose')


const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model('userReview',reviewSchema)