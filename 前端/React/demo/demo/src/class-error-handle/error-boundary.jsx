import React from 'react';
export class ErrorBoundary extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error:null,
			errorInfo:null
		}
	};
	compontDidCatch(error,errorInfo){      // 错误边界特有的函数
		this.setState({
			error:error,
			errorInfo:errorInfo
		})
	}
	render(){
		if(this.state.errorInfo){
			return (
				<div>
					<h2>Have something error</h2>
					<details>
						<p>{this.state.error && this.state.error.toString()}</p>
						<p>{this.state.errorInfo.compontStack}</p>
					</details>
				</div>
			)
        }
        return <div>{this.props.children}</div>
	}
}