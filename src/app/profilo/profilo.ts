import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfiloService } from '../services/profilo.service';

@Component({
  selector: 'app-profilo',
  imports: [],
  templateUrl: './profilo.html',
  styleUrl: './profilo.css'
})
export class Profilo {
  profiloSelezionato : string | undefined;

  constructor(private service: ProfiloService, private router:Router){}


  ngOnInit(){
    this.service.CaricaProfilo().then(risultato => {
      if(risultato){
        this.profiloSelezionato = risultato.dati;
      }
      else{
        this.router.navigateByUrl("/")
      }
    })
  }
}
