import React, {Component} from 'react';

class Header extends Component{
	shouldComponentUpdate(){
		return true;
	}
	render(){
		return <h1 className='tc f1 g' >the RoboFriends-Community</h1>
	}
}

export default Header;