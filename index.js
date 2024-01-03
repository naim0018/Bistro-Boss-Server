const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 304;
app.use(express.json())
app.use(cors())
const Product = require('./router/product')
const UserReview = require('./router/review')
app.use('/product', Product)
app.use('/review',UserReview)

mongoose.connect("mongodb+srv://naim0018:A01858361101a@mongodb.invywoo.mongodb.net/BistroBoss?retryWrites=true&w=majority")
.then(()=>{
  
  app.listen(port,  ()=> {
    console.log(`Example app listening on port ${port}!`);
  });

})
.catch((error)=>{
  console.log(error.message)
})
