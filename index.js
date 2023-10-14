const express=require('express');
const app= express();
const mongoose = require('mongoose');
const Pets=require('./models/pets');
const Shelter=require('./models/shelter');
const http=require('http').Server(app);
app.use(express.urlencoded({ extended: false }));


// mongoose.connect("mongodb+srv://aggarwalsiddharth49:TxMrG6PZfq6y6kn6@masterstack.eziprk2.mongodb.net/?retryWrites=true&w=majority")
// .then(()=> console.log('connected to database'))
// .catch((e)=> console.log('error in  connecting' ,e));
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/masterstack');
    console.log("connected");
  
  }

app.post('/post',(req,res)=>{
    res.send(req.body);
});

app.post('/shelter' ,async (req,res)=>{
    console.log('done');
    res.send(req.body);
})

app.get('/',(req,res)=>{
    res.send('on home page');
})

http.listen(3000,()=>{
    console.log('connected to port 3000');
})