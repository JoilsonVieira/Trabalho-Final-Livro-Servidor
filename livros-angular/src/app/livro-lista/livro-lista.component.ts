import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.obterLivros();
  }

  obterLivros() {
    this.servLivros.obterLivros().subscribe((livros) => {
      this.livros = livros;
    });
  }

  excluirLivro(codigo: string) {
    this.servLivros.excluirLivro(codigo).subscribe(() => {
      this.obterLivros();
    });
  }

  obterNome = (codEditora: number) =>
    this.servEditora.getNomeEditora(codEditora);
}
