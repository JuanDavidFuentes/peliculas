import Persona from "../models/persona.js"
import bcryptjs from "bcryptjs"

const personaPost=async(req, res)=>{
    const {nombre,apellido,edad,telefono,email,password} = req.body
    let salt=bcryptjs.genSaltSync(10)
    const persona=new Persona({nombre,apellido,edad,telefono,email,password})
    persona.password=bcryptjs.hashSync(password,salt)
    await persona.save()

    res.json({
        "msg":"registro exitoso"
    })
}
const personaGet=async(req, res)=>{
    const personas= await Persona.find()
    res.json({
        personas
    })
}

const personaGetBuscar=async(req, res)=>{
    const { email } = req.query;
    const personas= await Persona.find({email})
    res.json({
        personas
    })
}

const personaGetlogin=async(req, res)=>{
    let {email,password}= req.query 
    const persona= await Persona.findOne({email})
    const validarPassword=bcryptjs.compareSync(password,persona.password)
    const personas= await Persona.find({email,password})
    if (validarPassword)
        res.json({
            "msg":"bienvenido"
        })
    else
        res.status(401).json({
            "msg":"Usted que hace aqui"
        })
}





const personaDelete=async(req, res)=>{
    const{email}=req.query
    const persona= await Persona.findOneAndDelete({email})
    res.json({
        "Eliminado":persona
    })
}

export {personaPost,personaGet,personaGetBuscar,personaGetlogin,personaDelete}