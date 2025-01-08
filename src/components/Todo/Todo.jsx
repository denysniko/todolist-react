import { useState } from 'react'
import { AddTask } from '../AddTask/AddTask'
import { TaskList } from '../TaskList/TaskList'
import style from './Todo.module.css'

let nextId = 0

const TodoApp = () => {
	const [tasks, setTasks] = useState([])

	const handleAddTask = name => {
		setTasks([...tasks, { id: nextId++, name: name }])
	}

	const handleDeleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	return (
		<section className={style.todo}>
			<h1 className={style.title}>To-Do List</h1>
			<blockquote className={style.quote}>
				<p>Organise your tasks today - manage your success tomorrow.</p>
			</blockquote>

			<AddTask onAddTask={handleAddTask} />
			<TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
		</section>
	)
}

export default TodoApp
