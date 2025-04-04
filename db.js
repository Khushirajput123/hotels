const mongoose=require('mongoose');
//const mongoURL='mongodb://localhost:27017/hotels'
// const mongoURL='mongodb+srv://khushi639815:7qoSxj141hT8quxI@cluster0.leqch1h.mongodb.net/'
// const mongoURL='mongodb+srv://khushi639815:7qoSxj141hT8quxI@cluster0.leqch1h.mongodb.net/'
// const mongoURL = 'mongodb+srv://khushi639815:yourPassword@cluster0.leqch1h.mongodb.net/hotels?retryWrites=true&w=majority';
//const mongoURL='mongodb+srv://khushi639815:7qoSxj141hT8quxI@cluster0.leqch1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoURL = 'mongodb+srv://khushi639815:7qoSxj141hT8quxI@cluster0.leqch1h.mongodb.net/hotels?retryWrites=true&w=majority&appName=Cluster0';

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