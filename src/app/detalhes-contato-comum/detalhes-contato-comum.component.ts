import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-detalhes-contato-comum',
  standalone: false,
  templateUrl: './detalhes-contato-comum.component.html',
  styleUrl: './detalhes-contato-comum.component.css'
})
export class DetalhesContatoComumComponent {
  contato!: Contato | null;

constructor(private route: ActivatedRoute, private contatoService: ContatoService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contatoService.getById(id).subscribe({
      next: (res) => this.contato = res,
      error: () => this.contato = null
    });
  }

  voltar() {
    this.router.navigate(['/exibirContatos']);
  }
}
