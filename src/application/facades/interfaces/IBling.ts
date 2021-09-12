export interface IDeposito {
    id?: number
    estoque?: number
}

export interface IImagens {
    url: string
}

export interface ICamposCustomizados {
    memoriaRam: string
    eDualSim: string
}

enum ETipoEstoque {
    F = 'Físico',
    V = 'Virtual'
}

enum ELancarEstoque {
    P = 'Produto',
    C = 'Componente',
    PC = 'Produto e Componente'
}

export interface IComponente {
    nome: string
    codigo: string
    quantidade: number
}

export interface IEstrutura {
    tipoEstoque: ETipoEstoque
    lancarEstoque: ELancarEstoque
    componente: IComponente
}

export interface IProduct {
    codigo?: string
    estrutura?: IEstrutura
    codigoItem: number
    descricao: string
    situacao: string
    descricaoCurta?: string
    descricaoComplementar?: string
    un?: string
    vlr_unit?: string
    preco_custo?: string
    peso_bruto?: string
    peso_liq?: string
    class_fiscal?: string
    marca?: string
    origem?: string
    estoque: string
    deposito?: IDeposito
    gtin?: string
    gtinEmbalagem?: string
    largura?: string
    altura?: string
    profundidade?: string
    estoqueMinimo: string
    estoqueMaximo?: string
    cest?: string
    idGrupoProduto?: string
    condicao?: string
    freteGratis?: string
    linkExterno?: string
    observacoes?: string
    producao?: string
    dataValidade?: string
    descricaoFornecedor?: string
    idFabricante?: number
    codigoFabricante?: string
    unidadeMedida?: string
    garantia?: string
    itensPorCaixa?: string
    volumes?: string
    urlVideo?: string
    imagens?: IImagens
    camposCustomizados?: ICamposCustomizados
    idCategoria: string
    variacoes?: IVariacoes
}

export interface ICliente {
    nome: string
    tipoPessoa: string
    endereco: string
    cpf_cnpj: string
    ie: string
    numero: string
    complemento: string
    bairro: string
    cep: string
    cidade: string
    uf: string
    fone: string
    email: string
}

export interface IDadosEtiqueta {
    nome: string
    endereco: string
    numero: string
    complemento: string
    municipio: string
    uf: string
    cep: string
    bairro: string
}

export interface IVolume {
    servico: string
    codigoRastreamento: string[]
}

export interface ITransporte {
    transportadora: string
    tipo_frete: string
    servico_correios: string
    dados_etiqueta: IDadosEtiqueta
    volumes: IVolume[]
}

export interface IItem {
    codigo: string
    descricao: string
    un: string
    qtde: string
    vlr_unit: string
}

export interface IParcela {
    data: string
    vlr: string
    obs: string
}

export interface ICodigosRastreamento {
    codigo_rastreamento: string
}


interface IVariacao {
    nome: string
    codigo?: string
    vlr_unit?: number
    clonarDadosPai?: string
    estoque?: number
    un?: number
    deposito?: IDeposito
}


export interface IVariacoes {
    variacao: IVariacao
}

export interface IProductRetorno {
    produtos: IProduct[]
}

export interface IProductResponse {
    retorno: IProductRetorno
}

