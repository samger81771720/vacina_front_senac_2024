import { Routes } from '@angular/router';

export const routes: Routes = [
  //{ path: '', redirectTo: 'vacina', pathMatch: 'full'},
  {
    path: 'vacina',
    loadChildren: () =>
      import('./vacina/vacina.module').then((m) => m.VacinaModule),
  },
];


