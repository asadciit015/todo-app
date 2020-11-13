import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';

export default function SimpleMenu(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const {
		updateTasksToShow,
		filter,
		sortingTaskAscending,
		sortingTaskDescending,
		sortingCompletedLast,
		sortingCompletedTop,
	} = props;
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
				<MenuItem onClick={sortingTaskAscending}>
					Sort on title <ArrowDownwardOutlinedIcon />
				</MenuItem>
				<MenuItem onClick={sortingTaskDescending}>
					Sort on title <ArrowUpwardOutlinedIcon />
				</MenuItem>
				<MenuItem onClick={sortingCompletedLast}>
					Show completed at last
				</MenuItem>
				<MenuItem onClick={sortingCompletedTop}>Show completed at top</MenuItem>
			</Menu>
		</div>
	);
}
