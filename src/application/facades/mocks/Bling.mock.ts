export const productMock = {
  "codigo": "223435780",
  "descricao": "Caneta 001",
  "situacao": "Ativo",
  "descricaoCurta": "Descrição curta da caneta",
  "descricaoComplementar": "Descrição complementar da caneta",
  "un": "Pc",
  "vlr_unit": "1.68",
  "preco_custo": "1.23",
  "peso_bruto": "0.2",
  "peso_liq": "0.18",
  "class_fiscal": "1000.01.01",
  "marca": "Marca da Caneta",
  "origem": "0",
  "estoque": "10",
  "deposito": {
    "id": "123456",
    "estoque": "200"
  },
  "gtin": "223435780",
  "gtinEmbalagem": "54546",
  "largura": "11",
  "altura": "21",
  "profundidade": "31",
  "estoqueMinimo": "1.00",
  "estoqueMaximo": "100.00",
  "cest": "28.040.00",
  "idGrupoProduto": "12345",
  "condicao": "Novo",
  "freteGratis": "N",
  "linkExterno": "https://minhaloja.com.br/meu-produto",
  "observacoes": "Observações do meu produtos",
  "producao": "P",
  "dataValidade": "20/11/2019",
  "descricaoFornecedor": "Descrição do fornecedor",
  "idFabricante": "0",
  "codigoFabricante": "123",
  "unidadeMedida": "Centímetros",
  "garantia": "4",
  "itensPorCaixa": "2",
  "volumes": "2",
  "urlVideo": "https://www.youtube.com/watch?v=zKKL-SgC5lY",
  "imagens": {
    "url": "https://bling.com.br/bling.jpg"
  },
  "camposCustomizados": {
    "memoriaRam": "16",
    "eDualSim": "false"
  },
  "idCategoria": "1234"
}

export const orderMock = {
  "cliente": {
    "nome": "Organisys Software",
    "tipoPessoa": "J",
    "endereco": "Rua Visconde de São Gabriel",
    "cpf_cnpj": "00000000000000",
    "ie": "3067663000",
    "numero": "392",
    "complemento": "Sala 54",
    "bairro": "Cidade Alta",
    "cep": "95.700-000",
    "cidade": "Bento Gonçalves",
    "uf": "RS",
    "fone": "5481153376",
    "email": "teste@teste.com.br"
  },
  "transporte": {
    "transportadora": "Transportadora XYZ",
    "tipo_frete": "R",
    "servico_correios": "SEDEX - CONTRATO",
    "dados_etiqueta": {
      "nome": "Endereço de entrega",
      "endereco": "Rua Visconde de São Gabriel",
      "numero": "392",
      "complemento": "Sala 59",
      "municipio": "Bento Gonçalves",
      "uf": "RS",
      "cep": "95.700-000",
      "bairro": "Cidade Alta"
    },
    "volumes": [
      {
        "servico": "SEDEX - CONTRATO",
        "codigoRastreamento": [
          
        ]
      },
      {
        "servico": "PAC - CONTRATO",
        "codigoRastreamento": [
          
        ]
      }
    ]
  },
  "itens": [
    {
      "codigo": "001",
      "descricao": "Caneta 001",
      "un": "Pç",
      "qtde": "10",
      "vlr_unit": "1.68"
    },
    {
      "codigo": "002",
      "descricao": "Caderno 002",
      "un": "Un",
      "qtde": "3",
      "vlr_unit": "3.75"
    },
    {
      "codigo": "003",
      "descricao": "Teclado 003",
      "un": "Cx",
      "qtde": "7",
      "vlr_unit": "18.65"
    }
  ],
  "parcelas": [
    {
      "data": "01/09/2009",
      "vlr": "100",
      "obs": "Teste obs 1"
    },
    {
      "data": "06/09/2009",
      "vlr": "50",
      "obs": [
        
      ]
    },
    {
      "data": "11/09/2009",
      "vlr": "50",
      "obs": "Teste obs 3"
    }
  ],
  "vlr_frete": "15",
  "vlr_desconto": "10",
  "obs": "Testando o campo observações do pedido",
  "obs_internas": "Testando o campo observações internas do pedido"
}