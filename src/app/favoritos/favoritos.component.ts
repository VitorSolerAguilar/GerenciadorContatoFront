import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-favoritos',
  standalone: false,
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  contatosFavoritos: Contato[] = [];
  formGroupContato : FormGroup;
  isEditing: boolean = false;
  mostrarFormulario = false;

  constructor(private contatoService: ContatoService, formBuilder: FormBuilder) {
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
    this.carregarFavoritos();
  }

  carregarFavoritos() {
    this.contatoService.getAll().subscribe({
      next: (json) => {
        this.contatosFavoritos = json.filter(c => c.contatofavorito === true);
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

  onClickUpdate(contato: Contato) {
      this.isEditing = true;
      this.mostrarFormulario = true;
      this.formGroupContato.patchValue(contato);
  }

  update() {
      this.contatoService.update(this.formGroupContato.value).subscribe(
        {
          next: () => {
            this.carregarFavoritos();
            this.clear();
          } 
        }
      )
  }

  clear() {
    this.isEditing=false;
    this.formGroupContato.reset();
  }

}
