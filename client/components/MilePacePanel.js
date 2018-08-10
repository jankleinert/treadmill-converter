import React from 'react';
import axios from 'axios';

class MilePacePanel extends React.Component {
	constructor() {
		super();
		
	}
    
	render() {
		return (
	      <div className="treadmill-wrapper pace">
	      <span>{this.props.minutes}:{this.props.seconds} min/mile</span>
	      </div>
	    );
	}
    

}

export default MilePacePanel;