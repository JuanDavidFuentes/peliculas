app.post("/", (req, res) => {
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
  
  app.get("/", (req, res) => {
    res.json({
      personas,
    });
  });
  
  app.get("/buscar", (req, res) => {
    let { email } = req.query;
    let persona = personas.find((c) => c.email === email);
    res.json({
      persona,
    });
  });
  
  app.get("/login", (req, res) => {
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
  
  app.delete("/", (req, res) => {
    let { email } = req.query;
    personas = personas.filter((c) => c.email !== email);
    res.json({
      "msg": `La persona con el correo ${email} se a eliminado`,
    });
  });