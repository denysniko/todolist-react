import { DeleteButton } from '../DeleteButton/DeleteButton'
import style from './TaskList.module.css'

export const TaskList = ({ tasks, onDeleteTask }) => {
	return (
		<ul className={style.list}>
			{tasks.map(task => (
				<li key={task.id} className={style.item}>
					{task.name}
					<DeleteButton
						aria='delete'
						size='large'
						onDelete={() => onDeleteTask(task.id)}
					/>
				</li>
			))}
		</ul>
	)
}
