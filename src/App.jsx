import React from 'react';
import './App.css';
import TaskList from './TaskList';
import SimpleMenu from './components/toggle.js';
import shortid from 'shortid';
import ResponsiveDialog from './components/DeleteDialog.jsx';

//material UI libraries
import { styled } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
// custom styling for TextField
const MyField = styled(TextField)({
	width: '100%',
	position: 'relative',
	bottom: '0px',
});
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			filter: true,
			currentTask: {
				task: '',
			},
			open: false,
			done: false,
			selectedTask: {},
		};
	}

	// function for input from user
	handleInput = (e) => {
		this.setState({
			currentTask: {
				task: e.target.value,
				id: shortid.generate(),
				complete: false,
			},
		});
	};

	// function to add task which user inputs
	addTask = (e) => {
		e.preventDefault();
		const newTask = this.state.currentTask;
		if (newTask.task !== '') {
			const newTasks = [newTask, ...this.state.tasks];
			this.setState({
				tasks: newTasks,
				currentTask: {
					task: '',
					id: '',
				},
			});
		}
	};
	// function to delete the task
	DeleteTask = (id) => {
		if (id) {
			const FilteredTasks = this.state.tasks.filter((task) => task.id !== id);
			this.setState({
				tasks: FilteredTasks,
				open: false,
			});
		} else {
			this.setState({
				open: false,
			});
		}
	};
	// function to edit the task
	setUpdates = (text, id) => {
		const tasks = this.state.tasks;
		tasks.map((task) => {
			if (task.id === id) {
				task.task = text;
				task.done = true;
			}
		});
		this.setState({
			tasks: tasks,
		});
	};
	// function for done tasks
	toggleComplete = (id) => {
		this.setState({
			tasks: this.state.tasks.map((task) => {
				if (task.id === id) {
					return {
						...task,
						complete: !task.complete,
					};
				} else {
					return task;
				}
			}),
		});
	};
	//  function to show completed task on screen
	updateTasksToShow = () => {
		this.setState({
			filter: !this.state.filter,
		});
	};
	//  function to show the delete task dialogue box
	handleClickOpen = (task) => {
		this.setState({
			selectedTask: task,
			open: true,
		});
	};

	render() {
		let tasksList = this.state.tasks;
		if (!this.state.filter) {
			tasksList = this.state.tasks.filter((task) => !task.complete);
		}

		return (
			<div className='main'>
				{/* main header */}
				<header>
					<div className='title'>
						<h3>My Todo List</h3>
						<SimpleMenu
							updateTasksToShow={this.updateTasksToShow}
							filter={this.state.filter}
						/>
					</div>
				</header>
				<div className='taskListScrolling'>
					{/* calling TaskList  component */}
					<TaskList
						tasks={this.state.tasks}
						DeleteTask={this.DeleteTask}
						setUpdates={this.setUpdates}
						done={this.state.done}
						toggleComplete={this.toggleComplete}
						tasksList={tasksList}
						handleClickOpen={this.handleClickOpen}
					></TaskList>
				</div>
				{this.state.open && (
					<ResponsiveDialog
						DeleteTask={this.DeleteTask}
						open={this.state.open}
						selectedTask={this.state.selectedTask}
					/>
				)}
				{/* footer section for task submission */}
				<footer className='footerStyle'>
					<form onSubmit={this.addTask}>
						<MyField
							fullWidth='true'
							type='text'
							label='Enter your task and press enter'
							variant='filled'
							value={this.state.currentTask.task}
							onChange={this.handleInput}
						/>
					</form>
				</footer>
			</div>
		);
	}
}
export default App;
