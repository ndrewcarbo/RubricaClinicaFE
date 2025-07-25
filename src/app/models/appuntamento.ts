import { PazienteDTO } from "./paziente";

export class Appuntamento {
    cod?:string;
    dat_appu?:string;
    ora_appu?:string;
    note?:string;
    pazCod: string | undefined;
    //paz : PazienteDTO | undefined;
}
