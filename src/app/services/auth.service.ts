import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenRisposta } from '../models/token-risposta';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient){}

  
  
}
