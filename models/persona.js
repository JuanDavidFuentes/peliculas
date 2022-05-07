import mongoose from "mongoose";

const PersonSchema=new mongoose.Schema({
    nombre:{type:String,maxLength:25,required:true},
    apellido:{type: String,maxLength:25,required:true},
    edad:{type:Number,defailt:0},
    telefono:{type:String,maxLength:10},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minLength:6},
    createdAt:{type:Date,default:Date.now()},

})

export default mongoose.model("Persona",PersonSchema)