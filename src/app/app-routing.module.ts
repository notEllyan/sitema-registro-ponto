import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmControlComponent } from './adm-control/adm-control.component'; // Importe o componente

const routes: Routes = [
  // Outras rotas
  { path: 'adm-control', component: AdmControlComponent }, // Configuração da rota para AdmControlComponent
  // Outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
