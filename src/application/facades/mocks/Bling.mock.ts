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