import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';


const routes: Routes = [
  { path: 'listagem', component: VacinaListagemComponent },
  { path: 'cadastrar', component: VacinaDetalheComponent},
  { path: 'cadastrar/:idVacina', component: VacinaDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VacinaRoutingModule { }
