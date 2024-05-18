import { Routes } from '@angular/router';

export const routes: Routes = [
  //OPCIONAL//{ path: '', redirectTo: '/vacina', pathMatch: 'full' },
  /*O pathMatch: 'full' significa que o navegador só fará esse
  redirecionamento se o endereço digitado for exatamente igual a
   www.exemplo.com e não apenas começar com ele. Então, se alguém
   digitar www.exemplo.com/outra-coisa, não será redirecionado para
   as vacina.*/
   {
    path: 'vacina',
    loadChildren: () =>
      import('./vacina/vacina.module').then((m) => m.VacinaModule)
  },
  {
    path: 'pessoa',
    loadChildren: () =>
      import('./pessoa/pessoa.module').then((m) => m.PessoaModule)
  },
  {
    path: 'aplicacao',
    loadChildren: () =>
      import('./aplicacao/aplicacao.module').then((m) => m.AplicacaoModule),
  }
];


