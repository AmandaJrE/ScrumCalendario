import Storage from "../lib/storage.js";

export class Projeto {
  validaDadosProjeto(dados) {
    let result = true;
    Object.keys(dados).forEach(
      function (key) {
        if (this._validators[key] && !this._validators[key](dados[key])) {
          result = false;
          alert(this._errorMsg[key]);
        }
      }.bind(this)
    );

    return result;
  }

  _validators = {
    autor: function (value) {
      return true;
    },
    data: function (value) {
      return true;
    },
    descricao: function (value) {
      return true;
    },
    nome: function (value) {
      return !!value;
    },
    prioridade: function (value) {
      return value > 0 && value < 11;
    },
    tempoAlocado: function (value) {
      return value > 0 && value < 25;
    },
  };

  _errorMsg = {
    autor: "",
    data: "",
    descricao: "",
    nome: "O Nome não pode estar em branco!",
    prioridade: "A prioridade deve estar entre 1 e 10!",
    tempoAlocado: "O tempo deve estar entre 1 e 24!",
  };

  salvaProjeto(dados) {
    if (this.validaDadosProjeto(dados)) {
      let projetos = Storage.getItem("projetos");
      if (!projetos) projetos = [];

      let indexProjetoAtual = projetos.findIndex(function (prj) {
        return (prj.nome = dados.nome);
      });

      if (indexProjetoAtual == -1) projetos.push(dados);
      else Object.assign(projetos[indexProjetoAtual], dados);

      Storage.saveItem("projetos", projetos);

      return true;
    } else return false;
  }
}
