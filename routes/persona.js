import {Router} from "express";

const router=Router();

router.post("/", (req, res) => {
    let { nombre, edad, apellidos, email, paswords, telefono } = req.body;
  
    res.json({
      nombre,
      edad,
      apellidos,
      email,
      paswords,
      telefono,
    });
    personas.push(req.body);
  });
  
  router.get("/", (req, res) => {
    res.json({
      personas,
    });
  });
  
  router.get("/buscar", (req, res) => {
    let { email } = req.query;
    let persona = personas.find((c) => c.email === email);
    res.json({
      persona,
    });
  });
  
  router.get("/login", (req, res) => {
    let { email, paswords } = req.query;
    let a = personas.find((c) => c.email === email && c.paswords === paswords);
    
    if (a) {
      res.json({
        "msg": `Login exitoso`
      });
    } else {
      res.json({
        "msg": `Email o paswords incorrectas`
      });
    }
  });
  
  router.delete("/", (req, res) => {
    let { email } = req.query;
    personas = personas.filter((c) => c.email !== email);
    res.json({
      "msg": `La persona con el correo ${email} se a eliminado`,
    });
  });

  export default router;