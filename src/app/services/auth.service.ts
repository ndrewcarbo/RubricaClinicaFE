import { Injectable } from '@angular/core';
import { TokenRisposta } from '../models/token-risposta';
import { baseUrl } from '../config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(){}
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedIn.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem('ilToken');
  }

  async EffettuaLogin(username: string, password: string): Promise<TokenRisposta> {
    let invio: any = {
      user: username,
      passw: password
    }
    
    let risultato = await(await fetch(baseUrl + "auth", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(invio)
    })).json();

    return risultato;
  }

  login(token: string) {
    localStorage.setItem('ilToken', token);
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('ilToken');
    this.loggedIn.next(false);
  }
}
