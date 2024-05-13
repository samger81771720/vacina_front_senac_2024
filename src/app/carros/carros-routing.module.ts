import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosListaComponent } from './carros-lista/carros-lista.component';
import { CarrosMontadorasComponent } from './carros-montadoras/carros-montadoras.component';

const routes: Routes = [
  { path: 'consultar-carros-cadastrados', component: CarrosListaComponent },
  { path: 'consultar-carros-estoque', component: CarrosMontadorasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
