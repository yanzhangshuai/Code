import React from 'react';

export class Person extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			count:0
		}
	}
	addCount(){
		this.setState((state,props)=>({
			count:++state.count
		}));
	}
	render(){
		if(this.state.count > 5){
			throw new Error('The number property cannot be greater than 5');
		}
		return (
			<div>
				<h2>这是错误边界 测试</h2>
				<p onClick={this.addCount.bind(this)}>{this.state.count}</p>
			</div>
		)
	}
}
