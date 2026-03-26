import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro } from './acervo.interface';
import { IProdutos } from './acervo.interface';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  livros: ILivro[] = [
    {isbn: "123", 
      titulo: "A decadencia da psiquiatria ocidental",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "124", 
      titulo: "Neurociencia e Comportamento Humano",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "125", 
      titulo: "Fundamentos da Psicofarmacologia",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "126", 
      titulo: "Transtornos Mentais Modernos",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "127", 
      titulo: "Avancos na Psiquiatria Clinica",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "128", 
      titulo: "Bases Biologicas da Mente",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "129", 
      titulo: "Manual de Saude Mental",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "130", 
      titulo: "Neuropsicologia Aplicada",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "131", 
      titulo: "Cerebro e Emoções",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "132", 
      titulo: "Tratamentos em Psiquiatria",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "133", 
      titulo: "Psicopatologia Contemporanea",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "134", 
      titulo: "Neurobiologia das Doenças Mentais",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "135", 
      titulo: "Saude Mental na Sociedade Moderna",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "136", 
      titulo: "Estudos Avançados em Psiquiatria",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "137", 
      titulo: "Diagnostico em Saude Mental",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "138", 
      titulo: "Introdução à Neurociencia Clinica",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "139", 
      titulo: "Psiquiatria Baseada em Evidencias",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "140", 
      titulo: "Neurociencia Cognitiva",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "141", 
      titulo: "Tratamento de Transtornos Psicologicos",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "142", 
      titulo: "Saude Mental e Qualidade de Vida",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    },

    {isbn: "143", 
      titulo: "Pesquisa em Neurociencia Experimental",
      categoria: [
        {nome: "cientifico"},
        {nome: "pesquisa"},
        {nome: "medicina"}
      ]
    }
  ]

  produtos: IProdutos[] = [
    { nome: "batom",
      preco: "20"
    },
    { nome: "lapis",
      preco: "3"
    },
    { nome: "caderno",
      preco: "50"
    },

  ]
}