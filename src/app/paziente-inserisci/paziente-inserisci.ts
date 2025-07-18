import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PazienteDTO } from '../models/paziente';
import { PazienteService } from '../services/pazienteService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paziente-inserisci',
  imports: [FormsModule,CommonModule],
  templateUrl: './paziente-inserisci.html',
  styleUrl: './paziente-inserisci.css'
})
export class PazienteInserisci {

  nome!:string;
  cogome!:string;
  indirizzo?:string;
  telefono?:string;
  email?:string;
  nascita?:string;

  constructor(private service :PazienteService, private router: Router){}

  RegistraPaziente(){
    let paz = new PazienteDTO();
    paz.nom = this.nome
    paz.cog = this.cogome
    paz.ind = this.indirizzo
    paz.tel = this.telefono
    paz.ema = this.email
    paz.dat = this.nascita

    this.service.CreaPaziente(paz).then(ris => {
      if(ris){
        alert("OK!")
        this.router.navigateByUrl("pazienti")
      }
    }).catch(err => {
      alert("NO!");
      console.log(err)
    })
  }
  
}