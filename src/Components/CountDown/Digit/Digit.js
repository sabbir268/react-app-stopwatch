import React, { Component } from 'react';
import './Digit.css';

const Digit = (props) => {
	return (
		<div className="digit col-sm-3 h-100 mx-2 mt-3 text-center" style= { {borderColor: props.color } } >
		<h1 className="display-2 py-3" style= { {color: props.color } }>
		{ props.value < 10 ? `0${props.value}` : props.value } 
		</h1>
		</div>
		);
	};

export default Digit;