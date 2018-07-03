import React, { Component } from 'react';
import Table from "react-table";
import 'react-table/react-table.css';
import DSM from './DSM'
import Detail from './Detail';
import './Visualization.css';

class Visualization extends Component {
    render() {
        return (
            <div>
                <DSM />
                <Detail />
            </div>
        );
    }
}

export default Visualization;
