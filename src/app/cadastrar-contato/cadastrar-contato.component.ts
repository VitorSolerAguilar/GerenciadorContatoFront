import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos',
  standalone: false,
  templateUrl: './cadastrar-contato.component.html',
  styleUrl: './cadastrar-contato.component.css'
})
export class CadastrarContatoComponent implements OnInit {
  contatos: Contato[] = []; 
  formGroupContato: FormGroup;

  constructor(private service: ContatoService,private formBuilder: FormBuilder) {
    this.formGroupContato = formBuilder.group({
      id: [null],
      nomeCompleto: ['', Validators.required],
      telefone: ['', Validators.required],
      email: [''],
      endereco: [''],
      dataNascimento: [''],
      categoria: ['', Validators.required],
      apelido: [''],
      cidade: [''],
      empresa: [''],
      site: [''],
      notasAdicionais: [''],
      contatofavorito: [false]
    });
  }

  ngOnInit(): void {
    this.loadContatos();
  }

  loadContatos() {
    this.service.getAll().subscribe({
      next: json => this.contatos = json
    });
  }

  salvarContato() {
  if (this.formGroupContato.invalid) {
    this.formGroupContato.markAllAsTouched();
    return;
  }

    this.service.save(this.formGroupContato.value).subscribe(
      {
        next: json => {
          this.contatos.push(json);
          this.formGroupContato.reset();
        }
      }
    )
  }
}
