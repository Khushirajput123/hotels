// function callback(){
//     console.log('khushi');
// }
// const add= function (a,b,callback){
//     var result=a+b;
//     console.log('result:'+result);
//     callback()
// }
// add(3,4,callback);
// var fs=require('fs');
// var os=require('os');


// var user=os.userInfo();//inbuilt function
// console.log(user);

// console.log(user.username);
// fs.appendFile('geeting.txt','hi'+user.username + '!\n',() =>{//callbackfuction
//     console.log('file is created');
// })

// const notes=require('./notes.js');//import file 
// var age=notes.age;
// console.log(age);
// var result=notes.addNumber(age+18,10);
// console.log('result is now'+ result);


// var _=require('lodash');//importlodash
// var data=["person","person",1,2,3,1,2]//unique elment
// var filter=_.uniq(data);
// console.log(filter);
// console.log(_isString(true));//used for more fuction



const express = require('express')
const mongoose = require('mongoose');//import expres
const app = express()
const db = require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

// const Person=require('./models/person');//person module
// const MenuItem=require('./models/MenuItem');//menu module
app.get('/', function (req, res) {//api or menu card req=request,res=response
  res.send('Hello ')
})


// app.post('/person',async (req,res)=>{
// try{
//   const data=req.body
//   const newPerson=new Person(data);//model
//   const response= await newPerson.save();
//   console.log('datasaved');
//   res.status(200).json(response);}//200 saved successfully
// catch(err){
//   console.log(err);
//   res.status(500).json({error:'Internal Server Error'});//500 internal server error
// }})

// app.get('/person',async (req,res)=>{//all data read
//   try{
// const data=await Person.find();
// console.log('datafetched');
//   res.status(200).json(data);
//   } catch(err){
//     console.log(err);
//     res.status(500).json({error:'Internal Server Error'});
//   }
//   })

  // app.post('/MenuItem',async (req,res)=>{
  //   try{
  //     const data=req.body
  //     const newPerson=new Person(data);//model
  //     const response= await newPerson.save();
  //     console.log('datasaved');
  //     res.status(200).json(response);}//200 saved successfully
  //   catch(err){
  //     console.log(err);
  //     res.status(500).json({error:'Internal Server Error'});//500 internal server error
  //   }})

  //   // app.get('/MenuItem',async (req,res)=>{//all data read
  //   //   try{
  //   // const data=await Person.find();
  //   // console.log('datafetched');
  //   //   res.status(200).json(data);
  //   //   } catch(err){
    //     console.log(err);
    //     res.status(500).json({error:'Internal Server Error'});
    //   }
    //   })

  //paramezeried call
  // app.get('/person/:workType',async(req,res)=>{
  //   try{
  //     const workType=req.params.workType;
  //     if(workType=='chef'||workType=='manager'||workType=='waiter'){
  //       const response=await Person.find({work:workType});
  //       console.log('response fetched');
  //       res.status(200).json(response);
  //     } 
  //     else{
  //       res.status(404).json({error:'Invalid work Type'});
  //     }
  //   } catch(err){
  //     console.log(err);
  // res.status(500).json({error:'Internal Server Error'});//500 internal server error
  //   }
  // })
  //const data=req.body

  //create a new person document using mongoose model

  //const newPerson=new Person(data);






  // newPerson.name=data.name;
  // newPerson.age=data.age; //to avoid no of lines new Person(data)
  // newPerson.mobile=data.mobile;
  // newPerson.email=data.email;
  // newPerson.address=data.address;
  //or
//   newPerson.save((error,savedperson) =>{
//     if(error){
//       console.log("error saving person:", error);
//       res.status(500).json({error:'internal error'})//500 server error
//     }else{
//       console.log('data saved suucessfully');
//       res.status(200).json(savedperson);
//     }
//   })
  
// })


// await and async
//  app.get('/food',(req,res)=>
//  { var customized_food={
//   name:"mango",
//   size:"1"
//  }
//     res.send(customized_food)
//  }
// )


//import router file
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
app.listen(6000,()=>{
  console.log('lisenting on port 6000');
})  //waiter room no



//import router file
const menuRoutes=require('./routes/menuRoutes');
app.use('/MenuItem',menuRoutes);
app.listen(4000,()=>{
  console.log('lisenting on port 4000');
})
console.log("hello");