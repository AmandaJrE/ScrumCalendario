/**
 * Aqui definimos o objeto viewController.
 * Este objeto atua como um "conjunto" de atributos,
 * como uma classe que não precisa ser instanciada,
 * como uma classe estatica sem nome.
 *
 * Este objeto conterá as funções reponsáveis pelo funcionamento da parte
 * visual do calendário.
 */
let viewController = {
  /**
   * A função init é uma facilitadora. Serve para definir
   * os eventHandlers nos elementos, como cliques de botões, e
   * definir valores inicias, funções padrões, etc.
   *
   * Esta função será chamada no app.js quando associarmos
   * este viewController a um Controller de regra de negócio.
   *
   * Como exemplo, a função utiliza o querySelector para pegar o elemento
   * com classe 'day-item' e atribuir ao clique neste item a função
   * _dayItemClick que exibe uma mensagem.
   *
   * o "this" é relativo ao 'viewController', é uma forma de referenciar o
   * próprio escopo do item que está sendo trabalho. E o bind no final garante que,
   * quando a função for executada, dentro da função, o "this" seja correspodente também
   * ao viewController, e não a função __init.
   */
  __init() {
    document.querySelector(".day-item").onclick = this._dayItemClick.bind(this);
  },

  /**
   * Esta função é responsável por "responder visualmente"
   * ao clique na tarefa diária. O alert é equivalente a uma mudança
   * visual, como por exemplo alterar a cor de um botão, exibir um campo, etc.
   *
   * Logo após isso, ela chama a função de callback, que é a função que liga
   * o clique do botão com o Controller da regra de negócio.
   * Essa função é definida pelo app.js.
   *
    @param {click} clickEvent 
  _dayItemClick(clickEvent) {
    let clickedDayItem = clickEvent.currentTarget;
    clickedDayItem.style.backgroundColor = "pink";
    alert("A tarefa foi clicada.");
    this._dayItemClickCallBack(clickedDayItem.getAttribute("tarefa-id"));
  },

  /**
   * Função em branco para ser sobrescrita.
   */
  _dayItemClickCallBack() { },
  onDayItemClick(newFunction) {
    this._dayItemClickCallBack = newFunction;
  },
};

/**
 * Neste trecho de código definimos o atributo "viewController"
 * no 'document'. Como este código é importado pelo iframe do calendário,
 * o 'document' é o HTML que está dentro do iFrame. Ou seja,
 * 'document' neste caso é "como se fosse" o index.html da pasta "calendar".
 * Isso previne erros, pois dessa forma não afetamos os
 * 'documents' dos outros componentes, previne sobrescrita de
 * valores, bugs, e etc.
 */
document.viewController = viewController;
