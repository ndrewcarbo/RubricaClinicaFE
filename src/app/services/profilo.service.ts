import { Injectable } from '@angular/core';
import { Risposta } from '../models/risposta';
import { baseUrl } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {
  
  constructor(){}

  async CaricaProfilo() : Promise<Risposta | null>{
    let valoreToken = localStorage.getItem("ilToken");

    if(valoreToken){
      let risultato = await(await fetch(baseUrl + "profilo", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + valoreToken
        },
        method: "GET"
      })).json();

      return risultato;
    }
    else{
      return null;
    }
  }
}
