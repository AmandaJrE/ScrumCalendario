import Storage from "../lib/storage.js";

export class Evento {
  validaDadosEvento(dados) {
    console.log(dados);
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
    descricao: function (value) {
      return true;
    },
    nome: function (value) {
      return !!value;
    },
  };

  _errorMsg = {
    descricao: "",
    nome: "O Nome não pode estar em branco!",
  };

  salvaEvento(dados) {
    if (this.validaDadosEvento(dados)) {
      let eventos = Storage.getItem("eventos");
      if (!eventos) eventos = [];

      let indexEventoAtual = eventos.findIndex(function (prj) {
        return (prj.nome = dados.nome);
      });

      if (indexEventoAtual == -1) eventos.push(dados);
      else Object.assign(eventos[indexEventoAtual], dados);

      Storage.saveItem("eventos", eventos);

      return true;
    } else return false;
  }
}
