import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	/*increment() {
		this.setState({
			count: this.state.count + 1  
		}, () => {console.log('Call Back Value', this.state.count)})
		console.log(this.state.count);
	}*/

	increment() {
		this.setState(prevState => ({
			count: prevState.count + 1
		}))
		console.log(this.state.count);
	}

	incrementfive() {
		this.increment()
		this.increment()
		this.increment()
		this.increment()
		this.increment()
	}
 	render() {
		return(
			<div>
				<div>Count - {this.state.count}</div>
				<button onClick={() => this.incrementfive()}>Increment</button>
			</div>
		);
	}
}

export default Counter;