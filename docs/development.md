## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Permitir cadastro | Raphael Silva Ramalho | cadastro.html |
|RF-002| Permitir login do usuário | Raphael Silva Ramalho | cadastro.html |  
|RF-003| Permitir criação de preferências de ritmos musicais dentro do cadastro do usuário | Raphael Silva Ramalho | cadastroComplete.html |  
|RF-004| Permitir pesquisa de artistas, álbuns e músicas | João Paulo Candido Faria Vieira | search.html |  
|RF-005| Visualizar o perfil do artista contendo seus dados | Ester Alice Souza Leão | perfil-artista.html | 
|RF-006| Visualizar o perfil do ouvinte contendo seus dados | Ester Alice Souza Leão | perfil-ouvinte.html |
|RF-007| Visualizar a página do álbum selecionado contendo suas músicas | Alexandre Gabriel Pereira de Oliveira | pagina-album.html | 
|RF-008| Visualizar a página da música selecionada contendo sua letra | Vitor Casimiro Madureira Souza | Pagina-Musica.html | 
|RF-009| Visualizar a página do artista selecionado contendo suas músicas | Vitor Casimiro Madureira Souza | Perfil-Artista.html | 
|RF-010| Disponibilizar link para execução das músicas | Vitor Casimiro Madureira Souza | Pagina-Musica.html |
|RF-011| Disponibilizar página com ranking de todas as músicas, artistas e ritmos mais ouvidos | Gustavo Costa Negro Souza | --- |
|RF-012| Disponibilizar página com descritivo sobre informações dos integrantes do grupo e motivação para o projeto | João Paulo Candido Faria Vieira | sobre-nos.html |
|RF-013| Permitir envio de feedback sobre o site | João Paulo Candido Faria Vieira | sobre-nos.html | 
|RF-014| Exibir na página inicial sugestões de músicas para usuários | Raphael Silva Ramalho | home.html |
|RF-015| Exibir notícias do mundo da música na página inicial | Raphael Silva Ramalho | home.html |
|RF-016| Permitir uma barra de comentários referênte ao artista para socialização dos usuários | Vitor Casimiro Madureira Souza | Pagina-Musica.html |
|RF-017| Permitir aos usuários cadastrados realizar classificaçôes por nota para os artistas | Vitor Casimiro Madureira Souza | Perfil-Artista.html |  
|RF-018| Exibir ranking na pagina inicial dos artistas mais cotados de acordo com a nota dada pelos usuários | Raphael Silva Ramalho | home.html |  
|RF-019| Visualizar dentro da página do artista selecionado seus álbuns | Vitor Casimiro Madureira Souza | Perfil-Artista.html | 



## Descrição das estruturas:

## Perfil ouvinte e Perfil artista

### Requisitos
- RF-005 - Visualizar o perfil do artista contendo seus dados
- RF-006 - Visualizar o perfil do ouvinte contendo seus dados

Para atender ambos requisitos funcionais, foram desenvolvidas as seguintes páginas de usuários.

Acessando a página de perfil de ouvinte, é apresentado com as apresentações das informações de um usuário em específico, no caso da **Imagem 1** representa o usuário "**Katarina Queiroz**":
##### Imagem-1
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161658408/94546960-a47b-4371-92d5-5a7027588b0f)
Contendo as informações padrões como os dados gerais, e os artistas recomendados.

Logo abaixo na **Imagem 2** foi desenvolvida uma biografia e uma lista de playlists presente no perfil do usuário em questão:
##### Imagem-2
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161658408/405dc145-6d29-4730-9539-0d3180d5dbb5)

Acessando a página de perfil do artista, é apresentado com as apresentações das informações de um artista em específico com grandes semelhanças com a página de um ouvinte, já que ambos são usuarios só classificados com tipos diferentes.
 
 No caso da **Imagem 3** representa o artista" **Klaus|“KLB** ":
 
##### **Imagem 3**

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161658408/3def128e-e1a1-4770-9255-d41d0d2caee9)

As informações apresentadas pelo artista é exposto o gênero musical em que ele produz e outras informações que ele desejar colocar.

Agora na **Imagem 4** é representado a biografia padrão de um usuário, no entanto abaixo da própria biografia, é encontrado uma lista estática semelhante ao de um ouvinte, no entanto ela representa os álbuns produzidos pelo artista.

##### **Imagem 4**

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161658408/5e9a178d-0198-4614-a01c-cac870f18d46)

## Login & Cadastro

### Requisitos
- RF-001 - Permitir cadastro
- RF-002 - Permitir login do usuário
- RF-003 - Permitir criação de preferências de ritmos musicais dentro do cadastro do usuário

