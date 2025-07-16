import { Header } from './components/Header'
import { Taskbar } from './components/Taskbar'
import { TaskListing } from './components/TaskListing'

import { useState } from 'react'
import { ClipboardIcon } from '@phosphor-icons/react'

import styles from './App.module.css'

export function App() {
  const [tasks, setTasks] = useState([
    {
      taskDescription: "blahblahbalh",
      completionStatus: false,
    },
    {
      taskDescription: "blahblahfdsfabalh",
      completionStatus: true,
    }
  ])

  const [tasksCompleted, setTasksCompleted] = useState(findAmountOfTasksCompleted())

  const emptyContainerMessage = () => {
    return (
      <div className={ styles.emptyMessage }>
        <ClipboardIcon />
        <b>Você ainda não tem tarefas cadastradas</b>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    )
  }

  function findAmountOfTasksCompleted() {
    let amount = 0
    tasks.map(task => {
      if ( task.completionStatus == true ) {
        amount += 1
      }
    })

    return amount
  }

  function handleAddingTask(taskToAdd: string) {
    setTasks([...tasks, {
      taskDescription: taskToAdd,
      completionStatus: false,
    }])

  }
  
  function handleDeleteTask(taskToDelete: string) {
    const newList = tasks.filter(task => {
      return task.taskDescription != taskToDelete

    })

    setTasks(newList)
  }

  function handleCompletingTasks(completionStatus: boolean) {
    if ( completionStatus == true ) {
      setTasksCompleted(tasksCompleted - 1)
    } else if ( completionStatus == false ) {
      setTasksCompleted(tasksCompleted + 1)
    }
  }

  console.log(emptyContainerMessage)

  return (
    <>
      <Header />
      <main className={ styles.mainContainer }>
        <Taskbar 
          addTask={ handleAddingTask }
          taskAmount={ tasks.length }
          tasksCompleted={ tasksCompleted }
        />
        {tasks.map(task => (
          <TaskListing 
            description={ task.taskDescription }
            complete={ task.completionStatus }
            completeTask={ handleCompletingTasks }
            key={ task.taskDescription }
            deleteTask={ handleDeleteTask }
          />
        ))}
        {
          (tasks.length == 0) && (
            <div className={ styles.emptyMessage }>
              <ClipboardIcon size={56} className={styles.clipboardIcon} />
              <b>Você ainda não tem tarefas cadastradas</b>
              <p>Crie tarefas e organize seus itens a fazer</p>
             </div>
          )
        }
      </main>
    </>
  )
}
