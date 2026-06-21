# Requisitos do Sistema

**Sistema:** Acervo — Catálogo de Colecionáveis  
**Versão:** 1.0  
**Data:** 2026  

---

## 1. Requisitos Funcionais

Requisitos funcionais descrevem **o que o sistema deve fazer** — suas funcionalidades e comportamentos esperados.

| ID | Nome | Descrição |
|---|---|---|
| RF01 | Cadastro de usuário | O sistema deve permitir que novos usuários se cadastrem informando nome, e-mail e senha. |
| RF02 | Login de usuário | O sistema deve autenticar usuários cadastrados por meio de e-mail e senha. |
| RF03 | Logout de usuário | O sistema deve permitir que o usuário encerre sua sessão de forma segura. |
| RF04 | Cadastro de item colecionável | O usuário autenticado deve poder cadastrar um novo item informando nome, descrição, categoria e foto. |
| RF05 | Upload de foto do item | O sistema deve permitir o envio de uma imagem associada ao item colecionável no momento do cadastro ou edição. |
| RF06 | Categorização de itens | O sistema deve permitir que o usuário associe cada item a uma categoria (ex.: moedas, selos, action figures). |
| RF07 | Edição de item cadastrado | O usuário autenticado deve poder editar os dados de um item que cadastrou anteriormente. |
| RF08 | Visualização do catálogo | Qualquer usuário (autenticado ou visitante) deve poder visualizar a lista de itens cadastrados no catálogo. |
| RF09 | Visualização de detalhes do item | Qualquer usuário deve poder visualizar a página de detalhes de um item específico, incluindo foto e descrição. |
| RF10 | Busca por nome | O sistema deve permitir que qualquer usuário busque itens pelo nome. |
| RF11 | Busca por categoria | O sistema deve permitir que qualquer usuário filtre os itens exibidos por categoria. |
| RF12 | Exclusão de item | O usuário autenticado deve poder excluir um item que ele mesmo cadastrou. |

---

## 2. Requisitos Não Funcionais

Requisitos não funcionais descrevem **como o sistema deve se comportar** — restrições de qualidade, desempenho, segurança e tecnologia.

| ID | Categoria | Descrição |
|---|---|---|
| RNF01 | Usabilidade | A interface deve ser intuitiva e de fácil uso para usuários sem experiência técnica. |
| RNF02 | Compatibilidade | O sistema deve funcionar nos principais navegadores modernos: Chrome, Firefox, Edge e Safari. |
| RNF03 | Segurança — Senhas | As senhas dos usuários devem ser armazenadas de forma criptografada (hash), nunca em texto puro. |
| RNF04 | Segurança — Autenticação | A autenticação deve ser implementada com JSON Web Tokens (JWT). O sistema deve controlar o acesso às funcionalidades restritas, impedindo que visitantes realizem cadastro ou edição de itens sem um token válido. |
| RNF05 | Manutenibilidade | O código deve seguir padrões consistentes de formatação e organização, facilitando a leitura e manutenção por toda a equipe. |
| RNF06 | Documentação da API | Todos os endpoints da API devem ser documentados utilizando Swagger/OpenAPI. |
| RNF07 | Upload de imagens | O sistema deve aceitar imagens nos formatos JPG, JPEG, PNG e WEBP, com tamanho máximo de 5 MB por arquivo. |
| RNF08 | Controle de versão | O código-fonte deve ser mantido no GitHub, com commits regulares e mensagens descritivas. |
| RNF09 | Desempenho | As páginas de listagem do catálogo devem carregar em menos de 3 segundos em condições normais de uso. |
| RNF10 | Banco de dados | O sistema deve utilizar um banco de dados relacional compatível com Node.js para o armazenamento de usuários e itens. |

---

## 3. Regras de Negócio

Regras de negócio definem **restrições e políticas** que o sistema deve respeitar, independentemente da tecnologia utilizada.

| ID | Descrição |
|---|---|
| RN01 | Apenas usuários autenticados (colecionadores) podem cadastrar, editar itens. Visitantes têm acesso somente à visualização e busca. |
| RN02 | Cada item colecionável deve obrigatoriamente estar associado a uma categoria. |
| RN03 | Um usuário somente pode editar os itens que ele mesmo cadastrou. Não é permitido editar itens de outros usuários. |
| RN04 | O campo "nome do item" é obrigatório no cadastro. |
| RN05 | O e-mail utilizado no cadastro deve ser único no sistema — não é possível cadastrar dois usuários com o mesmo e-mail. |
| RN07 | O sistema não oferece funcionalidades de compra, venda ou negociação. O catálogo é exclusivamente para exibição e organização de coleções. |
| RN08 | As imagens enviadas devem estar nos formatos JPG, JPEG, PNG ou WEBP e não podem exceder 5 MB. Arquivos fora desses formatos ou acima do limite devem ser rejeitados pelo sistema com mensagem de erro clara ao usuário. |
| RN09 | O token JWT gerado no login deve ser utilizado para autorizar todas as requisições às rotas protegidas da API. Requisições sem token válido devem ser rejeitadas com código HTTP 401. |
| RN10 | As categorias são criadas livremente pelo colecionador no momento do cadastro do item, não havendo uma lista fixa de categorias predefinidas pelo sistema. |
| RN11 | Um usuário somente pode excluir os itens que ele mesmo cadastrou. Não é permitido excluir itens de outros usuários. |
