import mongoose from "mongoose";

const PersonSchema=new mongoose.Schema({
    nombre:{type:String,maxLength:25,required:true},
    apellidade:{type: String,maxLength:25,required:true},
    edad:{type:Number,defailt:0},
    telefono:{type:String,maxLength:10},
    email:{type:String,required:true,unique:true},
    paswords:{type:String,required:true,minLength:6}

})

export default mongoose.model("Persona",PersonSchema)