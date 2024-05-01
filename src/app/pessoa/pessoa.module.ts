import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';
import { FormsModule } from '@angular/forms';


//O decorator adiciona funcionalidades ou metadados
@NgModule({

  declarations: [
    PessoaListagemComponent
  ],

  imports: [
    CommonModule,
    PessoaRoutingModule,
    FormsModule
  ]

})

export class PessoaModule { }
