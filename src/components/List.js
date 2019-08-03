import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import URLInput from './URLInput';

const dessertData = require('./dessert.json');
// const petData = require('./pets.json');

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));




// const tableHeaders = createHeaders(petData);

// Create Table Data from JSON


// let rows = petData;

const getKeys = (obj) => {
	return Object.keys(obj);
}
  
function List(props) {
	const classes = useStyles();


	// Create Table Headers from JSON

	const createHeaders = (data) => {
		let heads = [];
		let item = data[0];
		Object.keys(item).forEach(key => {
			key = key.charAt(0).toUpperCase() + key.slice(1);
			heads.push(key)
		})
		return heads;
	}

	let tableHeaders = createHeaders(props.data);
	let rows = props.data;
  
	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						{tableHeaders.map(header => (
							<TableCell key={header}>{header}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.name}>
							{getKeys(row).map(key => (
								<TableCell key={key}>{row[key]}</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
  }

class ListView extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			data: dessertData
		}
	}

	

	render() {

		const handleNewUrl = url => {
			// this.setState({url: url});
			goGrabMeThatData(url);
		}

		const goGrabMeThatData = (url) => {
			// console.log('url: ' + values.url);
			axios.get(url).then(res => {
				console.log(JSON.stringify(res.data))
				this.setState({ data: res.data})
			})
		}

		return (
			<div>
				<URLInput onNewURL={handleNewUrl}></URLInput>
				<List data={this.state.data}></List>
			</div>

		)
	}
}

export default ListView;