import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PesquisarContatoComponent } from './pesquisar-contato/pesquisar-contato.component';

const routes: Routes = [
  { path: 'contatos', component: ContatosComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'pesquisarContato', component: PesquisarContatoComponent },
  { path: ''        , component: ContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
