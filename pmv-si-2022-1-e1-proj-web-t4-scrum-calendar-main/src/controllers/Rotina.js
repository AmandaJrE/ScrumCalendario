import Storage from "../lib/storage.js";

export class Rotina {
  validaDadosRotina(dados) {
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
    descricao: () => true,
    nome: (value) => !!value,
    rotineDateEnd: (value) => !!value,
    rotineDateIni: (value) => !!value,
    rotineTimeEnd: (value) => !!value,
    rotineTimeIni: (value) => !!value,
  };

  _errorMsg = {
    descricao: "",
    nome: "O Nome não pode estar em branco!",
    rotineDateEnd: "Data/Hora de fim não podem estar em branco!",
    rotineTimeEnd: "Data/Hora de fim não podem estar em branco!",
    rotineDateIni: "Data/Hora de inicio não podem estar em branco!",
    rotineTimeIni: "Data/Hora de inicio não podem estar em branco!",
  };

  salvaRotina(dados) {
    if (this.validaDadosRotina(dados)) {
      let rotinas = Storage.getItem("rotinas");
      if (!rotinas) rotinas = [];

      let indexRotinaAtual = rotinas.findIndex(function (prj) {
        return (prj.nome = dados.nome);
      });

      if (indexRotinaAtual == -1) rotinas.push(dados);
      else Object.assign(rotinas[indexRotinaAtual], dados);

      Storage.saveItem("rotinas", rotinas);

      return true;
    } else return false;
  }
}
