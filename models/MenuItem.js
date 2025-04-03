//create schema of menu 

const mongoose=require('mongoose');
const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],

        required:true,
        
    },
    is_drink:{
        type:Boolean,
        default:false//true send true,otherwise false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0,
    }
})
const MenuItem=mongoose.model('MenuItem',menuItemSchema);//name of schema
module.exports=MenuItem;