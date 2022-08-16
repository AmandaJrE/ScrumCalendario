# Tema

O Scrum Calendar é um gestor de projetos pessoais. Ele ajuda o usuário a gerir projetos pessoais e conciliar eles com seus hábitos e atividades rotineiras. O sistema faz isso por meio do cadastro de eventos/tarefas em um calendário (similar ao Google Calendar), e esses itens são dividos e alocados conforme o tempo disponível do usuário. Para auxiliar na melhor organização, o Scrum Calendar se baseia na metodologia SCRUM e usa alguns de seus conceitos para gerir as tarefas dos projetos pessoais, bem como a organização de prazos e entregas desse projeto.

### Fluxo Principal De Utilização

- O usuário cadastra um Projeto, que é uma meta, um "produto final" a ser entregue, ou produzido.
  - O usuário cadastra dados do projeto, como data limite, horario de trabalho, nome, detalhes.  (tela #1)
  - O usuário é instruido a dividir o projeto em tópicos (entrega), tempo de entrega de cada tópico (sprint). (tela #2) 
  - O usuário é instruido a definir as tarefas por tópico (tasks de cada sprint). (tela #3)
  - O sistema apresenta uma sugestão de alocação das tarefas e tópicos do projeto. (tela #calendario)
- O usuário pode cadastrar rotinas/eventos isolados, que limitam o tempo a ser aplicado a projetos.
- O usuário pode editar/excluir dados de rotinas, projetos, tópicos e tarefas.
- O usuário pode concluir projetos, tópicos e tarefas.


# Documentação Contexto
#### Introdução

A metodologia ágil Scrum é um processo que visa reduzir o tempo de entrega dos produtos, é utilizada em sua maioria por equipes de desenvolvedores com uma meta de projeto em um determinado tempo. O Scrum possui tres pilares que são: transparencia, inspeção e adptação. E tem comprovada eficacia quando a empresa como um todo está alinhada as suas propostas e príncipios.

Diante dessa definição de o que é Scrum, gostariamos de trazer um pouco dessa metodologia ágil para o dia a dia de estudantes e trabalhadores. Traduzindo os conceitos de Sprint, backlog, tasks, e planning e focando em apenas projetos pessoais como por exemplo um plano de estudo para uma prova.

O Scrum Calendar é um gestor de projetos pessoais. Ele ajuda o usuário a gerir projetos pessoais e conciliar eles com seus hábitos e atividades rotineiras. O sistema faz isso por meio do cadastro de eventos/tarefas em um calendário (similar ao Google Calendar), e esses itens são dividos e alocados conforme o tempo disponível do usuário. Para auxiliar na melhor organização, o Scrum Calendar se baseia na metodologia SCRUM e usa alguns de seus conceitos para gerir as tarefas dos projetos pessoais, bem como a organização de prazos e entregas desse projeto.

#### Problemas

Muitas pessoas possuem projetos pessoais do tipo `aprender um idioma`, `fazer uma reforma`, `aprender uma linguagem de programação`,`iniciar um negócio`. Esse projetos geralmente são caracterizados por metas pré estabelecidas (por exemplo, aprender o idioma inglês), e por uma alocação de tempo bem definida, como por exemplo situações onde uma pessoa só pode alocar 1 hora por dia para o projeto. Entretanto, as rotinas e o cotidiano dessas pessoas está cada vez mais corrido, sendo cada vez mais complicado conciliar suas rotinas e seus projetos pessoais. As ferramentas existentes hoje para gerencia de projeto são em sua maioria focadas em projetos empresariais e os organizadores pessoais não oferecem uma gerencia específica para projetos pessoais.

De acordo com o site DevMedia existem alguns erros que são comuns no momento de gerenciar um projeto, e dois dos erros mais comuns são justamente a falta de planejamento e os prazos limitados para a realização do projeto. Esses itens podem ser a diferença entre um projeto bem executado e uma falha, ou até mesmo, de um projeto iniciado ou não.

Referencias:
- Gestão de tempo de baixa qualidade em projetos/rotinas pessoais resulta em baixa produtividade no geral.
- É dificil organizar, sem o uso de uma ferramenta adequada, projetos e rotinas de forma eficiente.
- O conhecimento sobre uma metodologia de organização de projetos como SCRUM não é tão acessível e difundido.

#### Objetivos
Descrever melhor as seguintes frases. Lembrando que o objetivo não deve explicar o porque, e sim o que. Ou seja, por exemplo, não devemos justificar a escolha do SCRUM como método base para gerenciar projetos, só devemos explicitar que vamos ajudar o usuario a se organizar e vamos nos basear no SCRUM para isso.

O sistema busca auxiliar as pessoas em seus planejamentos dos projetos pessoais da forma mais otimizada possivel, utilizando alguns conceitos da metodologia Scrum e conciliando de forma automatica a rotina e as tarefas cotidianas do usuario com o tempo alocado para o projeto.


- Objetivo geral: Desenvolver um sistema web que ajude a solucionar a dificuldade no planejamento e organização dos projetos pessoais. (Objetivo geral do projeto que deve representar o objetivo geral do sistema, ou seja, ajudar o usuário com os projetos pessoais)
- Objetivo específico #1: Desenvolver um sistema que ajude o usuário a gerenciar e conciliar seus projetos pessoais e sua rotina de atividades padrão.
- Objetivo específico #2: Auxiliar o usuário na gerencia dos projetos usando uma metodologia baseado no SCRUM.


#### Justificativa
Descrever o porque escolhemos esse problema e porque achamos que o Scrum calendar é uma boa solução. Nesse caso podemos usar a mesma base que foi usada para descrever os problemas para descrever a justificativa, ou seja, se dissermos que a falta de organização é um problema porque atrapalha a vida do usuário, podemos dizer que a nossa justificativa é tornar a vida do usuário mais produtiva. Nesse ponto também devemos justificar a escolha do SCRUM para metodologia base, e podemos dizer que ele é uma metodologia de produção ágil e nós nos baseamos nele e pegamos seus conceitos para usar no nosso sistema.

#### Publico Alvo
Pessoas que almeijam melhorar a eficiencia e produtividade das rotinas e projetos do dia a dia e que tem *muito contato com tecnologia*.


# Especificação do Projeto
Nesse ponto devemos entrar mais no sistema em si e não no propósito dele ou em porque o Scrum funciona, então podemos usar o parágrafo que está descrito no item "Tema" deste documento por exemplo. Também é importante dar um resumo de como o sistema vai alcançar os objetivos propostos na documentação de contexto, ou seja, por exemplo, "Como o sistema vai usar o scrum para ajudar o usuário?" -> "Ele vai usar os conceitos de sprint, entrega, backlog para ajudar o usuário a dividir o projeto. Isso vai ser feito por meio das telas de cadastro de projeto que serão organizadas de forma sequencial para que o usuário consiga compreender que estamos dividindo o projeto dele em várias metas e tarefas que deverão ser cumpridas ao longo do tempo".

É importante definir aqui os conceito de "projeto", "entregas (tópicos)", "tarefas", "eventos", "rotinas" e outros itens do sistema. Isso pode ser definido no início do documento para que seja usado por todos os itens a seguir, como Persona, Requisito e etc.

### Personas
Pessoas que estejam de acordo com o publico alvo, em sua maioria jovens/adultos e/ou pessoas ligadas de alguma forma a tecnologia (que tenham facilidade de uso).

### História de Usuários
User Cases baseadas no fluxo descrito no inicio do resumo.

### Requisitos
#### Requisitos Funcionais
- Permitir o usuário gerenciar (cadastrar/excluir/editar) rotinas/eventos isolados.
- Permitir o usuario gerenciar projetos.
- Permitir o usuario gerenciar tópicos dentro dos projetos.
- Permitir o usuario gerenciar tarefas dentro dos tópicos.
- Exibir as rotinas/eventos/projetos do usuário numa estrutura de calendario.
- Permitir visualização em dia/semana/mês.
- Permitir usuário cadastrar dados do usuário (nome, resumo, etc).

#### Requisitos Não Funcionais
- O sistema deve ser responsivo.
- O sistema deve rodar totalmente no frontend.
- O sistema deve utilizar o cache do navegador para armazenar os dados.
- O sistema deve se adaptar ao uso por touchscreen (dispositivos móveis).

#### Restrições
- O projeto deverá ser entregue até o final do semestre.
-	Não pode ser desenvolvido um módulo de backend.
-	O sistema não utilizará banco de dados.

###Definições

####
Tarefa: É o que contém dentro de um projeto. São atividades desenvolvidas no cotidiano pelo usuário que ajudará o software a entender a demanda e fazer uma escalonagem do projeto.

Fluxo do projeto: Será definido o cadastro de um projeto, contendo data limite, horário pré-definido e outras características que serão cruciais para manter a qualidade e a otimização do tempo.

Projeto: É nosso objetivo final. A conclusão do projeto levará a conclusão do que foi programado pelo sofware e será pautado em qualidade do prodduto final, entrega, transparência e metodologias ágeis divididas em tópicos. 

Tópico: É como a atividade será desenvolvida. O projeto será disposto em pequenos tópico para que seja feito a tarefa e concluído o projeto. 
Metodologias ágeis: São métodos didáticos que irão manter a gestão do tempo no trabalho e a qualidade da entrega.

SCRUM: Metodologia chave do projeto. O SCRUM, metodologia já consolidada, será a pauta do projeto. 

Alocação do tempo: Otimização do tempo.

Autonomia do usuário: O software dará autonomia para o usuário final de como as tarefas podem ficar dispostas. 

Ciclo: Seria o sprint. É o tempo alocado para cada entrega do projeto. 

Rotina Final: É como o usuário deverá seguir as tarefas. A rotina definirá, então, como poderá ser organizado o projeto para entrega de tarefas que não poderão ser alteradas, definindo o tempo. 

Rotina Incial: É a rotina que já é compreendida no cotidiano para o usuário, essa rotina dará um parâmetro para que o software possa trabalhar.  

Eventos: Os eventos são, a rotina isolada, ou seja, um limitador de tempo onde poderão ser inseridos outros eventos fora a rotina do usuário que irá limitar o tempo da rotina posteriormente, para que o projeto seja entregue em tempo ágil.


