import { Calendario } from "./controllers/Calendario.js";
import { Projeto } from "./controllers/Projeto.js";
import { Rotina } from "./controllers/Rotina.js";
import { Evento } from "./controllers/Evento.js";

window.onload = function () {
  /**
   * Este código serve como "addEventListener" para o load
   * do iframe. É necessário verificar o "readyState" do iframe
   * pois o iframe pode ter sido carregado do cache, e isso não dispararia
   * o evento de load.
   *
   * Caso o "readyState" for igual a "complete", significa que o carregamento já aconteceu.
   * Sendo assim, a gente somente executa a função que deveria ser executada ao carregar
   * o iframe.
   *
   * Caso o iframe não tenha sido carregado, ou seja, readyState diferente de "complete",
   * a gente define a função no listener "onload". O conteudo de "onload" é executado
   * automaticamente pelo navegador.
   */
  function onIFrameLoad(iFrameElement, callbackFunction) {
    if (iFrameElement.contentDocument.readyState == "complete") {
      callbackFunction(iFrameElement);
    } else
      iFrameElement.onload = function (event) {
        onLoadCalendarioIFrame(event.target);
      };
  }

  /**
   * Essa função é um conjunto de instruções que devem ser executadas
   * quando o iframe do calendário carregar. Podemos usar esse bloco de código
   * para associar as ações dos botões às ações do Controller de regra de negócio,
   * por exemplo. Podemos também definir rotinas padrões para serem executadas pelo
   * controlador da parte visual do calendário.
   *
   * @param {HTMLElement} calendarioIframe - elemento html do iframe carregado.
   */
  function onLoadCalendarioIFrame(calendarioIframe) {
    let calendarioController = new Calendario();
    /**
     * Esta linha de código acessa o 'document' do iframe filho, para
     * acessar o viewController que foi definido no arquivo calendar.js.
     */
    let calendarioView = calendarioIframe.contentDocument.viewController;

    // Função iniciliazadora
    calendarioView.__init();
    calendarioView.onDayItemClick(function (tarefaId) {
      calendarioController.marcarTarefa(tarefaId);
    });
  }

  function manageAddButtonClick(selectedMode, modalView) {
    let formAddIframe = modalView.getModalReference("#add-project-form-iframe");
    let formAddView = formAddIframe.contentDocument.viewController;
    formAddView.changeMode(selectedMode);

    let projectModalIframe = modalView.showModal("#add-project-form-iframe");
    projectModalIframe.contentDocument.viewController.__init();
    switch (selectedMode) {
      case "projeto":
        handleProjetoForm(
          projectModalIframe.contentDocument.viewController,
          modalView
        );
        break;
      case "rotina":
        handleRotinaForm(
          projectModalIframe.contentDocument.viewController,
          modalView
        );
        break;
      case "evento":
        handleEventoForm(
          projectModalIframe.contentDocument.viewController,
          modalView
        );
        break;

      default:
        break;
    }
  }

  function handleRotinaForm(formView, modalView, data = {}) {
    let rotinaController = new Rotina();

    formView.setData(data);
    formView.onClickButton(function (btn) {
      switch (btn.id) {
        case "btn-salvar":
          if (rotinaController.salvaRotina(formView.getData())) {
            modalView.hideModal();
            alert("Rotina Salva com Sucesso!");
          }
          break;
        case "btn-cancel":
          modalView.hideModal();
          break;

        case "btn-proximo":
          formView.changeMode("rotina-2");
          formView.changeWindowLabel(formView.getFieldValue("#nomeForm"));
          break;
        case "btn-anterior":
          formView.changeMode("rotina");
          break;

        default:
          break;
      }
    });
  }

  function handleEventoForm(formView, modalView, data = {}) {
    let eventoController = new Evento();

    formView.setData(data);
    formView.onClickButton(function (btn) {
      switch (btn.id) {
        case "btn-salvar":
          if (eventoController.salvaEvento(formView.getData())) {
            modalView.hideModal();
            alert("Evento Salvo com Sucesso!");
          }
          break;
        case "btn-cancel":
          modalView.hideModal();
          break;

        default:
          break;
      }
    });
  }

  function handleProjetoForm(projetoFormView, modalView, data = {}) {
    let projetoController = new Projeto();

    projetoFormView.setData(data);
    projetoFormView.onClickButton(function (btn) {
      switch (btn.id) {
        case "btn-proximo":
          projetoFormView.changeMode("projeto-2");
          projetoFormView.changeWindowLabel(
            projetoFormView.getFieldValue("#nomeForm")
          );
          break;
        case "btn-salvar":
          if (projetoController.salvaProjeto(projetoFormView.getData())) {
            modalView.hideModal();
            alert("Projeto Salvo com Sucesso!");
            let projetoTasks = modalView.showModal("#add-project-tasks-iframe");
            projetoTasks.contentDocument.viewController.__init();
            handleEntregaSemanalForm(
              projetoTasks.contentDocument.viewController,
              modalView,
              data
            );
          }
          break;
        case "btn-anterior":
          projetoFormView.changeMode("projeto");
          break;
        case "btn-cancel":
          modalView.hideModal();
          break;

        default:
          break;
      }
    });
  }

  function handleEntregaSemanalForm(formView, modalView, data = {}) {
    formView.onClickButton(function (btn) {
      switch (btn.id) {
        case "btn-next":
          formView.openSecPage();
          break;
        case "btn-save":
          break;
        case "btn-prev":
          formView.changePage(1);
          break;
        case "btn-cancel":
          modalView.hideModal();
          break;

        default:
          break;
      }
    });
  }

  /**
   * Esta chamada de função serve como "addEventListener" de
   * onload no iframe. Define uma função a ser chamada quando
   * o iframe carrega.
   */
  onIFrameLoad(
    document.querySelector("#calendar-iframe"),
    onLoadCalendarioIFrame
  );

  onIFrameLoad(document.querySelector("#modal-iframe"), function (modalIframe) {
    let modalView = modalIframe.contentDocument.viewController;
    modalView.__init(modalIframe);

    onIFrameLoad(document.querySelector("#menu-iframe"), function (menuIframe) {
      let menuView = menuIframe.contentDocument.viewController;
      menuView.__init(menuIframe);
      menuView.onAddClick(function () {
        let addBtnIframe = modalView.showModal("#add-buttons-iframe");
        let addBtnView = addBtnIframe.contentDocument.viewController;
        addBtnView.__init();
        addBtnView.onClickButton(function (btn) {
          manageAddButtonClick(btn.name, modalView);
        });
      });
    });
  });
}.bind(this);
