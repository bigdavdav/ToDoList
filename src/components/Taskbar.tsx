import { PlusCircleIcon } from '@phosphor-icons/react'
import styles from './Taskbar.module.css'
import { useState, type ChangeEvent } from 'react';

interface TaskbarProperties {
  addTask(taskToAdd: string): void;
  taskAmount: number,
  tasksCompleted: number,
}

export function Taskbar({ addTask, taskAmount, tasksCompleted }: TaskbarProperties) {
  const [taskbarText, setTaskbarText] = useState('')

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskbarText(event.target.value)
  }

  function addingTask() {
    addTask(taskbarText)
    setTaskbarText('')
  }

  return (
    <section>
      <div className={ styles.taskbarContainer }>
        <input 
          className={ styles.input } 
          type="text" 
          placeholder='Adicione uma nova tarefa' 
          onChange={ handleTextChange }
          value={ taskbarText }
        />

        <button className={ styles.button } onClick={ addingTask } disabled={ taskbarText.length == 0 ? true : false }>Criar <PlusCircleIcon /></button>
      </div>

      <div className={ styles.tasksInfo }>
        <p className={ styles.tasksCreated }>
          Tarefas Criadas
          <span>{ taskAmount }</span>
        </p>
        <p className={ styles.tasksCompleted }>
          Tarefas Concluídas
          <span>{ taskAmount == 0 ? tasksCompleted : `${tasksCompleted} de ${taskAmount}` }</span>
        </p>
      </div>
    </section>
  )
}