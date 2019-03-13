import React, { Component } from 'react';
import './Title.css';


class Title extends Component {

	constructor(props){
		super(props)

		this.state = {
			title: 'This is title',
			isInput: false
		}
	}


	editHandler(){
		this.setState({
			...this.state,
			isInput: true
		})
	}

	inputFocus(){
		this.setState({
			...this.state,
			title: ''
		})
	}

	inputChange(event){
		this.setState({
			...this.state,
			title: event.target.value
		})
	}

	keyPrssHandler(event){
		if(event.key === 'Enter'){
				this.setState({
				...this.state,
				isInput: false
			})
		}
	}

	inputBlur(){
				this.setState({
				...this.state,
				isInput: false
			})
	}


	render() {

		let output = null 

		if (this.state.isInput) {
			output = (
					<div className="title">
						<input
						 className="form-control form-control-sm h-100" 
						 onChange = { (event) => this.inputChange(event) }
						 onKeyPress = { (event) => this.keyPrssHandler(event) }
						 onBlur = { () => this.inputBlur() }
						 type="text" 
						 value={ this.state.title }
						 />
					</div>
				)
		} 
		else {
			output = (
					<div className="d-flex title">
						<h1 className="display-4 text-success">{this.state.title}</h1>
						<span
							onClick = { () => this.editHandler() }
							className="ml-auto edit-icon"

						 >
							<i className="fas fa-pencil-alt"></i>
						</span>
					</div>
				)
		}

		return (
			<div>
				{ output }
			</div>
		);
	}
}

export default Title;

