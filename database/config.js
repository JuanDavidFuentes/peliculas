import mongoose from "mongoose";
//npm mongoose es para la coneccion con el server mongo 
const dbConnection=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CNX);
        console.log("Base de datos online");
    }catch(error){
        throw new Error("Error al iniciar la base de datos")
    }
    
}
export {dbConnection}