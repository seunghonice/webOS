import React, { Component } from 'react';
import Table from "react-table";
import namor from "namor";
import 'react-table/react-table.css'

import './DSM.css';

class DSM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceNumber: 24
        };
    }
    render() {
        let rows = [];
        for (var i = 2; i <= this.state.serviceNumber; i++) {
            rows.push(<RowTd number={i} paddingCells={this.state.serviceNumber}/>)
        }

        return (
            <table cellSpacing="0">
                <thead>
                    <ColTd number={this.state.serviceNumber} />
                </thead>
                <tbody>
                    <FirstRowTd number="1" paddingCells={this.state.serviceNumber} />
                    {rows}
                </tbody>
            </table>
        );
    }
}

class ColTd extends Component {
    render() {
        var colTdStyle = {
            textAlign: "center",

        }
        var span = {
            // 회전, 오른쪽정렬
        }
        let cols = [];
        for (var i = 1; i <= this.props.number; i++) {
            cols.push(<td style={colTdStyle} class="td colTd" cellspacing="0" valign="bottom"><span style={span}>{i}</span></td>)
        }
        return (
            <tr>
                <td class="td" colSpan="3">webOS Luna Services</td>
                {cols}
            </tr>
        );
    }
}

class FirstRowTd extends Component {
    render() {
        var rowTdStyle = {
            textAlign: "right",
        };
        let paddingCells = [];
        for (var i = 1; i <= this.props.paddingCells; i++) {
            paddingCells.push(<td class="td"></td>)
        };
        return (
            <tr>
                <td class="td package1" rowSpan={this.props.paddingCells} valign="top">com</td>
                <td class="td package2" rowSpan={this.props.paddingCells} valign="top">webOS</td>
                <td class="td rowTd" style={rowTdStyle} cellspacing="0">
                    <td class="serviceName"> {namor.generate({ words: 1, numbers: 0 })}</td>
                    <td class="serviceNumber">{this.props.number}</td>
                </td>
                {paddingCells}
            </tr>
        );
    }
}
class RowTd extends Component {
    render() {
        var rowTdStyle = {
            textAlign: "right",
        };
        let paddingCells = [];

        for (var i = 1; i <= this.props.paddingCells; i++) {
            paddingCells.push(<td class="td"></td>)
        };
        return (
            <tr>
                <td style={rowTdStyle} class="td rowTd" cellspacing="0">
                    <td class="serviceName"> {namor.generate({ words: 1, numbers: 0 })}</td>
                    <td class="serviceNumber">{this.props.number}</td>
                </td>
                {paddingCells}
            </tr>
        );
    }
}

export default DSM;