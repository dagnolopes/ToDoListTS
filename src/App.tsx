import { useState } from "react";
import style from "./App.module.css";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { ResumoTask } from "./components/ResumoTask";
import { Task } from "./components/Task";

import "./global.css";

interface Task {
  id: Number;
  nome: String;
  regStatus: Boolean;
}

export function App() {
  const [lisTask, setLisTask] = useState<Task[]>([]);

  function addTask(task: Task) {
    setLisTask((prevlisTask) => [
      ...prevlisTask,
      { ...task, id: prevlisTask.length + 1 },
    ]);
  }

  function deleteTask(taskDelete: Task) {
    const tasksWithoutDeletedOne = lisTask.filter((task) => {
      return task.id !== taskDelete.id;
    });
    setLisTask(tasksWithoutDeletedOne);
  }

  function checkTask(taskCheck: Task) {
    const tasksOne = lisTask.filter((task) => {
      return task.id === taskCheck.id;
    });

    const tasksWithoutDeletedOne = lisTask.filter((task) => {
      return task.id !== taskCheck.id;
    });
    tasksOne[0].regStatus = !tasksOne[0].regStatus;

    let listA = [...tasksWithoutDeletedOne, ...tasksOne];

    let listB = listA.sort((a, b) => {
      return a.id - b.id;
    });

    setLisTask(listB);

    //setLisTask(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <AddTask onAddTask={addTask} />

        <ResumoTask lisTask={lisTask} />

        {lisTask.map((element, index) => {
          return (
            <Task
              key={index}
              task={element}
              onDeleteTask={deleteTask}
              onCheckTask={checkTask}
            />
          );
        })}
      </div>
    </div>
  );
}
