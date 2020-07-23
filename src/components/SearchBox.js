import React from 'react';

const SearchBox = ({ searchChange}) => {
	return(
		<div className='pa2 tc'>
			<input 
				className='pa3 ba b--green bg-lightest-blue tc' 
				type='search' 
				placeholder='search for robots'
				// value={searchField} 
				onChange={searchChange} />
		</div>
		);

}

export default SearchBox;