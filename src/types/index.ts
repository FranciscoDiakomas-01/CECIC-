export interface Admin {
    id: string;
    email: string;
    tel: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}

export interface Palestrante {
    id: string;
    nomeCompleto: string;
    foto: string;
    descricao: string;
    status: 'ativo' | 'inativo';
    workshopId: string;
    linkedInURL: string;
}

export interface Inscrito {
    id: string;
    nomeCompleto: string;
    telefone: string;
    descricao: string;
    quantidadePessoas: number;
    participacao: 'online' | 'presencial';
}

export interface Workshop {
    id: string;
    dateStart: Date;
    year: number;
    dateEnd: Date;
    title: string;
    subTitle: string;
    programacao: string;
    description: string;
    temas: string[];
    price: number;
    pay: boolean;
    online: boolean;
}

export interface Evento {
    id: string;
    titulo: string;
    address: string;
    workshopId: string;
    descricao: string;
    status: 'ativo' | 'inativo';
    date: Date;
}

export interface Tag {
    id: string;
    eventoId: string;
    workshopId: string;
    itens: string[];
}

export interface Apoiador {
    id: string;
    nomeEmpresa: string;
    descricao: string;
    logo: string;
    status: 'ativo' | 'inativo';
}

export interface Website {
    id: string;
    logo: string;
    banner: string;
    copyright: string;
    title: string;
    subTitle: string;
    description: string;
    address: string;
    nossaVisao: string;
    quemSomos: string;
    principaisAtividades: string[];
    whatsapp: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    programaAnoPDF: string;
}

export interface AreaEstrategica {
    id: string;
    titulo: string;
    descricao: string;
} 