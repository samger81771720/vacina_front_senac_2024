import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacaoListagemComponent } from './aplicacao.listagem/aplicacao.listagem.component';

const routes: Routes = [
  { path: "listagem", component: AplicacaoListagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacaoRoutingModule { }
