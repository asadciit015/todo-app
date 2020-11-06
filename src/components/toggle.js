import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function SimpleMenu(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { updateTasksToShow, filter } = props;
	return (
		<div>
			<IconButton
				edge='start'
				color='inherit'
				aria-label='menu'
				onClick={(event) => setAnchorEl(event.currentTarget)}
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={() => setAnchorEl(null)}
			>
				<MenuItem onClick={updateTasksToShow}>
					{filter ? <>Hide Completed Task</> : <>Show Completed Task</>}
				</MenuItem>
			</Menu>
		</div>
	);
}
