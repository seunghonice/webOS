import React, { Component } from 'react';
import img_logo from './images/logo.png'
import './Logobar.css';

class Logobar extends Component {
    render() {
        var logobar = {
            width: "100%",
            height: 80,
            backgroundColor: "#293742",
            textAlignment: "left",
            color: "#CCC"
        }
        var imgStyle = {
            height: 50,
            marginTop: 15,
            marginLeft: 15
            
        }
        return (
        	<div style={logobar}>
        		<img src={img_logo} alt="hi" style={imgStyle} />
        	</div>
        );
    }
}

export default Logobar;
