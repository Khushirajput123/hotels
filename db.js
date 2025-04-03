const mongoose=require('mongoose');
const mongoURL='mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL,{
    useNewUrlParser:true,//new mongodb version
    useUnifiedTopology:true}) //connect

const db=mongoose.connection; 
db.on('connected',()=>{
    console.log('connected to MongoDbversion');//listener
})

db.on('error',(err)=>{
    console.log('connected to MongoDb error:',err);//listener
})

db.on('disconnected',()=>{
    console.log('disconnected');//listener


})

module.exports=db;//export