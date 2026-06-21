# Documento de Visão

**Sistema:** Acervo — Catálogo de Colecionáveis  
**Versão:** 1.0  
**Data:** 2026  

---

## 1. Introdução

Este documento descreve a visão geral do sistema **Acervo**, um catálogo digital voltado para colecionadores. O objetivo é estabelecer o escopo, os propósitos e os benefícios esperados do sistema, servindo como referência para toda a equipe de desenvolvimento e para os demais interessados no projeto (*stakeholders*).

---

## 2. Objetivo do Sistema

O **Acervo** tem como objetivo principal fornecer uma plataforma web que permita a colecionadores cadastrar, organizar e exibir seus itens colecionáveis em um catálogo digital acessível pela internet.

Adicionalmente, o sistema visa proporcionar a visitantes e potenciais interessados a capacidade de navegar e buscar itens disponíveis no catálogo, facilitando a descoberta de objetos de interesse.

---

## 3. Problema que o Sistema Resolve

Colecionadores frequentemente enfrentam dificuldades para organizar e divulgar seus acervos de forma estruturada. As alternativas mais comuns — como planilhas, álbuns físicos ou publicações em redes sociais genéricas — não oferecem recursos especializados para catalogação, categorização e busca eficiente de itens.

O **Acervo** resolve esse problema ao centralizar todas essas funções em uma única plataforma web, oferecendo uma experiência organizada tanto para quem cadastra quanto para quem busca itens colecionáveis.

---

## 4. Público-Alvo

O sistema é destinado a dois perfis principais de usuários:

| Perfil | Descrição |
|---|---|
| **Colecionador** | Usuário cadastrado que deseja registrar, organizar e exibir seus itens no catálogo. |
| **Visitante** | Pessoa interessada em visualizar itens do catálogo e realizar buscas, sem necessidade de cadastro. |



---

## 5. Benefícios do Sistema

- **Para o colecionador:** centralização do acervo em um único ambiente digital, com organização por categorias e facilidade de atualização dos itens.
- **Para o visitante:** acesso rápido a catálogos de coleções, com funcionalidades de busca por nome e categoria.
- **Para ambos:** uma interface web acessível de qualquer dispositivo com navegador, sem necessidade de instalação de aplicativos.

---

## 6. Escopo do Sistema

O sistema contempla as seguintes capacidades dentro de seu escopo:

- Cadastro e autenticação de usuários (colecionadores) com tokens JWT.
- Cadastro, edição e visualização de itens colecionáveis com suporte a imagens nos formatos JPG, JPEG, PNG e WEBP (limite de 5 MB por arquivo).
- Organização de itens por categorias.
- Busca de itens por nome e por categoria.
- Visualização pública do catálogo por visitantes não autenticados.
- Armazenamento dos dados em banco de dados SQLite.
- Documentação da API via Swagger/OpenAPI.

---

## 7. Limitações do Sistema

As seguintes funcionalidades estão **fora do escopo** desta versão do sistema:

- **Compra e venda de itens:** o sistema funciona exclusivamente como catálogo de visualização. Não há carrinho de compras, sistema de pagamento ou negociação integrada. O sistema destina-se ao registro e à exibição de coleções, e não à comercialização de itens.
- **Perfil de administrador:** o sistema conta apenas com os perfis Visitante e Colecionador. Não há painel administrativo para moderação de usuários ou itens nesta versão.
- **Aplicativo móvel nativo:** o sistema será desenvolvido como aplicação web, sem aplicativo dedicado para iOS ou Android.
- **Hospedagem e deploy:** o ambiente de produção ainda não foi definido e deverá ser especificado pela equipe antes da entrega final.

---

## 8. Conclusão

O sistema **Acervo** representa uma solução prática e acessível para a digitalização e organização de coleções pessoais. Ao combinar funcionalidades de cadastro, categorização, busca e exibição pública em uma única plataforma web, o projeto atende às necessidades tanto de colecionadores quanto de visitantes interessados.

Este documento de visão serve como base para o levantamento de requisitos, a modelagem do sistema e o desenvolvimento das funcionalidades previstas, devendo ser revisado e atualizado pela equipe sempre que houver mudanças significativas no escopo ou nas definições do projeto.
