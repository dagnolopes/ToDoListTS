import style from './ResumoTask.module.css';

interface Task {
  id: Number;
  nome: String;
  regStatus: Boolean;
}

interface TaskProps {
  lisTask : Task[];
}

export function ResumoTask({ lisTask }: TaskProps){
  return (
    <>
      <div>Tarefas Criadas {lisTask.length}</div>
      <div>Concluidas {lisTask.length}</div>
    </>
  );

}