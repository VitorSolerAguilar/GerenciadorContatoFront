import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PesquisarContatoComponent } from './pesquisar-contato/pesquisar-contato.component';
import { HomeComponent } from './home/home.component';
import { DetalhesFavoritosComponent } from './detalhes-favoritos/detalhes-favoritos.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { CadastrarContatoComponent } from './cadastrar-contato/cadastrar-contato.component';
import { ExibirContatosComponent } from './exibir-contatos/exibir-contatos.component';
import { DetalhesContatoComumComponent } from './detalhes-contato-comum/detalhes-contato-comum.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: 'cadastrarContato', component: CadastrarContatoComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'pesquisarContato', component: PesquisarContatoComponent },
  { path: 'detalhesFavoritos/:id', component: DetalhesFavoritosComponent },
  { path: 'editarContato/:id', component: EditarContatoComponent },
  { path: 'exibirContatos', component: ExibirContatosComponent },
  { path: 'detalhesContatoComum/:id', component: DetalhesContatoComumComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
