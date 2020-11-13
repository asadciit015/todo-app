import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import './TaskList.css';

function TaskList(props) {
	const { tasksList, toggleComplete, handleClickOpen, setUpdates } = props;

	return tasksList.map((task) => (
		<div key={task.key} className='taskList'>
			<span>
				<Checkbox
					checked={task.complete}
					color='#346D6A'
					onClick={() => toggleComplete(task.id)}
				/>
			</span>
			<p>
				<TextareaAutosize
					className='TextareaAutosize'
					style={{
						textDecoration: task.complete ? 'line-through' : '',
					}}
					type='text'
					id={task.id}
					value={task.task}
					onChange={(e) => {
						setUpdates(e.target.value, task.id);
					}}
				></TextareaAutosize>
				<span className='TrashIcon'>
					{task.done ? (
						<>
							<DoneAllOutlinedIcon />
						</>
					) : (
						''
					)}

					<DeleteOutlineOutlinedIcon
						style={{ fill: '#346D6A' }}
						onClick={() => handleClickOpen(task)}
					/>
				</span>
			</p>
		</div>
	));
}
export default TaskList;
