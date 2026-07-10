# lavajato-web

Aplicação web para gerenciamento de lava-jato, desenvolvida em **React**.

## Sobre

Sistema para controle de clientes, veículos, serviços e financeiro de um lava-jato. Inclui autenticação e integração com Firebase.

## Tecnologias

- React
- JavaScript
- Firebase
- Yarn

## Configuração

1. Instale as dependências:

```bash
yarn install
```

2. Configure as variáveis de ambiente copiando `.env.example` para `.env` e preenchendo os valores do Firebase.

3. Inicie o servidor de desenvolvimento:

```bash
yarn start
```

## Estrutura

- `src/` — Código-fonte da aplicação.
- `public/` — Arquivos públicos.
- `package.json` — Dependências e scripts.
- `config-overrides.js` — Configuração de override do Webpack.

## Próximos passos

- Atualizar dependências e migrar para React 18+.
- Revisar configurações do Firebase para não expor credenciais.
- Adicionar testes com Jest e React Testing Library.
