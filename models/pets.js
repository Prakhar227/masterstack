const mongoose =require('mongoose');

const petsSchema= new mongoose.Schema({
    petType:String,
    petName:String,
    petAge:Number,
    petBreed:String,
    petOwnerName:String,
    petHealth:Number,
    petAdoptionDays:Number,
    petAddrees:String,
    petImageURL:String,
    petAdoptionTime:Number,
    petAdoptionMsg:String,
    gender:Boolean
});

module.exports= mongoose.model('Pets' , petsSchema);