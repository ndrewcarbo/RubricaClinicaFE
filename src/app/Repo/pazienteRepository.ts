import { Injectable } from '@angular/core';
import { PazienteDTO } from '../models/paziente';
import { baseUrl } from '../config';

@Injectable({
    providedIn: 'root'
})
export class PazienteRepository {
    
    //baseUrl: string = "http://localhost:5272/";
    constructor(){}

    async GetAll(): Promise<PazienteDTO[]>{

        let elencoPazienti : PazienteDTO[] = new Array();
        await fetch(baseUrl + "pazienti")
            .then(response => response.json())
            .then(risultato =>{
                elencoPazienti= risultato;
            })
            .catch(errore => {
                console.log(errore);
            })

        return elencoPazienti;
    }

    async Create(obj: PazienteDTO) :Promise<boolean>{
        let risultato: boolean = false;
        
        await fetch(baseUrl + "pazienti",{
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(obj)
        }).then(ris => {
            risultato = true;
        }).catch(error =>{
            console.log(error);
        })
        return risultato;
    }
}
