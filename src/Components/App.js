import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title'
import CountDown from './CountDown/CountDown'
import Controller from './Controller/Controller'
import Laps from './Laps/Laps'
class App extends Component {

	constructor(props){
		super(props)


		this.state ={
			time:{
				min: 0,
				sec: 0,
				milis: 0
			},
			laps: []
		}
	}

	getStart(){
		this.intervalId = setInterval(
			() => {
				let min = this.state.time.min
				let sec = this.state.time.sec
				let milis = this.state.time.milis

				if( milis >= 10 ){
					sec = sec + 1;
					milis = 0;
				}
				if( sec >= 60 ){
					min = min + 1;
					sec = 0;
				}

				this.setState({
					...this.state,
					time: {
						min,
						sec,
						milis: milis+1
					}
				})

			},100)
	}

	getPause(){
		clearInterval(this.intervalId)
	}

	getLap(){
		let time = {
			...this.state.time
		}

		this.setState({
			...this.state,
			laps: [time,...this.state.laps]
		})

		console.log(this.state.laps)
	}

	getReset(){
		this.setState({
			time:{
				min: 0,
				sec: 0,
				milis: 0
			},
			laps : []
		})
	}

  render() {
    return (
      <div className="App">
       		<div className="container">

	       		<div className="row">
	       			<div className="col-md-6 offset-md-3 py-5">
	       				<Title />
	       				<CountDown time={ this.state.time }/>
	       				<Controller 
	       				start= { this.getStart.bind(this) }
	       				pause= { this.getPause.bind(this) }
	       				lap= { this.getLap.bind(this) }
	       				reset= { this.getReset.bind(this) }
	       				 />

	       				 < Laps className="my-5" laps = { this.state.laps } />
	       			</div>

	       		</div>
       			
       		</div>
      </div>
    );
  }
}

export default App;
