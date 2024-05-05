# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Permitir cadastro | Raphael Silva Ramalho | --- |
|RF-002| Permitir login do usuário | Raphael Silva Ramalho | --- |  
|RF-003| Permitir criação de preferências de ritmos musicais dentro do cadastro do usuário | Raphael Silva Ramalho | --- |  
|RF-004| Permitir pesquisa de artistas, álbuns e músicas | João Paulo Candido Faria Vieira | --- |  
|RF-005| Visualizar o perfil do artista contendo seus dados | Ester Alice Souza Leão | perfil-artista.html | 
|RF-006| Visualizar o perfil do ouvinte contendo seus dados | Ester Alice Souza Leão | perfil-ouvinte.html |
|RF-007| Visualizar a página do álbum selecionado contendo suas músicas | Alexandre Gabriel Pereira de Oliveira | --- | 
|RF-008| Visualizar a página da música selecionada contendo sua letra | Vitor Casimiro Madureira Souza | --- | 
|RF-009| Visualizar a página do artista selecionado contendo suas músicas | Vitor Casimiro Madureira Souza | --- | 
|RF-010| Disponibilizar link para execução das músicas | Vitor Casimiro Madureira Souza | --- |
|RF-011| Disponibilizar página com ranking de todas as músicas, artistas e ritmos mais ouvidos | Gustavo Costa Negro Souza | --- |
|RF-012| Disponibilizar página com descritivo sobre informações dos integrantes do grupo e motivação para o projeto | João Paulo Candido Faria Vieira | --- |
|RF-013| Permitir envio de feedback sobre o site | João Paulo Candido Faria Vieira | --- | 
|RF-014| Exibir na página inicial sugestões de músicas para usuários | Raphael Silva Ramalho | --- |
|RF-015| Exibir notícias do mundo da música na página inicial | Raphael Silva Ramalho | --- |
|RF-016| Permitir uma barra de comentários referênte ao artista para socialização dos usuários | Vitor Casimiro Madureira Souza | --- |
|RF-017| Permitir aos usuários cadastrados realizar classificaçôes por nota para os artistas | Vitor Casimiro Madureira Souza | --- |  
|RF-018| Exibir ranking na pagina inicial dos artistas mais cotados de acordo com a nota dada pelos usuários | Raphael Silva Ramalho | --- |  
|RF-019| Contabilizar os acessos as páginas dos artistas | Vitor Casimiro Madureira Souza | --- | 



## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

