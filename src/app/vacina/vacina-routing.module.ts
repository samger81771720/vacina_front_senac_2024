import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { VacinaCadastrarComponent } from './vacina-cadastrar/vacina-cadastrar.component';


const routes: Routes = [
  { path: 'listagem', component: VacinaListagemComponent },
  { path: 'cadastrar', component: VacinaCadastrarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VacinaRoutingModule { }
