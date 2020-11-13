import React from 'react';
import './App.css';
import TaskList from './TaskList';
import SimpleMenu from './components/toggle.js';
import CustomizedInputBase from './components/searchBar';
import shortid from 'shortid';
import AlertDialogSlide from './components/TaskDeleteDialog.jsx';

//material UI libraries
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

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
			search: '',
			currentTask: {
				task: '',
			},
			open: false,
			done: false,
			ascending: false,
			descending: false,
			completedTop: false,
			completedLast: false,
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
		tasks.forEach((task) => {
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
	// function for search Task
	searchTask = (e) => {
		this.setState({ search: e.target.value });
	};
	// function to sort tasks in ascending way
	sortingTaskAscending = () => {
		this.setState({
			ascending: !this.state.ascending,
		});
	};
	// function to sort tasks in descending way
	sortingTaskDescending = () => {
		this.setState({
			descending: !this.state.descending,
		});
	};
	sortingCompletedTop = () => {
		this.setState({
			completedTop: !this.completedTop,
		});
	};
	sortingCompletedLast = () => {
		this.setState({
			completedLast: !this.completedLast,
		});
	};
	render() {
		let tasksList = this.state.tasks;

		if (!this.state.filter) {
			tasksList = this.state.tasks.filter((task) => !task.complete);
		}
		if (this.state.search !== '') {
			tasksList = tasksList.filter((task) =>
				task.task.includes(this.state.search)
			);
		}
		if (this.state.descending) {
			let temp = [...this.state.tasks];
			temp = temp.sort((a, b) => b.task.localeCompare(a.task));
			this.setState({
				tasks: temp,
				descending: false,
			});
		}
		if (this.state.ascending) {
			let temp = [...this.state.tasks];
			temp = temp.sort((a, b) => a.task.localeCompare(b.task));
			this.setState({
				tasks: temp,
				ascending: false,
			});
		}
		if (this.state.completedTop) {
			let temp = [...this.state.tasks];
			let completedTasks = temp
				.filter((task) => task.complete === true)
				.sort((a, b) => a.task.localeCompare(b.task));
			let inCompletedTasks = temp
				.filter((task) => task.complete === false)
				.sort((a, b) => a.task.localeCompare(b.task));
			let tasksList = [...new Set([...completedTasks, ...inCompletedTasks])];
			this.setState({
				tasks: tasksList,
				completedTop: false,
			});
		}
		if (this.state.completedLast) {
			let temp = [...this.state.tasks];
			let completedTasks = temp
				.filter((task) => task.complete === true)
				.sort((a, b) => a.task.localeCompare(b.task));
			let inCompletedTasks = temp
				.filter((task) => task.complete === false)
				.sort((a, b) => a.task.localeCompare(b.task));
			let tasksList = [...new Set([...inCompletedTasks, ...completedTasks])];
			this.setState({
				tasks: tasksList,
				completedLast: false,
			});
		}

		return (
			<div className='main'>
				{/* main header */}
				<header>
					<div className='title'>
						<Typography variant='h6'> My Todo List</Typography>
						<CustomizedInputBase searchTask={this.searchTask} />
						<SimpleMenu
							updateTasksToShow={this.updateTasksToShow}
							filter={this.state.filter}
							sortingTaskAscending={this.sortingTaskAscending}
							sortingTaskDescending={this.sortingTaskDescending}
							sortingCompletedTop={this.sortingCompletedTop}
							sortingCompletedLast={this.sortingCompletedLast}
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
					<AlertDialogSlide
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
