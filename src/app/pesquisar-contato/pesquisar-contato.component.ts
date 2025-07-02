import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contato } from '../contato';

@Component({
  selector: 'app-pesquisar-contato',
  standalone: false,
  templateUrl: './pesquisar-contato.component.html',
  styleUrl: './pesquisar-contato.component.css'
})

export class PesquisarContatoComponent implements OnInit {
  todosContatos: Contato[] = [];
  contatosFiltrados: Contato[] = [];
  filtroForm: FormGroup;

  constructor(private contatoService: ContatoService, private fb: FormBuilder) {
    this.filtroForm = this.fb.group({
      nomeCompleto: [''],
      telefone: [''],
      email: [''],
      endereco: [''],
      dataNascimento: [''],
      categoria: [''],
      apelido: [''],
      cidade: [''],
      empresa: [''],
    });
  }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos() {
    this.contatoService.getAll().subscribe({
      next: (json) => {
        this.todosContatos = json;
        this.contatosFiltrados = json;
      },
      error: (err) => {
        console.error('Erro ao carregar contatos:', err);
      }
    });
  }

  pesquisar() {
    const { nomeCompleto, telefone, email, endereco, dataNascimento, apelido, cidade, empresa, categoria} = this.filtroForm.value;

    this.contatosFiltrados = this.todosContatos.filter(c =>
      (!nomeCompleto || c.nomeCompleto?.toLowerCase().includes(nomeCompleto.toLowerCase())) &&
      (!telefone || c.telefone?.includes(telefone)) &&
      (!email || c.email?.toLowerCase().includes(email.toLowerCase())) &&
      (!endereco || c.endereco?.toLowerCase().includes(endereco.toLowerCase())) &&
      (!dataNascimento || c.dataNascimento === dataNascimento) &&
      (!apelido || c.apelido?.toLowerCase().includes(apelido.toLowerCase())) &&
      (!cidade || c.cidade?.toLowerCase().includes(cidade.toLowerCase())) &&
      (!empresa || c.empresa?.toLowerCase().includes(empresa.toLowerCase())) &&
      (!categoria || c.categoria === categoria)
    );
  }

  limpar() {
    this.filtroForm.reset();
    this.contatosFiltrados = this.todosContatos;
  }
}
