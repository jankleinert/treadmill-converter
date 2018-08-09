import React from 'react';
import axios from 'axios';

class MphPanel extends React.Component {
	constructor() {
		super();
		
	}
    
	render() {
		return (
	      <div className="treadmill-wrapper">
	      <div className="treadmill-title">Imperial (mph)</div>
	      <span>{this.props.value} mph</span>
	      <button className="treadmill-control" onClick={this.props.onUpClick}>+</button>
	      <button className="treadmill-control" onClick={this.props.onDownClick}>-</button>
	      </div>
	    );
	}
    

}

export default MphPanel;