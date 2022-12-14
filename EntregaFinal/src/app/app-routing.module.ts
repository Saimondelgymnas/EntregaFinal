import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './componentes/entrada/entrada.component';
import { PracticosComponent } from './componentes/practicos/practicos.component';

const routes: Routes = [
  {path:'',component: EntradaComponent},
  {path:'practicos',component: PracticosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
