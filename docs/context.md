# Introdução

A indústria da música, com sua vasta gama de gêneros, estilos e talentos, tem sido historicamente reconhecida como um campo vibrante e criativo. No entanto, por trás dos holofotes e dos sucessos estrondosos, muitos artistas enfrentam uma batalha árdua para alcançar reconhecimento e sustento financeiro em um mercado altamente competitivo e muitas vezes desigual. Esse é especialmente o caso para os artistas independentes, cuja jornada rumo ao estrelato é frequentemente obstruída por uma série de desafios e barreiras que vão desde a falta de recursos financeiros até a dificuldade de acesso aos canais de distribuição e promoção. Um exemplo dessa situação seria a cantora Nalla (@nallaoficial), que performou durante muito tempo seu mix de canções na Av. Paulista e mesmo assim ainda precisou recorrer a outras fontes de renda.

A tecnologia nos trouxe a facilidade e praticidade que desencadeou a transição dos discos de vinil para plataformas de streaming, mudando assim a forma como consumimos música e permitindo acesso a qualquer hora e lugar. De acordo com o "Pró-Música", uma entidade que representa as principais gravadoras do Brasil, registrou um crescimento de 12,6% no primeiro semestre de 2023, comparando com o mesmo período do ano anterior. Com isso, o setor alcançou um faturamento de R$ 1,191 bilhão no período, considerando apenas as receitas nos formatos digital e físico. O streaming foi o principal responsável por elevar o mercado musical no Brasil, sendo 99,2% das receitas, subindo 12,4% e atingindo R$ 1,181 bilhão em 2023.

Com base nessa pesquisa, decidimos criar uma solução digital que priorize dar visibilidade a artistas que estão no início de suas carreiras, permitindo que os usuários os descubram e criem uma nova relação de fidelização. Sendo assim, desenvolvemos uma aplicação web que filtra os gostos musicais de cada usuário e os encaminha para cantores e/ou bandas de acordo com suas preferências pessoais.

Fontes:

" https://pro-musicabr.org.br/2023/09/25/mercado-fonografico-brasileiro-fatura-r-12-bi-primeiro-semestre-de-2023-considerando-receitas-nos-formatos-digital-e-fisico/ "

" https://laboratoriodejo2021.medium.com/artistas-independentes-as-dificuldades-de-viver-da-arte-na-cidade-de-s%C3%A3o-paulo-149420acdc79 "

" https://jornalismorio.espm.br/geral/artistas-independentes-dificuldades-em-viver-de-musica-no-brasil/ "

" https://medium.com/portal-expresso/os-desafios-do-artista-independente-57c33e8bde08 "



## Problema

 Rádios, gravadoras, televisão e até mesmo as redes sociais tendem a divulgar apenas artistas já consagrados no gosto musical do brasileiro. Desse modo, artistas tidos como "underground" ficam obscurecidos ante a esses que já dominam o cenário musical. Nesse sentido, muitas vezes torna-se difícil ter acesso a novas bandas e a novos cantores.
 Deixando, portanto, o mercado saturado com os mesmos cantores e bandas que permeiam o cotidiano do ouvinte.

 Assim sendo, nem o público tem acesso a novas bandas e ritmos musicais e nem os artistas conseguem divulgar seu trabalho.


## Objetivos

O principal objetivo do projeto MusicMatch é desenvolver um software que faça com que o usuário encontre artistas que estão fora das grandes mídias utilizando como base o seu gosto musical. 
Destacam-se os principais objetivos específicos:

- Dar visibilidade para estes artistas, colocando o link das suas músicas na nossa plataforma;
- O usuário atribue comentários e avaliações sobre as músicas e artistas;
- Conhecer o gosto musical do público para recomendar determinados artistas para eles usando o questionário fornecido na sua etapa de cadastro do cliente;
- Exibir agenda de eventos dos artistas presentes na aplicação.


## Justificativa

Segundo o Jornal OTEMPO, o faturamento do mercado da música brasileiro em 2022 ultrapassou o marco de R$2,1Bilhões. Um fator problema é que esse montante se localiza muito centralizado em artistas engajados pela mídia e pouco distribuído para novas pessoas que sonham em entrar no mundo da música, dificultando essa expansão.

Estima-se que, no Brasil cerca de 2487 bandas existentes buscam visibilidade para se consolidarem no mercado da música. Logo, a escolha desta aplicação se deu principalmente em virtude da importância de gerar tal visibilidade para artistas musicais prejudicados pela falta de recursos financeiros e pela ausência de conexões importantes que os possibilitariam serem promovidos na alta mídia. Isso ocorreria por meio da apresentação dos seus trabalhos e canções, diretamente aos ouvintes de diversos gêneros musicais, que tenham interesse em descobrir novos cantores dentro de sua preferência musical.

As motivações para um cliente acessar nossa plataforma incluem, por exemplo, a exploração de novas músicas e artistas, possibilitando ao ouvinte diversificar suas escolhas dentro de seu próprio gosto musical por meio de nosso site.



A imagem a seguir mostra uma pesquisa realizada pelo IBGE, no ano de 2010. Observa-se o número de bandas a cada 100mil habitantes nos estados brasileiros.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t5-musicmatch/assets/161328993/944a711e-4c1d-42f4-b9b9-9df91d88f1c4)

fontes: https://www.otempo.com.br/entretenimento/mercado-de-musica-no-brasil-gera-r-2-1-bilhoes-e-dobra-faturamento-1.2638926
https://www.facebook.com/MuseuDaMusicaDeMariana/photos/a.350367231688306/949438531781170/?type=3&locale=pt_BR



## Público-Alvo

O público-alvo é composto por pessoas que apreciam a música em suas diversas formas, indo desde ouvintes até artistas independentes que buscam uma oportunidade de se destacar. Essa plataforma visa atingir amantes da música que estão dispostos a experimentar novas sonoridades, oferecendo-lhes uma alternativa para explorar e descobrir artistas promissores. Do outro lado, queremos atingir também músicos "indie", ou seja, que não possuem contrato com gravadoras para que possam divulgar seus trabalhos. 

<a href='https://www.folhape.com.br/cultura/spotify-sertanejo-funk-e-arrocha-foram-os-generos-mais-escutados-no/263222/'>Segundo dados</a> divulgados pela plaforma de streaming musical Spotify, no Brasil o que mais se escuta em termos de gêneros musicais é: (Dados referentes ao ano de 2023)

1.Sertanejo Pop;
2.Sertanejo Universitário;
3.Funk Carioca;
4.Sertanejo;
5.Arrocha;
6.Pop;
7.Dance Pop;
8.Funk Mtg;
9.Funk Ostentação;
10.Pagode. 

Apesar de ser algo bem volátil e que pode mudar com base na região, faixa socio-econômica e idade, esse recorte nos mostra que outros gêneros fora do mainstream acabam por serem totalmente suprimidos se comparados com os gêneros mais "midiáticos" (Sertanejo, funk e suas variações). Nosso papel aqui será atingir tanto bandas/artistas que queiram se consolidar no mercado mas que atualmente não conseguem maneiras efetivas para divulgação de conteúdo, bem como entusiastas da música que desejam sair dos "mais ouvidos" e queiram escutar sonoridades diferentes do que se escuta nas rádios e na grande mídia. 
