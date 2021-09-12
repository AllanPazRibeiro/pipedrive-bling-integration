export interface IDeposito {
    id: string;
    estoque: string;
}

export interface IImagens {
    url: string;
}

export interface ICamposCustomizados {
    memoriaRam: string;
    eDualSim: string;
}

export interface IProduct {
    codigo: string;
    descricao: string;
    situacao: string;
    descricaoCurta: string;
    descricaoComplementar: string;
    un: string;
    vlr_unit: string;
    preco_custo: string;
    peso_bruto: string;
    peso_liq: string;
    class_fiscal: string;
    marca: string;
    origem: string;
    estoque: string;
    deposito: IDeposito;
    gtin: string;
    gtinEmbalagem: string;
    largura: string;
    altura: string;
    profundidade: string;
    estoqueMinimo: string;
    estoqueMaximo: string;
    cest: string;
    idGrupoProduto: string;
    condicao: string;
    freteGratis: string;
    linkExterno: string;
    observacoes: string;
    producao: string;
    dataValidade: string;
    descricaoFornecedor: string;
    idFabricante: string;
    codigoFabricante: string;
    unidadeMedida: string;
    garantia: string;
    itensPorCaixa: string;
    volumes: string;
    urlVideo: string;
    imagens: IImagens;
    camposCustomizados: ICamposCustomizados;
    idCategoria: string;
}

export interface ICliente {
    nome: string;
    tipoPessoa: string;
    endereco: string;
    cpf_cnpj: string;
    ie: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    uf: string;
    fone: string;
    email: string;
}

export interface IDadosEtiqueta {
    nome: string;
    endereco: string;
    numero: string;
    complemento: string;
    municipio: string;
    uf: string;
    cep: string;
    bairro: string;
}

export interface IVolume {
    servico: string;
    codigoRastreamento: string[];
}

export interface ITransporte {
    transportadora: string;
    tipo_frete: string;
    servico_correios: string;
    dados_etiqueta: IDadosEtiqueta;
    volumes: IVolume[];
}

export interface IItem {
    codigo: string;
    descricao: string;
    un: string;
    qtde: string;
    vlr_unit: string;
}

export interface IParcela {
    data: string;
    vlr: string;
    obs: string;
}

export interface IOrder {
    cliente: ICliente;
    transporte: ITransporte;
    itens: IItem[];
    parcelas: IParcela[];
    vlr_frete: string;
    vlr_desconto: string;
    obs: string;
    obs_internas: string;
}

export interface ICodigosRastreamento {
    codigo_rastreamento: string;
}

export interface IPedido {
    numero: string;
    idPedido: number;
    codigos_rastreamento: ICodigosRastreamento;
    volumes: IVolume[];
}

export interface IPedidoRetorno {
    pedidos: IPedido[];
}

export interface IOrderResponse {
    retorno: IPedidoRetorno;
}


export interface IProduto {
    codigo: string;
    tipo: string;
    situacao: string;
    descricao: string;
    unidade: string;
    preco: string;
    precoCusto: string;
    pesoLiq: string;
    pesoBruto: string;
    estoqueMinimo: string;
    estoqueMaximo: string;
    gtin: string;
    gtinEmbalagem: string;
    descricaoComplementar: string;
    larguraProduto: string;
    alturaProduto: string;
    profundidadeProduto: string;
    class_fiscal: string;
    cest: string;
    idGrupoProduto: string;
    condicao: string;
    freteGratis: string;
    linkExterno: string;
    observacoes: string;
    producao: string;
    unidadeMedida: string;
    itensPorCaixa: number;
    volumes: number;
    urlVideo: string;
    localizacao: string;
    crossdocking: number;
    marca: string;
    garantia: number;
    dataValidade: string;
    spedTipoItem: string;
    descricaoFornecedor: string;
    codigoFabricante: string;
    idCategoria: string;
}


export interface IProductRetorno {
    produtos: IProduto[];
}

export interface IProductResponse {
    retorno: IProductRetorno;
}

