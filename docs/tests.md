# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Clique em criar conta <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "Continuar".
**Requisitos associados** | RF-001 |
**Resultado esperado** | Prosseguir para a parte 2 do cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | *CT02 - Perfil dinamico*
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço */pesquisa-usuario.html* <br> 2) Digite o nome de usuario <br> 3) Clique em "Pesquisar".
**Requisitos associados** | RF-005 - RF-006 
**Resultado esperado** | visualizar perfil do usuário cadastrado
**Dados de entrada** | nome de usuário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Criar conta" <br> 
**Requisitos associados** | RF-001
**Resultado esperado** | Usuário cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Pesquisar algum item cadastrado**
 :--------------: | ------------
**Procedimento**  | 1) Digitar no mínimo 3 caracteres na barra de pesquisa <br> 2) Clicar no ícone da lupa ao lado <br>
**Requisitos associados** | RF-004
**Resultado esperado** | Pesquisa dentro do ".json" com respostas referêntes nos 3 filtros. Podendo ser "Músicas", "Álbuns" ou "Artistas".
**Dados de entrada** | Inserção de no mínimo 3 caracteres na barra de pesquisa
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Enviar um feedback para a equipe**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Enviar" <br> 
**Requisitos associados** | RF-012
**Resultado esperado** | Pop-up de confirmação de envio
**Dados de entrada** | Inserção de dados válidos no formulário de feedback
**Resultado obtido** | Sucesso


## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1otxgOo8cwvhaUgfGtR1Hsg0GRy8RpZYE/view?usp=drive_link

|*Caso de Teste*                                 |*CT02 - Perfil dinamico*                                         |
|---|---|
|Requisito Associado | RF-005 / RF006- A aplicação deve permitir que o usuário visualize  seu  perfil após o cadastro|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161658408/dc849011-66b9-4f90-a7f8-84432068087c| 

|*Caso de Teste*                                 |*CT03 - Fazer login*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários façam login em suas contas|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1otxgOo8cwvhaUgfGtR1Hsg0GRy8RpZYE/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT04 - Pesquisar algum item cadastrado*                                        |
|---|---|
|Requisito Associado | RF-004 - Permitir pesquisa de artistas, álbuns e músicas|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/18iEqr003SCxq8_zJcXXN7oxHF7v9uvwh/view?usp=sharing | 

|*Caso de Teste*                                 |*CT05 - Enviar um feedback para a equipe*                                        |
|---|---|
|Requisito Associado | RF-012 - Disponibilizar página com descritivo sobre informações dos integrantes do grupo e motivação para o projeto|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1_4ST4iyytHZYYyGQsNg4F4GXPYkNe8vj/view?usp=sharing | 



## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja pesquisar um artista, música ou álbum e que, após pesquisar,  possa entrar diretamente no item ao clicar em algum resultado. |
| 2             | Você é uma pessoa que deseja enviar um feedback para a equipe criadora do site para alguma avaliação ou sugestão. |
| 3             | Você é uma pessoa que acaba de se cadastrar no site "musicmatch". Seu perfil é exibido com as informações esperadas. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja pesquisar um artista, música ou álbum e que, após pesquisar,  possa entrar diretamente no item ao clicar em algum resultado.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 10.03 segundos                  |
| 2       | SIM             | 5                    | 12.15 segundos                  |
| 3       | SIM             | 5                    | 7.52 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 9.90 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 5.86 segundos |

    

Cenário 2: Você é uma pessoa que deseja enviar um feedback para a equipe criadora do site para alguma avaliação ou sugestão.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 20.23 segundos                          |
| 2       | SIM             | 5                    | 28.20 segundos                          |
| 3       | SIM             | 4                    | 18.31 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 22.25 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15.77 segundos |

    
Cenário 3: Você é uma pessoa que acaba de se cadastrar no site "musicmatch". Seu perfil é exibido com as informações esperadas.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    |    3   segundos                         |
| 2       | SIM             | 3                    |    5  segundos                          |
| 3       | SIM             | 4                    |    3     segundos                       |
|  |  |  |  |
| **Média**     | 100%           |       4         |   3,66                              |
| **Tempo para conclusão pelo especialista** | --- | - | ------------ |


    Comentários dos usuários: melhorar pesquisa 

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



