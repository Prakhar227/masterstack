const mongoose=require('mongoose');

const shelterSchema= new mongoose.Schema({
    name:String,
    petTypes:String,
    address:String,
    totalCapacity:[Number],
    curreStrength: Number,
    donationRecived:Number
})

module.exports= mongoose.model('Shelter',shelterSchema);    