import { useState } from 'react';
import { Check, TrashIcon } from '@phosphor-icons/react'

import styles from './TaskListing.module.css'

interface TaskListingProperties {
  description: string;
  complete?: boolean;
  completeTask(completionStatus: boolean): void;
  deleteTask(taskToDelete: string): void;
}

export function TaskListing({ description, complete, deleteTask, completeTask }: TaskListingProperties) {
  const [completeValue, setCompleteValue] = useState(complete ? complete : false)

  function handleTaskCompletion() {
    setCompleteValue(!completeValue)
    completeTask(completeValue)
  }

  function deletingTask() {
    if ( completeValue == true ) {
      completeTask(completeValue)
    }
    deleteTask(description)
  }

  return (
    <div className={ `${styles.listingContainer} ${ completeValue ? styles.complete : '' }` }>
      <button className={ styles.checkmark } onClick={ handleTaskCompletion }>
        <Check size={14} weight="bold" />
      </button>
      <p>{ description }</p>
      <button className={ styles.delete } onClick={ deletingTask }>
        <TrashIcon size={16}/>
      </button>
    </div>
  )
}