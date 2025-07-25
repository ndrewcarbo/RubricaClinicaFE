import { Component } from '@angular/core';
import { AppuntamentoService } from '../services/appuntamentoService';
import { Router } from '@angular/router';
import { Appuntamento } from '../models/appuntamento';
import { FormsModule } from '@angular/forms';
import { PazienteDTO } from '../models/paziente';
import { PazienteService } from '../services/pazienteService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appuntamento-inserisci',
  imports: [FormsModule,CommonModule],
  templateUrl: './appuntamento-inserisci.html',
  styleUrl: './appuntamento-inserisci.css'
})
export class AppuntamentoInserisci {
    cod?:string;
    dat_appu?:string;
    ora_appu?:string;
    note?:string;
    pazCod?: string;
    paz? : PazienteDTO;

    pazienti: PazienteDTO[] = [];


    constructor(private service :AppuntamentoService, private router: Router, private pazienteService: PazienteService)
    {
      this.pazienteService.ListaPazienti().then(pz => {
        this.pazienti = pz;
      });

    }

    ngOnInit(): void {
    this.pazienteService.ListaPazienti().then(ris => {
      this.pazienti = ris;
    });
  }

    Salva(){
        let appu = new Appuntamento();
        appu.cod = "";
        appu.dat_appu = this.dat_appu
        appu.ora_appu = this.ora_appu
        appu.note = this.note
        appu.pazCod = this.pazCod;
        //appu.paz = this.paz;

    
        this.service.CreaAppuntamento(appu).then(ris => {
          if(ris){
            alert("OK!")
            console.log("Dati inviati:", appu);
            this.router.navigateByUrl("appuntamenti")
          }
        }).catch(err => {
          alert("NO!");
          console.log(err)
        })
      }
}
