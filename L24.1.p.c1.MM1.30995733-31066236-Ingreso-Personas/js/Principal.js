import CL_Persona from "./CL_Persona.js";
import CL_Personas from "./CL_Personas.js";

let perso1=new CL_Persona('Mary',150);
let perso2=new CL_Persona('José',135);
let perso3=new CL_Persona('Carlos',160);
let perso4=new CL_Persona('Pedro',75);

let personas= new CL_Personas();
personas.procesarpersona(perso1);
personas.procesarpersona(perso2);
personas.procesarpersona(perso3);
personas.procesarpersona(perso4);

let salida=document.getElementById("salida");
salida.innerHTML="Reporte";
salida.innerHTML+="<br>Monto del ingreso menor: "+personas.menoringreso+"$";
salida.innerHTML+="<br>Ingreso promedio: "+personas.promingreso()+"$";

