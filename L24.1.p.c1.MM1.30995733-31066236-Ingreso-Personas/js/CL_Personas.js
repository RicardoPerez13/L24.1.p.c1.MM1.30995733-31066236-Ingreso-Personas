export default class CL_Personas{
    constructor(){
        this.menoringreso=9999999999;
        this.contpersonas=0;
        this.acumingreso=0;
    }
    
    procesarpersona(pe){
        if(pe.ingreso<this.menoringreso){
            this.menoringreso=pe.ingreso;
        }

        this.contpersonas++;

        this.acumingreso+=pe.ingreso;
    }
    promingreso(){
        return this.acumingreso/this.contpersonas;
    }
}
