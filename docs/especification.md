# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas

#### Nome: Ana Carolina
#### Idade: 22 anos
#### Profissão: Estudante 

Ana é uma jovem apaixonada por música, especialmente por artistas independentes e novos talentos. Ela dedica parte do seu tempo livre explorando plataformas online em busca de novas descobertas musicais. Seu gosto musical é eclético, abrangendo diversos gêneros e ela adora a ideia de encontrar músicos menos conhecidos e dar-lhes suporte.

Frequentemente visita shows de bandas locais e é até conhecida por algumas delas. Ana também é uma usuária ativa nas redes sociais, onde compartilha suas descobertas musicais em comunidades relacionadas à música, onde pode discutir com outros usuários.

Ela busca uma plataforma onde tenha a possibilidade de descobrir novos artistas, expandir seu repertório musical e contribuir para a promoção de talentos emergentes. Ela também valoriza o fator social e gostaria de uma plataforma onde possa discutir com outras pessoas: interagir com outros usuários, deixar comentários e avaliações, além de participar do ranking de artistas mais bem avaliados são features importantes que Ana leva em consideração.

#### Nome: Igor Castelo
#### Idade: 26 anos
#### Profissão: Músico freelancer

Igor é um jovem multi-instrumentista e por ser do meio musical, está sempre em busca de outros músicos para expandir sua rede e criar novos projetos. Seu gosto por música vai além do consumo e se estende à produção, composição e experimentação de diferentes estilos. Igor não faz parte de nenhuma banda fixa e geralmente preenche espaços temporários em outras bandas, sendo considerado um "músico de sessão" (ou músico freelancer). 

Ele escolheu seguir a carreira de freelancer para ter a liberdade de participar em diferentes projetos e colaborar com uma variedade de artistas. Ao longo dos anos ele acumulou experiência com vários ritmos e instrumentos, tendo contribuindo em gravações de estúdio, shows e sendo membro temporário de algumas bandas. Igor tem o sonho de construir uma carreira solo mas encontra dificuldades em divulgar seus projetos pessoais.

Assim, ele busca uma plataforma que não apenas o conecte com outros artistas, mas que também o ajude a promover sua carreira solo e receba feedback dos seus ouvintes. A facilidade de compartilhar amostras de seu trabalho, criar um perfil atrativo e conectar-se com outros músicos é fundamental para ele na hora de escolher um sistema.

#### Nome: Evelyn Souza
#### Idade: 24 anos
#### Profissão: UI/UX designer e estudante de sistemas de informação

Evelyn leva uma vida agitada, dividindo-se entre o trabalho em uma big tech durante o dia e os estudos na graduação à noite. Sua agenda é repleta de compromissos mas ela sempre encontra tempo para se dedicar às suas paixões, especialmente à música. Em meio à ônibus e metrôs lotados, ela utiliza a música como uma forma de relaxar e se desconectar do estresse diário. Mesmo com sua rotina movimentada, ela procura constantemente novas músicas e artistas para enriquecer suas playlists.

Suas preferências são ecléticas, variando de acordo com seu estado de espírito e o momento do dia. Evelyn gosta de compartilhar suas descobertas com amigos e ocasionalmente frequenta shows locais nos finais de semana. O maior desafio dela nessa contexto é conciliar sua rotina apertada com seus interesses pela música. Ela busca encontrar num sistema maneiras rápidas e práticas para conhecer novas músicas, bem como favorita-las e acessa-las nas plataformas que usa (youtube e spotify).

Para ela, uma plataforma perfeita teria recomendações musicais personalizadas com base em suas preferências, a possibilidade de descobrir shows locais e tudo isso integrado com seus apps de streaming de música, além de claro trazer todas essas funcionalidades de forma intuitiva e fácil para uma navegação rápida.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| Permitir cadastro e login do usuário | ALTA |  
|RF-002| Permitir criação de preferências de ritmos musicais dentro do cadastro do usuário | ALTA |  
|RF-003| Permitir pesquisa de artistas e músicas | ALTA |  
|RF-004| Visualizar o perfil do artista contendo seus dados e sua lista de músicas | ALTA | 
|RF-005| Disponibilizar link para execução das músicas(Youtube, etc) | ALTA |
|RF-006| Permitir uma barra de comentários referênte ao artista para socialização dos usuários(Comentários ao final da página do artista) | MÉDIA | 
|RF-007| Permitir aos usuários cadastrados realizar classificaçôes por nota para os artistas | MÉDIA |  
|RF-008| Exibir ranking na pagina inicial dos artistas mais cotados de acordo com a nota dada pelos usuários(Os 10 maiores) | MÉDIA |  
|RF-009| Exibir na página inicial os artistas mais visualizados do momento(de forma a dar visibilidade a todos de todos os ritmos musicais) | MÉDIA |  
|RF-010| Contabilizar os acessos as páginas dos artistas | BAIXA |  


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A página deve ter modo noturno/escuro | ALTA | 
|RNF-002| Disponibilidade em 90% do tempo | ALTA | 
|RNF-003| Ser responsivo - Browser, Smartphone ou Tablet | MÉDIA | 
|RNF-004| A aplicação deve processar requisições do usuário em no máximo 3s | BAIXA | 



Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não restringir número de usuários simultâneos ao site |
|02| Ser desenvolvido em HMTL, CSS e JavaScrip             |



Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
