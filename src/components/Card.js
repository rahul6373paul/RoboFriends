import React from 'react';

const Card = ({ id, name, email, phone, onClick }) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow pw2 shadow-5'  onClick={onClick}>
			<img alt='robot_one' src={`https://robohash.org/${name}?size=200x200`} />

			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<p>{phone}</p>
			</div>

		</div>
		);
}

export default Card;