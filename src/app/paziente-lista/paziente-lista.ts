import { Component } from '@angular/core';
import { PazienteService } from '../services/pazienteService';
import { CommonModule } from '@angular/common';
import { PazienteDTO } from '../models/paziente';

@Component({
  selector: 'app-paziente-lista',
  imports: [CommonModule],
  templateUrl: './paziente-lista.html',
  styleUrl: './paziente-lista.css'
})
export class PazienteLista {
  elenco: PazienteDTO[] = new Array();

  constructor(private service: PazienteService){}

  ngOnInit(){
    this.service.ListaPazienti().then(
      risultato => {
        console.log(risultato);
        this.elenco = risultato
      }
    )
  }

  
}
