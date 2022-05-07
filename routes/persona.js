import {Router} from "express";
const router=Router();
import {personaGet, personaPost, personaGetBuscar, personaGetlogin, personaDelete} from "../controllers/persona.js"

router.post("/", personaPost );
  
  router.get("/", personaGet);
  
  router.get("/buscar",personaGetBuscar);
  
  router.get("/login", personaGetlogin);
  
  router.delete("/", personaDelete );


  export default router;