import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  contatos: Contato[] = [];
  
  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.contatoService.getAll().subscribe({
      next: (json) => this.contatos = json,
      error: (err) => console.error('Erro ao carregar contatos:', err)
    });
  }
}
