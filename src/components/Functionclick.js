import React from 'react';

function Functionclick() {
	function clickHandler() {
		console.log("Button CLicked");
	}
	return(
		<button onClick={clickHandler}>Click</button>
	)
}

export default Functionclick;