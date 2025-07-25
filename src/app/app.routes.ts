import { Routes } from '@angular/router';
import { PazienteLista } from './paziente-lista/paziente-lista';
import { PazienteInserisci } from './paziente-inserisci/paziente-inserisci';
import { PazienteDettaglio } from './paziente-dettaglio/paziente-dettaglio';
import { AppuntamentoLista } from './appuntamento-lista/appuntamento-lista';
import { AppuntamentoInserisci } from './appuntamento-inserisci/appuntamento-inserisci';
import { Login } from './login/login';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch:'full'},
    {path: "", component: Login},
    {path: "pazienti", component:PazienteLista},
    {path: "appuntamenti", component:AppuntamentoLista},
    {path: "pazienti/inserisci", component:PazienteInserisci},
    {path: "appuntamenti/inserisci", component:AppuntamentoInserisci},
    {path: "pazienti/dettaglio/:codice", component:PazienteDettaglio}
];
