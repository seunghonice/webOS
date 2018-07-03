import React, { Component } from 'react';
import './Container.css';
import Logobar from './Logobar';
import Contents from './Contents';

class Container extends Component {
	render() {
	    return (
	    	<div>
	    		<Logobar />
		    	<Contents />
	    	</div>
	    );
	}
}

export default Container;
