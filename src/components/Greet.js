import React from 'react';

//function Greet() {
//	return <p>Hello Shimul!</p>
//}

const Greet = (props) => {
	const {name, heroName} = props
	return (
		<div>
			<h1>
				Hello {name} {heroName}
			</h1>
		</div>
	)
}
export default Greet;