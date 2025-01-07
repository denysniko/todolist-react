import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

export const DeleteButton = ({ aria, size, onDelete }) => {
	return (
		<IconButton aria-label={aria} size={size} onClick={onDelete}>
			<DeleteIcon />
		</IconButton>
	)
}
