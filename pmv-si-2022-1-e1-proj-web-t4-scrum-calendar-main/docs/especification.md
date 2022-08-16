# Especificações do Projeto

O Scrum Calendar tem como propósito utilizar da metodologia SCRUM para ajudar usuários a organizar melhor seus projetos pessoais, trabalhos, e afazeres no geral. Ele faz isso adotando conceitos de um organizador de agenda comum, mesclados a um gerenciador de projetos. 
Um usuário que necessite utilizar o Scrum Calendar, será "guiado" e "instruido" pelo próprio sistema, de como ele pode transformar seus projetos pessoais e tarefas em etapas de acordo com a metodologia Scrum.
Neste cenário, o sistema apresentará uma forma de utilização sequencial, que guiará o usuário em seu uso fazendo com que no final ele consiga com sucesso cadastrar e dividir seus *projetos* de tal forma, onde existirão entregas semanais constituídas por tarefas divididas no dia a dia.

Na especificação do Projeto Scrum Calendar serão utilizadas algumas ferramentas e técnicas, para que possamos descrever com maior clareza possível os objetivos e os caminhos adotados pelo time de desenvolvimento.
Para mapear as necessidades do usuário foi utilizada a metodologia de Personas, que adota um personagem fictício como alvo do nosso sistema. Com isso poderemos tomar decisões mais claras voltadas ao que deve ser feito e em como poderemos fazer.
Aliado a isso são utilizadas técnicas de especificações conhecidas como Histórias de Usuário, que utilizam as necessidades da Persona e a descrição do projeto para mapear quais as possibilidades o usuário terá dentro do sistema. Essas ações são listadas e limitadas nos Requisitos e Restrições, que servem como guia para as entregas dos desenvolvimentos. Esses itens ajudam a ter uma noção do que o sistema será na prática.

**Para convenção, a palavra "gerenciar" representa o conjunto das ações: cadastrar, ler, atualizar e deletar.

## Personas

Gabriela tem 20 anos, está cursando faculdade de veterinária á 4 meses e trabalhava em uma empresa média de limpeza. Ela pediu pediu demissão pois estava com grandes dificuldades em relacionar o expediente de trabalho com os estudos, projetos e tarefas de faculdade, estava também sentindo falta de um tempo livre para hobbies. Com esses problemas em vista, Gabriela precisa de algo que a auxiliasse na organização e entrega de projetos, visando otimizar seu tempo tanto nos projetos pessoais, quanto nos projetos de faculdade e futuramente em seus projetos profissionais.

Jerônimo tem 47 anos, é casado, possui 3 filhos e ajuda no sustento de sua família graças ao trabalho de pedreiro. Alem das obrigações profissionais como pedreiro ele ainda ajuda a tomar conta dos filhos a noite. Observando que o mercado esta ficando cada vez mais exigente, Jerônimo decidiu iniciar um curso técnico de eletricista. Inoportunamente ele se viu em uma situação onde não tem tempo para planejar seus afazeres o que fez com que a desorganização atrapalhasse no desempenho de seus deveres. Sendo assim ele busca algo que o auxilie a estruturar suas tarefas e cumprir suas metas diárias, o ajudando a ter mais organização e poupar tempo ao realizá-las.

## Histórias de Usuários


Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Como Usuario | Preciso Cadastrar minha Rotina | Fornecer dados de tempo disponível para o projeto |
|Como Usuario | Quero Gerenciar Projetos | Receber um Plano de rotina otimizado para o dia a dia   |
|Como Usuario | Preciso Gerenciar Entregas Semanais | Permitir que o trabalho seja dividido igualmente entre as semanas disponíveis no projeto |
|Como Usuário | Preciso Gerenciar Tarefa(s) | Permitir que a cada semana eu aloque melhor meu tempo nos dias disponíveis |
|Como Usuário | Quero Gerenciar Evento(s) | Limitar o programa de alocar o tempo do evento para o projeto |
|Como Usuário | Quero Visualizar o Projeto em uma estrutura de calendario | Ter uma fácil visão do Projeto |
|Como Usuário | Quero Alternar os modos de Visualização do calendario | Enxergar o projeto com um todo, ou enxergar as proximas entragas |
|Como Usuário | Quero Selecionar a Semana exibida | Enxergar as proximas entregas |
|Como Usuário | Querio aplicar Filtros de exibição | Visualizar os projetos separadamente |


## Requisitos

#### As seguintes definições se aplicam aos termos utilizados no projeto:

SCRUM: Metodologia chave do projeto. O SCRUM, metodologia já consolidada, será a pauta do projeto. 

Projeto: É o objetivo final. A conclusão do projeto levará a conclusão do que foi programado pelo sofware e será pautado em qualidade do produto final, entrega, transparência e metodologias ágeis divididas em tópicos. 

Entregas Semanais: É como a atividade será desenvolvida. O projeto será dividido em Entregas Semanais de forma que o usuário consiga concluir tarefas regulares, as tarefas o guiarão instruindo o mesmo a como realizar cada Entrega Semanal. Similar ao Sprint da metodologia SCRUM.

Tarefa: São atividades desenvolvidas no cotidiano pelo usuário, que tem como função ajudar o software a entender a demanda, e encaixar as atividades dentro das entregas semanais para fazer uma escalonagem do projeto.

Evento(s): Os eventos são acasos, ou seja, incidentes agendados e sem repetição que tem como função limitar o tempo disponível das tarefas, onde poderão ser inseridos atividades fora da rotina do usuário. Ex.: Uma consulta Médica no horário disponível para realizar o projeto.

Rotina: Rotina são os limitadores de tempo das atividades do projeto. Exemplo: O dia a dia do usuário antes de possuir o projeto.


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário gerencie projetos | ALTA | 
|RF-002| Permitir que o usuário gerencie Entregas Semanais dentro dos projetos | ALTA |
|RF-003| Permitir que o usuário gerencie tarefas | ALTA |
|RF-004| Exibir numa estrutura de calendário os projetos, tarefas, rotinas e eventos | ALTA |
|RF-005| Permitir que o usuário gerencie rotinas | MEDIA |
|RF-006| Permitir que o usuário gerencie eventos | MEDIA |
|RF-007| Permitir que o usuário gerencie os dados do usuário | MEDIA |
|RF-008| Permitir a visualização do calendário em semanas | BAIXA |
|RF-009| Permitir alternar entre o(s) Filtro(s) de exibição (Eventos, Rotinas, Projetos) | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| O sistema deve rodar totalmente no frontend (?) | MÉDIA |
|RNF-003| O sistema deve utilizar o cache do navegador para armazenar os dados (?) | MEDIA |
|RNF-004| O sistema deve tratar a utilização por dispositivos touchscreen | BAIXA |
|RNF-005| O sistema deve rodar em um navegador web (PC e dispositivos móveis) | ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                          |
|--|--------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre              |
|02| Não pode ser desenvolvido um módulo de backend                     |
|03| O sistema não utilizará banco de dados                             |
