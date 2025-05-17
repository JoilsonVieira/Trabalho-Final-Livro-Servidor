import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [];

  constructor(private http: HttpClient) {}

  obterLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>('http://localhost:3030/livros');
  }

  excluirLivro(id: string) {
    return this.http.delete(`http://localhost:3030/livros/${id}`);
  }

  incluirLivro(novoLivro: Livro) {
    return this.http.post(`http://localhost:3030/livros`, novoLivro);
  }
}