Os requisitos focados em login/cadastro foram atingidos nas telas `cadastro.html` e `cadastroComplete.html`

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/70926962/7898d962-927f-4799-bfc7-0292b08993ef)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/70926962/4a79c9f4-7f8d-4826-9419-910e6a3da5b8)

Nessas duas imagens podemos ver o formulário para cadastro e login de novos usuários. Na parte de cadastro o usuário completa os campos com seus dados (tipo de usuário, nome, email, senha e data de nascimento), já na tela de login é preciso fornecer o nome de usuário e senha para completar o acesso.

Ao iniciar uma nova conta, após preenchimento dos dados de forma correta o usuário terá que selecionar quais os seus gêneros favoritos

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/70926962/024ba10c-1c58-42c1-8bd0-b6a95436076d)

## Tela home

### Requisitos
- RF-014 - Exibir na página inicial sugestões de músicas para usuários
- RF-015 - Exibir notícias do mundo da música na página inicial
- RF-018 - Exibir ranking na pagina inicial dos artistas mais cotados de acordo com a nota dada pelos usuários

A página `home.html` abrange todos esses requisitos.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/70926962/0e2e0728-3a00-4df4-87f8-dfe9b7175ab7)

As sugestões ficam numa seção chamada 'For You'

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/70926962/928aee9a-0602-4b27-9a51-d7be262d2f6e)

Noticias e novidades sobre música ficam nessa parte

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/70926962/637703de-43ab-4ccc-af92-e311642cfe1e)

E na área de 'Top Trending' temos os rankings de música, artista e gênero dado como base notas dadas pelos usuários

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/70926962/4e059d77-24cb-4358-b8a6-59f9241855fa)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/70926962/40f01bc6-a2ed-47b8-9afe-2bb424c4ce7d)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/70926962/ac56be8a-4b43-468b-a8fd-c4334bf381ba)

## Perfil do Artista

### Requisitos
- RF-09 - Visualizar a página do artista selecionado contendo suas músicas
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161328993/5e12352e-62e3-4eb3-9a63-8d5c15aa3799)
- RF-019 - Visualizar dentro da página do artista selecionado seus álbuns
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161328993/15ccbae6-bf08-4954-a2eb-6f9fb5a8b0ec)

## Página da Música

### Requisitos
- RF-08 - Visualizar a página da música selecionada contendo sua letra
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161328993/4887dacb-8a38-4c96-9778-604359b76b5c)
- RF-010 - Disponibilizar link para execução das músicas
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161328993/31880afa-0191-431b-b8fb-912f02402bea)
- RF-016 - Permitir uma barra de comentários referênte à música para socialização com os usuários
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161328993/51468133-7402-491f-8139-cdf643adef87)


## Página Sobre Nós

- RF-012 - Disponibilizar página com descritivo sobre informações dos integrantes do grupo e motivação para o projeto
- RF-013 - Permitir envio de feedback sobre o site

Atendendo a ambos os RF sugeridos, foi criado uma página com nome de "sobre-nos.html" que engloba a solução dos dois problemas propostos. 

### RF-12

![sobre-nos-motiv](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161091906/3539cca2-44fb-4271-8609-a5829cd1aac5)

![sobre-nos-idealizadores](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161091906/8663553d-9cb5-4c54-9f7c-b8771f9ed191)

### RF-13

![sobre-nos-feedback](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161091906/4473b26a-fa99-444b-a26e-2ac94feb70c4)

Sendo que nesta página temos um formulário que contem 3 campos. Sendo eles:

|Nome    | Tipo | Descrição | Exemplo |
|------|------------------------|------------|-----------------|
|Seu nome|Texto|Nome do usuário que está escrevendo o feedback|Leonardo|
|Seu e-mail|Texto|E-mail pra contato do usuário|leonardo@gmail.com|
|Sua mensagem|Texto|Mensagem do usuário|Adorei o site!|

## Página de Pesquisa

- RF-04 - Permitir pesquisa de artistas, álbuns e músicas

Criando a página de pesquisa chamada "search.html" foi resolvida a solicitação do RF-04.

### RF-04

![pesquisar-artista](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161091906/2b62b402-c452-4f6e-b9d0-f76af5b454ba)

![pesquisar-musica-albuns](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161091906/1d207bdb-7c10-4b7b-8b04-81de2dfe3bcc)

### Requisitos
- RF-007 - Visualizar a página do álbum selecionado contendo suas músicas 
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161147321/62d600f2-c178-4042-b396-2b3f4d806295)











