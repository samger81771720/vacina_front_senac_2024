import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacaoListagemComponent } from './aplicacao.listagem/aplicacao.listagem.component';
import { AplicacaoDetalheComponent } from './aplicacao-detalhe/aplicacao-detalhe.component';

const routes: Routes = [
  { path: "listagem", component: AplicacaoListagemComponent },
  { path: "cadastro", component: AplicacaoDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacaoRoutingModule { }
