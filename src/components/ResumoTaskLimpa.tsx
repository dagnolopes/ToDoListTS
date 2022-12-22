import { PencilLine } from 'phosphor-react';
import styles from './ResumoTaskLimpa.module.css';

import imgEmpty from "../assets/imgEmpty.svg";

export function ResumoTaskLimpa(){
  return (
    <div className={styles.resumotasklimpa}>      
      <img src={imgEmpty} alt="imgEmpty" />
      <div className={styles.masglimpa}>Você ainda não tem tarefas cadastradas</div>
      <div className={styles.masglimpa}>Crie tarefas e organize seus itens a fazer</div>
    </div>
  );

}