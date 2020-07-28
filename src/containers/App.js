import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import './App.css'
import { connect } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';


import { setSearchField, requestRobotss } from '../action.js';

const mapStateToProps = state => {
	console.log(state)
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobotss: () => dispatch(requestRobotss())		
	}
}

class App extends Component {

	componentDidMount(){
		this.props.onRequestRobotss();
	}

	render(){
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? 
		<h1 className='tc'>Loading ...</h1>:
		(
			<div>
				
				<SearchBox searchChange={onSearchChange} />
				<ErrorBoundary>
						<CardList className='tc' robots={filteredRobots} />			
				</ErrorBoundary>
			</div>
			);		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);