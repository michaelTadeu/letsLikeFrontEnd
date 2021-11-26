import { User } from "./user";

export class Projeto {
    id: number;
    nome: string;
    url: string;
    imagem: string;
    likeContador: number;
    usuarioCadastro: User;
    idUsuarioCadastro: number;
}