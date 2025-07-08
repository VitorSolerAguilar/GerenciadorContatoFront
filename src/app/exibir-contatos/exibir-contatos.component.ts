import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exibir-contatos',
  standalone: false,
  templateUrl: './exibir-contatos.component.html',
  styleUrl: './exibir-contatos.component.css'
})
export class ExibirContatosComponent implements OnInit {
  contatos: Contato[] = [];
  formGroupContato: FormGroup;
  isEditing: boolean = false;
  mostrarFormulario = false;

  constructor(private contatoService: ContatoService, formBuilder: FormBuilder, private router: Router) {
    this.formGroupContato = formBuilder.group({
      id: [null],
      nomeCompleto: [''],
      telefone: [''],
      email: [''],
      endereco: [''],
      dataNascimento: [''],
      categoria: [''],
      apelido: [''],
      cidade: [''],
      empresa: [''],
      site: [''],
      notasAdicionais: [''],
      contatofavorito: [false]
    });
  }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos() {
    this.contatoService.getAll().subscribe({
      next: (json) => this.contatos = json,
      error: (err) => console.error('Erro ao carregar contatos:', err)
    });
  }

  deletarContato(contato: Contato): void {
    this.contatoService.delete(contato).subscribe(
      {
        next: () => this.carregarContatos()
      }
    )
  }

  onClickUpdate(contato: Contato) {
    this.isEditing = true;
    this.mostrarFormulario = true;
    this.formGroupContato.patchValue(contato);
  }

  update() {
    this.contatoService.update(this.formGroupContato.value).subscribe(
      {
        next: () => {
          this.carregarContatos();
          this.clear();
        }
      }
    )
  }

  clear() {
    this.isEditing = false;
    this.formGroupContato.reset();
  }

  verDetalhes(contato: Contato) {
    if (contato.contatofavorito) {
      this.router.navigate(['/detalhesFavoritos', contato.id]);
    } else {
      this.router.navigate(['/detalhesContatoComum', contato.id]);
    }
  }

}
