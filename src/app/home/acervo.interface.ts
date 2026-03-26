export interface ILivro {
    isbn: string;
    titulo:string;
    categoria: ICategoria[]
}

export interface ICategoria {
    nome: string;
}

export interface IProdutos {
    nome: string;
    preco: string;
}