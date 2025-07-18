import { Component } from '@angular/core';
import { AppuntamentoService } from '../services/appuntamentoService';
import { Router } from '@angular/router';
import { Appuntamento } from '../models/appuntamento';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appuntamento-inserisci',
  imports: [FormsModule],
  templateUrl: './appuntamento-inserisci.html',
  styleUrl: './appuntamento-inserisci.css'
})
export class AppuntamentoInserisci {
    cod?:string;
    dat_appu?:string;
    ora_appu?:string;
    note?:string;

    constructor(private service :AppuntamentoService, private router: Router){}

    Salva(){
        let appu = new Appuntamento();
        appu.dat_appu = this.dat_appu
        appu.ora_appu = this.ora_appu
        appu.note = this.note
        
    
        this.service.CreaPaziente(appu).then(ris => {
          if(ris){
            alert("OK!")
            this.router.navigateByUrl("appuntamenti")
          }
        }).catch(err => {
          alert("NO!");
          console.log(err)
        })
      }
}
