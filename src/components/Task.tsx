import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Task.module.css";

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
    <>
      <button onClick={handleCheckTask} title="marcar task">
        <ThumbsUp size={24} />
      </button>

      <div>{task.id.toString()}</div>
      <div>{task.nome}</div>
      <div>{task.regStatus ? "true" : "false"}</div>

      <button onClick={handleDeleteTask} title="Deletar task">
        <Trash size={24} />
      </button>
    </>
  );
}
