import { useState } from 'react'
import { Button } from '@mui/material'
import { Input } from '../Input/Input'
import { DeleteButton } from '../DeleteButton/DeleteButton'
import style from './ToDoList.module.css'

let nextId = 0

const ToDoList = () => {
	const [name, setName] = useState('')
	const [tasks, setTasks] = useState([])

	const handleAddTask = () => {
		if (name.trim()) {
			setTasks([...tasks, { id: nextId++, name: name }])
			setName('')
		}
	}

	const handleDeleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	const handleSubmit = e => {
		e.preventDefault()
		handleAddTask()
	}

	return (
		<section className={style.todo}>
			<h1 className={style.title}>To-Do List</h1>
			<blockquote className={style.quote}>
				<p>Organise your tasks today - manage your success tomorrow.</p>
			</blockquote>

			<form className={style.wrapper} onSubmit={handleSubmit}>
				<Input
					label='Add a task'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<Button type='submit' variant='contained'>
					Add
				</Button>
			</form>

			<ul className={style.list}>
				{tasks.map(task => (
					<li key={task.id} className={style.item}>
						{task.name}
						<DeleteButton
							aria='delete'
							size='large'
							onDelete={() => handleDeleteTask(task.id)}
						/>
					</li>
				))}
			</ul>
		</section>
	)
}

export default ToDoList
