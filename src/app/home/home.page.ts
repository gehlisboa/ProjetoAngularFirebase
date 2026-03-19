import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import{Livro} from './livros.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
livros: Livro[] = [
  {
    isbn: '123',
    titulo: 'Uma breve história do tempo',
    sinopse: 'Um livro que te eleva a outro nível',
    data_lancamento: '01/01/2000',
    paginas: '200',
    autor: [
      { nome: 'Steve Hawking', email: 'sh@gmail.com' }
    ],
    categoria: [
      { nome: 'Científico' }
    ],
    editora: { nome: 'Erica', email: 'editora@gmail.com' }
  },
  {
    isbn: '124',
    titulo: 'O universo numa casca de noz',
    sinopse: 'Explicações modernas sobre o universo',
    data_lancamento: '01/01/2001',
    paginas: '250',
    autor: [
      { nome: 'Stephen Hawking', email: 'hawking@gmail.com' }
    ],
    categoria: [
      { nome: 'Ciência' }
    ],
    editora: { nome: 'Nova', email: 'nova@gmail.com' }
  },
  {
    isbn: '125',
    titulo: 'Dom Casmurro',
    sinopse: 'Clássico da literatura brasileira',
    data_lancamento: '01/01/1899',
    paginas: '300',
    autor: [
      { nome: 'Machado de Assis', email: 'machado@gmail.com' }
    ],
    categoria: [
      { nome: 'Romance' }
    ],
    editora: { nome: 'Saraiva', email: 'saraiva@gmail.com' }
  },
  {
    isbn: '126',
    titulo: 'O Pequeno Príncipe',
    sinopse: 'Uma história poética e filosófica',
    data_lancamento: '01/01/1943',
    paginas: '120',
    autor: [
      { nome: 'Antoine de Saint-Exupéry', email: 'antoine@gmail.com' }
    ],
    categoria: [
      { nome: 'Fábula' }
    ],
    editora: { nome: 'Agir', email: 'agir@gmail.com' }
  },
  {
    isbn: '127',
    titulo: '1984',
    sinopse: 'Distopia sobre vigilância e controle',
    data_lancamento: '01/01/1949',
    paginas: '328',
    autor: [
      { nome: 'George Orwell', email: 'orwell@gmail.com' }
    ],
    categoria: [
      { nome: 'Distopia' }
    ],
    editora: { nome: 'Companhia', email: 'companhia@gmail.com' }
  },
  {
    isbn: '128',
    titulo: 'A Revolução dos Bichos',
    sinopse: 'Crítica política em forma de fábula',
    data_lancamento: '01/01/1945',
    paginas: '152',
    autor: [
      { nome: 'George Orwell', email: 'orwell2@gmail.com' }
    ],
    categoria: [
      { nome: 'Político' }
    ],
    editora: { nome: 'Globo', email: 'globo@gmail.com' }
  },
  {
    isbn: '129',
    titulo: 'O Hobbit',
    sinopse: 'Aventura na Terra Média',
    data_lancamento: '01/01/1937',
    paginas: '310',
    autor: [
      { nome: 'J.R.R. Tolkien', email: 'tolkien@gmail.com' }
    ],
    categoria: [
      { nome: 'Fantasia' }
    ],
    editora: { nome: 'Harper', email: 'harper@gmail.com' }
  },
  {
    isbn: '130',
    titulo: 'Harry Potter e a Pedra Filosofal',
    sinopse: 'Início da saga do jovem bruxo',
    data_lancamento: '01/01/1997',
    paginas: '264',
    autor: [
      { nome: 'J.K. Rowling', email: 'rowling@gmail.com' }
    ],
    categoria: [
      { nome: 'Fantasia' }
    ],
    editora: { nome: 'Rocco', email: 'rocco@gmail.com' }
  },
  {
    isbn: '131',
    titulo: 'O Código Da Vinci',
    sinopse: 'Mistério envolvendo arte e religião',
    data_lancamento: '01/01/2003',
    paginas: '400',
    autor: [
      { nome: 'Dan Brown', email: 'dan@gmail.com' }
    ],
    categoria: [
      { nome: 'Suspense' }
    ],
    editora: { nome: 'Arqueiro', email: 'arqueiro@gmail.com' }
  },
  {
    isbn: '132',
    titulo: 'A Menina que Roubava Livros',
    sinopse: 'História emocionante na Segunda Guerra',
    data_lancamento: '01/01/2005',
    paginas: '480',
    autor: [
      { nome: 'Markus Zusak', email: 'zusak@gmail.com' }
    ],
    categoria: [
      { nome: 'Drama' }
    ],
    editora: { nome: 'Intrínseca', email: 'intrinseca@gmail.com' }
  },
  {
    isbn: '133',
    titulo: 'Sapiens',
    sinopse: 'Uma breve história da humanidade',
    data_lancamento: '01/01/2011',
    paginas: '450',
    autor: [
      { nome: 'Yuval Harari', email: 'harari@gmail.com' }
    ],
    categoria: [
      { nome: 'História' }
    ],
    editora: { nome: 'L&PM', email: 'lpm@gmail.com' }
  }
];


}
