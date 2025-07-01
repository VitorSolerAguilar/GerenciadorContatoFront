import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-favoritos',
  standalone: false,
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  contatosFavoritos: Contato[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.carregarFavoritos();
  }

  carregarFavoritos() {
    this.contatoService.getAll().subscribe({
      next: (json) => {
        this.contatosFavoritos = json.filter(c => c.Contatofavorito === true);
      },
      error: (erro) => {
        console.error('Erro ao carregar contatos:', erro);
      }
    });
  }

  deletarFavorito(contato: Contato) : void {
    this.contatoService.delete(contato).subscribe(
      {
        next: () => this.carregarFavoritos()
      }
    )
  }

}
