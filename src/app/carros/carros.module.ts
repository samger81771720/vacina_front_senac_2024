import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosListaComponent } from './carros-lista/carros-lista.component';
import { CarrosMontadorasComponent } from './carros-montadoras/carros-montadoras.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarrosListaComponent,
    CarrosMontadorasComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    FormsModule
  ]
})
export class CarrosModule { }
