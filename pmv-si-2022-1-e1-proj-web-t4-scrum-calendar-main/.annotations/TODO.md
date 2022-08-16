# TODO 
## Lista de pendencias SCRUM CALENDAR
### Separado por MVC
--------------------------------

## **View** - Parte Visual

### **Calendario** (src/components/calendar):
  - Internamente, no viewController do calendário, criar um atributo "cards" ou "cardList" que armazena um objeto contendo o que deve ser exibido em cada dia.
  - Implementar uma função "createCard" que permite a criação de um card em um dia do calendário, de forma dinâmica, com um tamanho dinâmico, em um dia especígico do calendário. Além disso, a cor do card deve ser dinâmica, para indicar se é uma tarefa, evento, rotina, etc.
  - Implementar a função "removeCard" que permite a remoção de um card.
  - Implementar a função "setCards" que permite passar para o calendário um conjunto de dados contendo todos os cards para serem carregados de uma vez.
  - Implementar a função que responde ao clique no card (como feito no ex.)
  - Criar função que aplique filtros. Essa função deve receber a string do tipo de card filtrado, e exibir no calendário somente o que foi filtrado.


### **Menu** (src/components/menu):
  - Criar os listeners para as ações dos botões e próximo e anterior
  - Criar listeners para clique nas checkbox do filtro

### **Modal** (src/components/modal):
  - Criar funções que permitam trocar a tela atual do modal. (por ex, está exibindo o cadastro do nome do projeto e vai passar a exibir as tarefas semanais)

### Demais telas de cadastro:
 - Seguir o exemplo do que acontece no modal para permitir um fluxo de execução, ou seja, passar de uma tela para outra compartilhando a informação entre elas.



## **Controllers** - Regra de Negócio:

### Calendario:
#### A ideia deste controller é, além de fazer a ponte entre a parte visual e a parte lógica do calendário, conhecer as "regras" do calendário", como por exemplo, ele deve conhecer a regra para quais cards devem ser buscados do localStorage, diferente do view que somente manda exibir os cards.

- Criar uma variável que armazena um array de objetos. Esse array de objetos é um array contendo os itens de cada dia, e sua devida duração.
- Criar uma funcao responsável por exibir esses itens. Essa função deve receber como parametro a função da view para definir os cards. A ideia é que o controlador de regra de negócio mande o view setar aquele conteudo.
- Criar uma função que busca os cards no localStorage/
- Criar uma função que mude a semana. Esta função deve buscar no localStorage todos os cards, filtrar os que são daquela semana em específico, e mandar a view exibir.


### Projeto:
#### A ideia deste controller é manipular todo o cadastro do projeto. Ele deve receber da parte visual os dados que o usuário cadastrou nos formulários e aplicar toda a regra de negócio necessária para salvar.  

- Criar uma função que verifica os dados do projeto conforme as regras definidas na documentação.
- Criar função que adiciona um novo projeto caso passe na verificação.
- Usar as mesmas telas de adição para fazer edição do projeto (em conjunto com o view das telas de Projeto)
- Permitir a exclusão do projeto.
- Ao clicar em um card no calendario, deve permitir editar o projeto em questão. Fazer isso em conjunto com o view de calendar, e os views do projeto.

### Evento e Rotina:
 - Seguir o que foi feito no Projeto porem para Evento e Rotina

## **Services** - Utilitários Regra de Negócio.
### Neste contexto, os services são utilitarios que auxiliam na execução das regras de negócio. Eles são específicos das funcionalidades, e não das entidades. Ou seja, ao invés de um service para o Calendario, temos um service para a funcionalidade de preencher horários livres do calendario, por ex.
Cada service é um arquivo, como um controller, mas que pode ser usado por mais de um controller e serve apenas àquela funcionalidade.
- PreencherCalendario - Service que recebe uma lista de cards e verificar no localStorage quais os horários livres, e preenche para cada card um horário livre no horário do usuário.

## **Libs** - Utilitários gerais
### Libs serão os utilitários que não conhecem a regra de negócio. Eles devem fazer propósitos gerais, como o lib de storage que pode manipular qualquer dado em Javascript. 
- Storage - Manipulação de dados usando o localStorage. Principal utilidade é a conversão e desconversão para string usando JSON.stringify e JSON.parse.
- DateTime - Manipulação de data e hora usando a biblioteca moment() - A principal idéia deste lib é agrupar funções do moment (que já é uma biblioteca) para usos comuns do calendario, como por exemplo, achar um horário vago dentro de uma serie de intervalos.