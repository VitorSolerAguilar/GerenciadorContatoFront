import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PesquisarContatoComponent } from './pesquisar-contato/pesquisar-contato.component';
import { HomeComponent } from './home/home.component';
import { DetalhesFavoritosComponent } from './detalhes-favoritos/detalhes-favoritos.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';

const routes: Routes = [
  { path: 'contatos', component: ContatosComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'pesquisarContato', component: PesquisarContatoComponent },
  { path: 'detalhesFavoritos/:id', component: DetalhesFavoritosComponent },
  { path: 'editarContato/:id', component: EditarContatoComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
