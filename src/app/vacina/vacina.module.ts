import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';


import { VacinaRoutingModule } from './vacina-routing.module';


import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';


@NgModule({
  declarations: [
    VacinaListagemComponent
  ],
  imports: [
    CommonModule,
    VacinaRoutingModule
  ]
})

export class VacinaModule {

}
