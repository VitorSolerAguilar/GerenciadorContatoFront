import { Component } from '@angular/core';
import { Contato } from '../contato';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-detalhes-favoritos',
  standalone: false,
  templateUrl: './detalhes-favoritos.component.html',
  styleUrl: './detalhes-favoritos.component.css'
})
export class DetalhesFavoritosComponent {
contato!: Contato | null;

  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contatoService.getById(id).subscribe({
      next: (res) => this.contato = res,
      error: () => this.contato = null
    });
  }

  voltar() {
    this.router.navigate(['/favoritos']);
  }
}
