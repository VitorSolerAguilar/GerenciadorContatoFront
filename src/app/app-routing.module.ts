import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
  { path: 'contatos', component: ContatosComponent },
  { path: ''        , component: ContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
