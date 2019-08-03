import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
	container: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},
	textField: {
	  marginLeft: theme.spacing(1),
	  marginRight: theme.spacing(1),
	  width: 1000
	},
	dense: {
	  marginTop: theme.spacing(2),
	},
	button: {
		margin: theme.spacing(1),
	}
}));

export default function URLInput(props) {
	const classes = useStyles();
	const [values, setValues] = React.useState({
	  url: ''
	});

	const handleChange = url => event => {
		setValues({ ...values, [url]: event.target.value });
	};

	
	
	return (
		<form className={classes.container} noValidate autoComplete="off">
			<TextField
				id="outlined-name"
				label="URL"
				className={classes.textField}
				value={values.url}
				onChange={handleChange('url')}
				margin="normal"
				variant="outlined"
			/>
			<Button variant="contained" color="primary" className={classes.button} 
				size="medium" onClick={props.onNewURL(values.url)}>
        		Go
      		</Button>
		</form>
	)
}