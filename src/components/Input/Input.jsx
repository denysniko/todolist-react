import TextField from '@mui/material/TextField'

export const Input = ({ label, value, onChange }) => {
	return (
		<TextField
			id='outlined-basic'
			label={label}
			variant='outlined'
			value={value}
			onChange={onChange}
		/>
	)
}
