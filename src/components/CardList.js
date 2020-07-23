import React from 'react';
import Card from './Card';
import 'tachyons';



const CardList = ({ robots }) =>{

	return(	<div>
				{
					robots.map((user,i)=>{
						return <Card className='tc' id={user.id} name={user.name} email={user.email} phone={user.phone} />
					})
				}
			</div>
			
		);
}

// var CardList = createReactClass({

// 	getInitialState: function(){
// 		return {
// 			activeUser: {}
// 		};
// 	},

// 	saveActiveUser: function(user){
// 		this.setState({activeUser: user})
// 		console.log("activeUser is : ", this.state.activeUser.id)
// 	},

// 	render: function() {
// 		return(	
// 				<div>
// 					{<Current id='mov' currentState={this.state.activeUser} />}
					
// 					<div className='tc ' >
// 					<hr/>
// 					{
// 						robots.map((user,i)=>{
// 							return <Card keys={i} id={user.id} name={user.name} email={user.email} phone={user.phone} onClick={ (user)=> {this.saveActiveUser(robots[i])}} />
// 						})
// 					}
// 					</div>
					
// 				</div>
				
// 		);
// 	}
// })

export default CardList;