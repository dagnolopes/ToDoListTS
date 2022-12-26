import { Divide } from "phosphor-react";
import styles from "./ResumoTask.module.css";

import { ResumoTaskLimpa } from "./ResumoTaskLimpa";

interface Task {
  id: Number;
  nome: String;
  regStatus: Boolean;
}

interface TaskProps {
  lisTask: Task[];
}

export function ResumoTask({ lisTask }: TaskProps) {
  function concluido() {
    const somar = lisTask.reduce((total, task) => {
      if (task.regStatus === true) return (total = total + 1);
      else return total;
    }, 0);
    return somar;
  }

  return (
    <>
      <div className={styles.resumotask}>
        <div className={styles.tasklidas}>
          {" "}
          Tarefas Criadas{" "}
          <span className={styles.badge}> {lisTask.length} </span>
        </div>
        <div className={styles.taskconcluidas}>
          Concluídas{" "}
          <span className={styles.badge}>
            {" "}
            {lisTask.length} de {concluido()}{" "}
          </span>
        </div>
      </div>

      {lisTask.length === 0 && (
        <>
          <br />
          <br />
          <hr />
          <div className={styles.resumotasklimpa}>
            <ResumoTaskLimpa />
          </div>
        </>
      )}
    </>
  );
}
