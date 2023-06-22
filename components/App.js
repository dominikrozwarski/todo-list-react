import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
	counter = 5;
	state = {
		tasks: [
			{
				id: 0,
				text: 'zagrac w wiedzmina',
				date: '2024-02-15',
				important: true,
				active: true,
				finishDate: null,
			},
			{
				id: 1,
				text: 'kupic jablka',
				date: '2024-03-15',
				important: true,
				active: true,
				finishDate: null,
			},
			{
				id: 2,
				text: 'wyniesc smieci',
				date: '2024-04-15',
				important: false,
				active: true,
				finishDate: null,
			},
			{
				id: 3,
				text: 'kupic sok',
				date: '2024-02-12',
				important: false,
				active: true,
				finishDate: null,
			},
			{
				id: 4,
				text: 'silka',
				date: '2024-02-05',
				important: false,
				active: true,
				finishDate: null,
			},
		],
	};

	deleteTask = (id) => {
		const tasks = [...this.state.tasks];
		const index = tasks.findIndex((task) => task.id === id);
		tasks.splice(index, 1);
		this.setState({
			tasks,
		});
	};

	changeTaskStatus = (id) => {
		const tasks = Array.from(this.state.tasks);
		tasks.forEach((task) => {
			if (task.id === id) {
				task.active = false;
				task.finishDate = new Date().getTime();
			}
		});
		this.setState({
			tasks,
		});
	};

	addTask = (text, date, important) => {
		const task = {
			id: this.counter,
			text: text,
			date: date,
			important: important,
			active: true,
			finishDate: null,
		};
		this.counter++;
		this.setState((prevState) => ({
			tasks: [...prevState.tasks, task],
		}));
		return true;
	};

	render() {
		return (
			<div className='App'>
				<h1>TODO APP </h1>
				<AddTask add={this.addTask} />
				<TaskList
					tasks={this.state.tasks}
					delete={this.deleteTask}
					change={this.changeTaskStatus}
				/>
			</div>
		);
	}
}

export default App;
