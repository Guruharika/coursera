const mongo=require('mongoose');
const schema=mongo.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

const cont=module.exports=mongo.model('contactSchema',schema)