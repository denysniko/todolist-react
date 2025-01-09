import { DeleteButton } from '../DeleteButton/DeleteButton'
import style from './TaskList.module.css'

export const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
	return (
		<ul className={style.list}>
			{tasks.map(task => (
				<li key={task.id} className={style.item}>
					{task.name}
					<Task
						task={task}
						onChangeTask={onChangeTask}
						onDeleteTask={onDeleteTask}
					/>
				</li>
			))}
		</ul>
	)
}

export const Task = ({ task, onChangeTask, onDeleteTask }) => {
	return (
		<label>
			<input
				type='checkbox'
				checked={task.done}
				onChange={e => onChangeTask({ ...task, done: e.target.checked })}
			/>
			<DeleteButton
				aria='delete'
				size='large'
				onDelete={() => onDeleteTask(task.id)}
			/>
		</label>
	)
}
