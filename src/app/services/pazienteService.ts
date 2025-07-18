import { Injectable } from '@angular/core';
import { PazienteDTO } from '../models/paziente';
import { PazienteRepository } from '../Repo/pazienteRepository';

@Injectable({
  providedIn: 'root'
})
export class PazienteService {
  
  constructor(private repo: PazienteRepository){}

  async ListaPazienti(): Promise<PazienteDTO[]>{
    let risultato : PazienteDTO[] = new Array();
    
    await this.repo.GetAll().then(
      ris => {
        risultato = ris
      })
      .catch(errore =>{
        console.log(errore)
      })
      
      return risultato;
    }

    async CreaPaziente(obj: PazienteDTO): Promise<boolean>{
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

