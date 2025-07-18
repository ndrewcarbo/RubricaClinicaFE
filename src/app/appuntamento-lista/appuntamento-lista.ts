import { Component } from '@angular/core';
import { Appuntamento } from '../models/appuntamento';
import { AppuntamentoService } from '../services/appuntamentoService';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-appuntamento-lista',
  imports: [CommonModule],
  templateUrl: './appuntamento-lista.html',
  styleUrl: './appuntamento-lista.css'
})
export class AppuntamentoLista {
    elenco: Appuntamento[] = new Array();
    
      constructor(private service: AppuntamentoService){}
    
      ngOnInit(){
        this.service.ListaAppuntamenti().then(
          risultato => {
            console.log(risultato);
            this.elenco = risultato
          }
        )
      }
}
