import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  user:string | undefined;
  passw:string | undefined;

  constructor(private router: Router, private service: AuthService){}

  verifica() {
    if (this.user && this.passw) {
      this.service.EffettuaLogin(this.user, this.passw).then(risultato => {
        if(risultato.token){
          localStorage.setItem("ilToken", risultato.token);
          this.router.navigateByUrl("/pazienti");
        }
      })
    }
    else {
      alert("Inserisci username e password!");
    }
  }

  login() {
  const token = 'fintoToken'; 
  this.service.login(token);
}
}
