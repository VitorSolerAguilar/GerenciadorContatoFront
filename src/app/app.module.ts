import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PesquisarContatoComponent } from './pesquisar-contato/pesquisar-contato.component';
import { DetalhesFavoritosComponent } from './detalhes-favoritos/detalhes-favoritos.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { CadastrarContatoComponent } from './cadastrar-contato/cadastrar-contato.component';
import { ExibirContatosComponent } from './exibir-contatos/exibir-contatos.component';
import { DetalhesContatoComumComponent } from './detalhes-contato-comum/detalhes-contato-comum.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    FavoritosComponent,
    PesquisarContatoComponent,
    DetalhesFavoritosComponent,
    EditarContatoComponent,
    CadastrarContatoComponent,
    ExibirContatosComponent,
    DetalhesContatoComumComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
