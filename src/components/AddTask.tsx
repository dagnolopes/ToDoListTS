import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { PlusCircle } from "phosphor-react";

import styles from "./AddTask.module.css";

interface Task {
  id: Number;
  nome: String;
  regStatus: Boolean;
}

interface TaskProps {
  onAddTask: (task: Task) => void;
}

export function AddTask({ onAddTask }: TaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTasck(event: FormEvent) {
    event.preventDefault();
    const obj = {
      id: 0,
      nome: newTaskText,
      regStatus: false,
    };
    onAddTask(obj);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio");
  }

  const isNewTaskEmpty = newTaskText.length <= 0;

  return (
    <div className={styles.addtask}>
      <form onSubmit={handleCreateNewTasck} className={styles.addtaskForm}>
        <textarea
          name="comment"
          value={newTaskText}
          placeholder="Deixe um comentário"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <button disabled={isNewTaskEmpty} type="submit">
          <p>Criar</p> <PlusCircle className={styles.pluscircle} size={20} />
        </button>
      </form>
    </div>
  );
}
