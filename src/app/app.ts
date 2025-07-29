import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Navbar, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {


  constructor(public authService: AuthService) {}
  
  protected title = 'AgendaClinica';
  isLoggato: boolean = false;

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    this.isLoggato = !!localStorage.getItem('ilToken');
  }


  // isLoggedIn(): boolean {
  // return !!localStorage.getItem("ilToken");
  // }
}
