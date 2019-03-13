import React, { Component } from 'react';


const Laps = (props) => {
	return (
		<ul className="list-group list-group-flush">
			{
				props.laps.map((lap , index) => {
					return (
							<li key = { index } className="list-group-item">
								{lap.min} <span className="text-success">Minute</span> {lap.sec} <span className="text-primary">Second</span> {lap.milis} <span className="text-danger">Mili Seond</span>
							</li>
						)
				})
			}
		</ul>
		);
};

export default Laps;


