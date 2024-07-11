export default class CL_Persona{
    constructor(n,i){
        this.nombre=n;
        this.ingreso=i;
    }

    set nombre(no){
        return this._nombre=no;
        }
        
        get nombre(){
        return this._nombre;
        }
    
    set ingreso(ig){
        return this._ingreso=ig;
        }
            
         get ingreso(){
        return this._ingreso;
        }
}