import { Injectable } from '@angular/core';
import { AppuntamentoRepository } from '../Repo/appuntamentoRepository';
import { Appuntamento } from '../models/appuntamento';

@Injectable({
  providedIn: 'root'
})
export class AppuntamentoService {
  
    constructor(private repo: AppuntamentoRepository){}
    
      async ListaAppuntamenti(): Promise<Appuntamento[]>{
        let risultato : Appuntamento[] = new Array();
        
        await this.repo.GetAll().then(
          ris => {
            risultato = ris
          })
          .catch(errore =>{
            console.log(errore)
          })
          
          return risultato;
        }
    
        async CreaAppuntamento(obj: Appuntamento): Promise<boolean>{
          let risultato: boolean = false;
    
          await this.repo.Create(obj)
          .then(ris => {
            risultato = ris
          }).catch(err => {
            console.log(err)
          })
    
          return risultato;
        }
}
