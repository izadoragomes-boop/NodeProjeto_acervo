# Modelagem do Sistema

**Sistema:** Acervo — Catálogo de Colecionáveis
**Versão:** 1.0

---

## Sumário

1. [Diagrama de Casos de Uso](#1-diagrama-de-casos-de-uso)
2. [Diagrama Entidade-Relacionamento (DER)](#2-diagrama-entidade-relacionamento-der)
3. [Tecnologias Utilizadas](#3-tecnologias-utilizadas)

---

## 1. Diagrama de Casos de Uso

> 📁 A imagem deste diagrama está disponível em:
> `docs/modelagem/diagramas/Diagrama de Caso de Uso/Acervo - Diagrama de Caso de Uso.png`

O Diagrama de Casos de Uso representa as funcionalidades do sistema **Acervo** a partir da perspectiva de quem o utiliza. Ele identifica os atores (usuários do sistema) e as ações que cada um pode realizar, sem detalhar a implementação interna dessas ações.

### Atores

| Ator | Descrição |
|---|---|
| **Visitante** | Usuário não autenticado que acessa o sistema apenas para visualizar e buscar itens no catálogo. |
| **Colecionador** | Usuário autenticado que, além de visualizar e buscar, pode cadastrar, categorizar, editar e excluir seus próprios itens. |

Existe uma relação de **generalização** entre os dois atores: o Colecionador herda todas as ações do Visitante (visualizar catálogo, ver detalhes, buscar) e possui ações adicionais exclusivas de quem está autenticado. Essa herança evita repetir associações já existentes entre o Visitante e os casos de uso comuns aos dois perfis.

### Casos de Uso

| Caso de Uso | Ator(es) | Descrição |
|---|---|---|
| Cadastrar-se | Visitante | Criar uma nova conta no sistema. |
| Fazer login | Visitante | Autenticar-se com e-mail e senha. |
| Visualizar catálogo | Visitante, Colecionador | Listar todos os itens cadastrados no sistema. |
| Visualizar detalhes do item | Visitante, Colecionador | Ver informações completas de um item específico. |
| Buscar por nome | Visitante, Colecionador | Pesquisar itens pelo nome. |
| Buscar por categoria | Visitante, Colecionador | Filtrar itens por categoria. |
| Fazer logout | Colecionador | Encerrar a sessão autenticada. |
| Cadastrar item | Colecionador | Registrar um novo item colecionável. |
| Fazer upload de foto | Colecionador | Enviar uma imagem associada ao item. |
| Categorizar item | Colecionador | Associar o item cadastrado a uma categoria, informada livremente no momento do cadastro. |
| Editar item | Colecionador | Alterar os dados de um item já cadastrado. |
| Excluir item | Colecionador | Remover um item que ele mesmo cadastrou. |

### Relacionamentos de Inclusão (`<<include>>`)

| Relacionamento | Justificativa |
|---|---|
| Cadastrar item → Fazer upload de foto | Ao cadastrar um item, o envio da foto faz parte do fluxo do cadastro. |
| Cadastrar item → Categorizar item | Ao cadastrar um item, a categorização é uma etapa obrigatória do processo. |
| Editar item → Fazer upload de foto | Ao editar um item, é possível substituir a foto como parte da edição. |
| Buscar por nome → Visualizar catálogo | O resultado de uma busca por nome é exibido através da listagem do catálogo. |
| Buscar por categoria → Visualizar catálogo | O resultado de uma busca por categoria é exibido através da listagem do catálogo. |

O relacionamento `<<include>>` indica que, sempre que o caso de uso de origem é executado, o caso de uso de destino é executado obrigatoriamente como parte do seu fluxo.

---

## 2. Diagrama Entidade-Relacionamento (DER)

> 📁 A imagem deste diagrama está disponível em:
> `docs/modelagem/diagramas/Diagrama Entidade-Relacionamento/Acervo - Diagrama Entidade-Relacionamento.png`

O Diagrama Entidade-Relacionamento representa a estrutura de dados do sistema **Acervo** — as informações que serão armazenadas no banco de dados e como elas se relacionam entre si.

### Entidades

**USUARIO**

| Atributo | Descrição |
|---|---|
| `id_usuario` (PK) | Identificador único do usuário. |
| `nome` | Nome do colecionador. |
| `email` | E-mail utilizado para login, deve ser único no sistema. |
| `senha` | Senha de acesso, armazenada de forma criptografada. |
| `telefone` | Telefone de contato do colecionador. |
| `data_cadastro` | Data em que o usuário se cadastrou no sistema. |

**ITEM**

| Atributo | Descrição |
|---|---|
| `id_item` (PK) | Identificador único do item colecionável. |
| `nome` | Nome do item. |
| `foto` | Caminho ou referência da imagem do item. |
| `categoria` | Categoria informada livremente pelo colecionador no momento do cadastro. |
| `descricao` | Descrição detalhada do item. |
| `status` | Situação atual do item no catálogo. |
| `data-cadastro` | Data em que o item foi cadastrado. |
| `id_usuario` (FK) | Referencia o usuário que cadastrou o item. |

> Observação: a categoria não é uma entidade separada no banco de dados — ela é armazenada como um campo de texto dentro de `ITEM`, já que o colecionador a informa livremente durante o cadastro, sem haver uma tela própria de gerenciamento de categorias.

### Relacionamento

| Relacionamento | Tipo | Descrição |
|---|---|---|
| USUARIO **cadastra** ITEM | 1:N (um para muitos) | Um usuário pode cadastrar vários itens, mas cada item pertence a apenas um usuário. A chave estrangeira `id_usuario`, presente em `ITEM`, faz referência à chave primária de `USUARIO`. |

---

## 3. Tecnologias Utilizadas

| Tecnologia | Função no projeto |
|---|---|
| **HTML** | Estrutura das páginas web. |
| **CSS** | Estilização visual e layout das páginas. |
| **Node.js** | Lógica de servidor (back-end): processa requisições, gerencia autenticação via JWT e acessa o banco de dados. |
| **JWT** | Padrão de autenticação utilizado para autorizar o acesso às rotas protegidas da API sem necessidade de sessão no servidor. |
| **GitHub** | Controle de versão e colaboração entre os integrantes do grupo. |
| **Swagger/OpenAPI** | Documentação interativa dos endpoints da API. |
