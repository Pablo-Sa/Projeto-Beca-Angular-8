export interface Curso {
    id: number;
    nome: string;
    palestrante;
    carga: string;
    alunos: [{
        nome:string;
    }]
}