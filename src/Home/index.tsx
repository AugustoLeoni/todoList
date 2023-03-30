import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Task } from '../components/Task'
import style from './style.module.css'
import '../global.css'

import Logo from '../assets/Logo.png'
import { ChangeEvent, FormEvent, useState } from 'react'

type State = string[]

export default function Home() {
  const [tasksData, setTasksData] = useState<State>([])
  const [newTask, setNewTasks] = useState("")
  const [completeTasks, setCompleteTasks] = useState(0)

  function handleNewTask() {
    if (!newTask) {
      return alert("Preencha o campo para adicioar uma tarefa")
    }
    setTasksData(prevState => [...prevState, newTask])
  }

  function handleDeleteTask(deleted: string) {

    setTasksData(prevState => prevState.filter(title => title !== deleted))
  }

  function handleCompleteTask() {
    setCompleteTasks(completeTasks + 1)
  }
  function handleDescompleteTask() {
    setCompleteTasks(completeTasks - 1)
  }

  return (
    <>
      <header className={style.header}>
        <img src={Logo} alt="Logo do todo" />
      </header>

      <main className={style.main}>
        <div className={style.bar}>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTasks(e.target.value)}
          />
          <Button
            onClick={handleNewTask}
          />
        </div>

        <div className={style.tasks}>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasksData.length}</span>
          </div>
          <div>
            <p>Concluidas</p>
            {
              completeTasks == 0 ?
                <span>{completeTasks}</span>
                :
                <span>{`${completeTasks} de ${tasksData.length}`}</span>
            }
          </div>
        </div>
        {
          tasksData.map((data, index) => (
            <Task
              key={index}
              title={data}
              onDeleteTask={() => {
                handleDeleteTask(data)
              }}
              onCompleteTask={handleCompleteTask}
              onDescompleteTask={handleDescompleteTask}
            />
          ))
        }
      </main>
    </>
  )
}