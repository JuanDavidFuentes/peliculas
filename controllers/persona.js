import Persona from "../models/persona.js"

const personaPost=async(req, res)=>{
    const {nombre,apellido,edad,telefono,email,password} = req.body
    const persona=new Persona({nombre,apellido,edad,telefono,email,password})
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
    const {email,password}= req.query 
    const personas= await Persona.find({email,password})
    if (personas.length>0)
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