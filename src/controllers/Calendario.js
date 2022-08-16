import Storage from "../lib/storage.js";

export class Calendario {
  /**
   * Esta função é ilustrativa, para demonstrar que o controller da regra de negócio
   * não precisa conhecer nada sobre a parte visual. Ele apenas recebe um id de tarefa
   * para marcar como completa.
   *
   * Desta forma, quem estiver trabalhando nos controllers pode trabalhar de forma
   * muito mais independente.
   *
   * @param {string} tarefaId
   */
  marcarTarefa(tarefaId) {
    Storage.saveItem("tarefa", {
      tarefaId: tarefaId,
      marcada: 1,
    });
  }
}
