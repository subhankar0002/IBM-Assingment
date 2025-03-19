const mongoose=require('mongoose');
const userSceame=mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const usermodel=mongoose.model("user",userSceame);

module.exports={
    usermodel
}