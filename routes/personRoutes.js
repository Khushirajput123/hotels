const express=require('express');
const router=express.Router();
 const Person=require('../models/person');

router.post('/',async (req,res)=>{
    try{
      const data=req.body
      const newPerson=new Person(data);//model
      const response= await newPerson.save();
      console.log('datasaved');
      res.status(200).json(response);}//200 saved successfully
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});//500 internal server error
    }})



    router.get('/',async (req,res)=>{//all data read
      try{
    const data=await Person.find();
    console.log('datafetched');
      res.status(200).json(data);
      } catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
      }
      })


      router.get('/:workType',async(req,res)=>{
        try{
          const workType=req.params.workType;
          if(workType=='chef'||workType=='manager'||workType=='waiter'){
            const response=await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
          } 
          else{
            res.status(404).json({error:'Invalid work Type'});
          }
        } catch(err){
          console.log(err);
      res.status(500).json({error:'Internal Server Error'});//500 internal server error
        }
      })


      //update
      router.put('/:id',async(req,res)=>{
        try{
          const personId=req.params.id;//extracttheid from the url parameter
          const updatedPersonData=req.body;//data send by user to update(json)
          const response= await Person.findByIdAndUpdate(personId,updatedPersonData,{
new:true,//return the updated document
runValidators:true,//run mongoose validation
          })
          if(!response){
            return res.status(404).json({error:'Person not found'});
          }
          console.log('data updated');
          res.status(200).json(response);
        }catch(err){
          console.log(err);
          res.status(500).json({error:'Internal Server Error'});//500 internal server error
        }
      })


      //delete
      // router.delete('/:id',async(req,res)=>{
      //   try{
      //     const personId=req.params.id;
      //     // const response=await Person.findByIdAndRemove(personId);
      //     const response = await Person.findByIdAndRemove(personId);
        
      //   if(!response){
      //     return res.status(404).json({error:'Person not found'});
      //   }
      //   console.log('data deleted');
      //   res.status(200).json({message:'person deleted successfully'});
      // }catch(err){
      //     console.log(err);
      //     res.status(500).json({error:'Internal Server Error'});//500 internal server error
        
      //   }
      // })


      router.delete('/:id', async (req, res) => {
        try {
            const personId = req.params.id;
           // const response = await Person.findByIdAndRemove(personId);
           const response = await Person.findByIdAndDelete(personId);

    
            if (!response) {
                return res.status(404).json({ error: 'Person not found' });
            }
    
            console.log('Data deleted');
            res.status(200).json({ message: 'Person deleted successfully' });
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' }); // 500 internal server error
        }
    });
    

    module.exports=router;//export router