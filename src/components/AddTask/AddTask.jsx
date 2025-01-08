import { useState } from 'react'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import style from './AddTask.module.css'

export const AddTask = ({ onAddTask }) => {
	const [name, setName] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

		if (name.trim()) {
			setName('')
			onAddTask(name)
		}
	}

	return (
		<form className={style.wrapper} onSubmit={handleSubmit}>
			<TextField
				id='outlined-basic'
				label='Add a task'
				variant='outlined'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<Button type='submit' variant='contained'>
				Add
			</Button>
		</form>
	)
}
