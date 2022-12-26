import { CheckCircle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface Task {
  id: Number;
  nome: String;
  regStatus: Boolean;
}

interface TaskProps {
  task: Task;
  onDeleteTask: (task: Task) => void;
  onCheckTask: (task: Task) => void;
}

export function Task({ task, onDeleteTask, onCheckTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }
  function handleCheckTask() {
    onCheckTask(task);
  }

  return (
    <div className={styles.task}>
      {task.regStatus === false ? (
        <button onClick={handleCheckTask} title="marcar task">
          <CheckCircle size={24} color="#c6c3c3" weight="fill" />
        </button>
      ) : (
        <button onClick={handleCheckTask} title="marcar task">
          <CheckCircle size={24} color="#09b315" weight="fill" />
        </button>
      )}

      {task.regStatus === false ? (
        <div className={styles.taskselecionada}>
          <p>{task.nome}</p>{" "}
        </div>
      ) : (
        <div className={styles.tasknaoselecionada}>
          <p> {task.nome}</p>
        </div>
      )}

      <button onClick={handleDeleteTask} title="Deletar task">
        <Trash size={24} />
      </button>
    </div>
  );
}
