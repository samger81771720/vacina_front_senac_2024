import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacaoRoutingModule } from './aplicacao-routing.module';
import { FormsModule } from '@angular/forms';
import { AplicacaoListagemComponent } from './aplicacao.listagem/aplicacao.listagem.component';
import { AplicacaoDetalheComponent } from './aplicacao-detalhe/aplicacao-detalhe.component';


@NgModule({
  declarations: [
    AplicacaoListagemComponent,
    AplicacaoDetalheComponent
  ],
  imports: [
    CommonModule,
    AplicacaoRoutingModule,
    FormsModule
  ]
})
export class AplicacaoModule { }
