import React from 'react';
import axios from 'axios';

class KphPanel extends React.Component {
	constructor() {
		super();
	}
   
	render() {
		return (
	      <div className="treadmill-wrapper">
	      <div className="treadmill-title">Metric (km/h)</div>
	      <span>{this.props.value} kph</span>
	      <button className="treadmill-control" onClick={this.props.onUpClick}>+</button>
	      <button className="treadmill-control" onClick={this.props.onDownClick}>-</button>
	      </div>
	    );
	}  
}

export default KphPanel;