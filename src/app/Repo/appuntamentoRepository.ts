import { Injectable } from '@angular/core';
import { baseUrl } from '../config';
import { Appuntamento } from '../models/appuntamento';

@Injectable({
    providedIn: 'root'
})
export class AppuntamentoRepository {
    
    constructor(){}

    async GetAll(): Promise<Appuntamento[]>{

        let elencoAppu : Appuntamento[] = new Array();
        await fetch(baseUrl + "appuntamenti")
            .then(response => response.json())
            .then(risultato =>{
                elencoAppu= risultato;
            })
            .catch(errore => {
                console.log(errore);
            })

        return elencoAppu;
    }

    async Create(obj: Appuntamento) :Promise<boolean>{
        let risultato: boolean = false;
        
        await fetch(baseUrl + "appuntamenti",{
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
