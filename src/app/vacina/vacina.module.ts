import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { VacinaRoutingModule } from './vacina-routing.module';

import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';

import { FormsModule } from '@angular/forms';
import { VacinaCadastrarComponent } from './vacina-cadastrar/vacina-cadastrar.component';


@NgModule({
  declarations: [
    VacinaListagemComponent,
    VacinaCadastrarComponent
  ],
  imports: [
    CommonModule,
    VacinaRoutingModule,
    FormsModule
  ]
})

export class VacinaModule {

}
