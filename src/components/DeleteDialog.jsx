import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ResponsiveDialog(props) {
	const { DeleteTask, selectedTask } = props;

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<div>
			<Dialog
				fullScreen={fullScreen}
				open={props.open}
				onClose={() => DeleteTask()}
				aria-labelledby='responsive-dialog-title'
			>
				<DialogTitle id='responsive-dialog-title'>{'Delete Task'}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Are you sure you want to delete this task?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={() => DeleteTask()} color='primary'>
						NO
					</Button>
					<Button
						onClick={() => DeleteTask(selectedTask.id)}
						color='primary'
						autoFocus
					>
						YES
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
