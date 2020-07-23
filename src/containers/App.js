import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import './App.css'
import ErrorBoundary from './ErrorBoundary';

class App extends Component {

	constructor(){

		super();

		this.state = {
			robots: [],
			searchField: ''
		}
	}


	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})

	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		}).then(users=>{
			this.setState({ robots: users})
		})

	}

	render(){

		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})

		return(
			<div>
				<h1 className='tc f1 g' >the RoboFriends-Community</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<ErrorBoundary>
						<CardList className='tc' robots={filteredRobots} />			
				</ErrorBoundary>
			</div>
			);		
	}
}

export default App;