import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-contato',
  standalone: false,
  templateUrl: './editar-contato.component.html',
  styleUrl: './editar-contato.component.css'
})
export class EditarContatoComponent {
  formGroupContato: FormGroup;
  contatosFavoritos: Contato[] = [];
  isEditing: boolean = false;

  constructor(private contatoService: ContatoService, formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
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
      notasAdicionais: [''],
      Contatofavorito: [false]
    });
  }

  ngOnInit(): void {
    this.carregarContato();
  }

  carregarContato(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.contatoService.getById(id).subscribe({
        next: (contato: Contato) => {
          if (contato) {
            this.formGroupContato.patchValue(contato);
          } else {
            alert('Contato não encontrado');
            this.router.navigate(['/favoritos']);
          }
        },
        error: () => {
          alert('Erro ao carregar o contato');
          this.router.navigate(['/favoritos']);
        }
      });
    } else {
      alert('ID inválido');
      this.router.navigate(['/favoritos']);
    }
  }

  update(): void {
    if (this.formGroupContato.valid) {
      this.contatoService.update(this.formGroupContato.value).subscribe({
        next: () => {
          alert('Contato atualizado com sucesso');
          this.router.navigate(['/favoritos']);
        },
        error: () => {
          alert('Erro ao atualizar o contato');
        }
      });
    } else {
      alert('Formulário inválido');
    }
  }
}
